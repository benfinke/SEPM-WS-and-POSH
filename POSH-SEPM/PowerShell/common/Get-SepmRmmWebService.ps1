# requires -version 2.0
# The pair of statements below allows this script to support standard parameters
# like -Verbose to write the extra logging info.
[cmdletbinding()]
param()

# Directory where this script is located
$CommonDir = Split-Path $MyInvocation.MyCommand.Path

# Dot-Source includes from our common library
. $CommonDir\Get-SepmRmmWSAccessToken.ps1

function Get-SepmRmmWebService
 {
 	Param(
		[ValidateNotNullOrEmpty()][string] $WsdlFile, 
		[ValidateNotNullOrEmpty()]$HostName = "localhost", 
		[ValidateNotNullOrEmpty()]$Port = "8446", 
		[ValidateNotNullOrEmpty()][string]$Webservice,
		[ValidateNotNullOrEmpty()][string]$AccessToken)
		
	$uri = $null; 
	if ($WsdlFile -ne $null)
	{
		$uri = Resolve-Path $WsdlFile
		$uri = $uri.Path
	}
	else
	{
		# For unsecured web sites the following URI would work for retrieving WSDL
		$uri = New-Object System.Uri "https://$($HostName):$Port/sepm/ws/v1/$($Webservice)?wsdl"
	}
	[System.Net.ServicePointManager]::ServerCertificateValidationCallback ={$true}
	# Create the webservice proxy from the local wsdl file. 
	# The HTTP request to fetch the WSDL will not accept additional parameters like the accessToken
	# Therefore we read the wsdl from a file.
	[Management.Automation.PSObject] $service = New-WebServiceProxy -Uri $uri
	# Add the access token to the webservice URL.
	$service = Set-AccessToken $service $AccessToken

	return $service
}