# requires -version 2.0

[void] [System.Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms") 

# Directory where this script is located
$CommonDir = Split-Path $MyInvocation.MyCommand.Path

# Dot-Source includes from our common library
. $CommonDir\ConvertFrom-JSON.ps1

# Where to cache the access token
$script:SepmDefaultConnectionFile = "$env:LOCALAPPDATA\SepmRmmWS_CachedToken.txt"

Set-StrictMode -Version 2.0
trap { "Error in Get-SepmRmmWsAccessToken: $_"; break }

if ($host.Runspace.ApartmentState -ne 'STA')
{
	$msg = "Get-SepmRmmWsAccessToken may only be run in Single Threaded Appartment (STA) mode. For example, PowerShell ISE, or PowerShell.exe -STA."
    Write-Verbose $msg
    throw $msg
}

function ConvertFrom-Xml($XML) { 
    foreach ($Object in @($XML.Objects.Object)) { 
        $PSObject = New-Object PSObject 
        foreach ($Property in @($Object.Property)) { 
            $PSObject | Add-Member NoteProperty $Property.Name $Property.InnerText 
        } 
        $PSObject 
    } 
} 

<# 
 .Synopsis
  Read an access token from the cache file and decrypt it.

 .Description
  Read an access token from the cache file and decrypt it. 
  The file is encrypted to limit access to the current user via ConvertFrom-SecureString.

 .Parameter FileName
  Path to file where the connection data should be saved, default is
  $SepmDefaultConnectionFile.

 .Example
   # Write default connection data to default location
   $AccessTokenPSObject = Get-SepmWsConnectionFromCache
#>

function Get-SepmWsConnectionFromCache
{
	[CmdletBinding()]
    Param(
        [string][ValidateNotNullOrEmpty()]$FileName = $SepmDefaultConnectionFile
        )
    
    Write-Verbose "Read access token from file $FileName"
    
    Set-StrictMode -Version 2.0
    trap { "Error in Get-SepmWsConnectionFromCache: $_"; break }
    
	$encryptedString = Get-Content $FileName
	$secureString = ConvertTo-SecureString -String $encryptedString
	[String]$xmlString = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureString)); 
	$xml = New-Object XML
	$xml.LoadXml($xmlString)
	return ConvertFrom-Xml($xml)
}

<# 
 .Synopsis
  Save an access token in encrypted format to a cache file.

 .Description
  Save an access token in encrypted format to a cache file. 
  The file is encrypted to limit access to the current user via ConvertFrom-SecureString.

 .Parameter AccessToken
  Access token string.

 .Parameter FileName
  Path to file where the connection data should be saved, default is
  $SepmDefaultConnectionFile.

 .Example
   # Write default connection data to default location
   Get-SepmRmmWsAccessToken.access_token | Write-SepmWsConnectionToCache
#>

function Write-SepmWsConnectionToCache
{
    Param(
        [parameter(Mandatory=$true)]$AccessTokenPSObject,
        [string][ValidateNotNullOrEmpty()]$FileName = $SepmDefaultConnectionFile
        )
    
    Write-Verbose "Caching access token $($AccessTokenPSObject.value) as encrypted data to file $FileName"
	$xml = ConvertTo-Xml $AccessTokenPSObject
	$xmlString = $xml.OuterXml
	ConvertTo-SecureString -String $xmlString -AsPlainText -Force | ConvertFrom-SecureString | Set-Content $FileName
}

<# 
 .Synopsis
 Add the access token to the webservice proxy objects URL property. This will ensure that all reqeusts using the
 webservice proxy have the access token attached.
 
 .Description
 We alter the webservice proxy URL to append the access token for SOAP authentication.
 However, this URL change perisists the next time you try to obtain the web service - even if you dispose of the web service.
 It will persist until you quit the process that created the webservice (e.g. PowerGUI Script Editor).
 This method insures that any old bearer_token parameters are removed before adding the new bearer_token.
#>
function Set-AccessToken
 {
 	Param([parameter(Mandatory=$true)] $Webservice,
		[string][parameter(Mandatory=$true)] $AccessToken)
	
	$accessTokenName = "access_token"
	$url = $Webservice.get_Url()
	$index = $url.IndexOf($accessTokenName)
	
	# If a previous access token is present remove it
	if ($index -gt 0)
	{
		# Strip bearer_token plus the ? that precedes it.
		$url = $url.SubString(0, $index - 1)
	}
	# Add the access token to the url
	$Webservice.set_Url($url + "?$accessTokenName=$AccessToken")
	
	return $Webservice
}

<# 
 .Synopsis
  Prompt the user for credentials and then retrieve the AccessToken object.

 .Description
  Prompt the user for credentials and then retrieve the AccessToken object.
  This method will report an error if it is not run in STA mode,
  which means either PowerShell ISE or PowerShell.exe -STA.

 .Parameter HostName
  The hostname or IP of the SEPM server computer.
  
 .Parameter Port
  The port number of the SEPM tomcat server. This is not the web service port.
  This is the scm.server.port value found in the config.xml file.
  
 .Parameter ClientId
  Normally an administrator will register a new client ID, store it in config.xml 
  and this value will be read from that file.

 .Example
   # Get the access token object after the user provides authentication credentials.
   $AccessTokenPSObject = Get-SepmRmmWsAccessToken
   
   # Get the access token object after the user provides authentication credentials with verbose logging.
   $AccessTokenPSObject = Get-SepmRmmWsAccessToken -Verbose
#>
function Get-SepmRmmWsAccessToken
{
	[CmdletBinding()]
	
    Param(
		[ValidateNotNullOrEmpty()]$configFile = "$($CommonDir)\..\Config.xml",
        [string]$HostName,
        [string]$Port,
        [string]$ClientId,
		[string]$ClientSecret
        )
	# Read our config file
	[xml]$config = Get-Content $configFile
	# Validate our params
	if($HostName.trim() -eq "")		{$HostName = $config.SepmWS.HostName}
    if($Port.trim() -eq "")			{$Port = $config.SepmWS.PortNo}
    if($ClientId.trim() -eq "")		{$ClientId = $config.SepmWS.ClientId}
	if($ClientSecret.trim() -eq "")	{$ClientSecret = $config.SepmWS.ClientSecret}
	
    Write-Verbose "Get-SepmRmmWsAccessToken -HostName $HostName -Port $Port -ClientId $ClientId -ClientSecret $ClientSecret"
        
    $window = New-Object System.Windows.Forms.Form
    $window.AutoSize = $true
    $browser = New-Object System.Windows.Forms.WebBrowser
   	$browser.Width = "800"
    $browser.Height = "600"
    $window.Controls.Add($browser)

    $base="https://$($HostName):$($Port)"
	$responseType = "response_type=code"
	$ClientId = "&client_id=$($ClientId)"
	# redirect URI would normally be the RMM tool web app; 
	# we just need to specify a page that doesn't require authentication - our login page.
	$redirectUri = "&redirect_uri=https://$($HostName):$($Port)/sepm"
	$loginUri = $base + "/sepm/oauth/authorize?" + $responseType + $ClientId + $redirectUri
	write-verbose "$loginUri"
	# PS one-liner that ignores certificate errors such as self-signed certificates 
	[System.Net.ServicePointManager]::ServerCertificateValidationCallback ={$true}
   
    $browser.Navigate($loginUri)
  
    $browser.add_Navigated({
		$auth_token_key = "code"
        Write-Verbose "Get-SepmRmmWsAccessToken: Navigate event: Uri $($_.Url)"
        $oauthResult = $_.Url.Query
        $oauthResult = $oauthResult.TrimStart("?")
		$oauthResult = $oauthResult.Replace("&", "`n")
		$queryHashTable = ConvertFrom-StringData -StringData $oauthResult
         
		if ($queryHashTable.ContainsKey($auth_token_key))
        {
            $authToken = $queryHashTable[$auth_token_key];
            Write-Verbose "Get-SepmRmmWsAccessToken: Obtained $auth_token_key which is used to get the OAuth access token"
            $window.Close()
        }
        else
        {
            Write-Verbose "Get-SepmRmmWsAccessToken: Navigate event: could not interpret Uri $($_.Url)"
            # error handling TBD
        }
    })

    Write-Verbose "Get-SepmRmmWsAccessToken: Displaying GUI to enter user credentials and/or confirm access"
    [System.Windows.Forms.Application]::Run($window)
    
    $clientSecretParam = "&client_secret="+$ClientSecret
    $authKey= "&"+$auth_token_key+"="+$authToken
    $access_url = $base + "/sepm/oauth/token?grant_type=authorization_code" + $ClientId + $clientSecretParam + $redirectUri + $authKey
   	Write-Verbose "Get-SepmRmmWsAccessToken: Use auth token key to download access token @ $access_url"
    $wc = new-object net.WebClient
    $jsonData = $wc.downloadString($access_url)
	$AccessTokenPSObject = ConvertFrom-JSON -json $jsonData 
    if ($AccessTokenPSObject.value)
    {
		Write-Host "OAuth 2.0 Access Token Information for $HostName"
		Write-Host "---------------------------------------------------------------------"
		"Token expiration:    $($AccessTokenPSObject.expiresIn) seconds, which equals {0:N2} hours" -f ($($AccessTokenPSObject.expiresIn)/ (60 * 60)) | Write-Host
		Write-Host "---------------------------------------------------------------------"
    }
	return $AccessTokenPSObject
}