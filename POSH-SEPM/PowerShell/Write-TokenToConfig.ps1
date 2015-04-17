# Directory where this script is located
$ScriptDir = Split-Path $MyInvocation.MyCommand.Path

# Dot-Source includes from our common library
. $ScriptDir\common\Get-SepmRmmWSAccessToken.ps1

function Write-TokenToConfig
{
	[CmdletBinding()]
	param([ValidateNotNullOrEmpty()]$configFile = "$($ScriptDir)\Config.xml")
	try
	{
		# Read our config file
		[xml]$config = Get-Content $configFile
		
		# Get the access token
		$AccessToken = Get-SepmRmmWsAccessToken -HostName $config.SepmWS.HostName -Port $config.SepmWS.PortNo
		
		if(-not $AccessToken)
		{
			Write-Error "Error obtaining AccessToken, did not write to file."
			return
		}
		
		$tempXML = New-Object XML
		try
		{
			$tempXML.Load($configFile)
			$tempXML.SepmWS.AccessToken = $AccessToken.value
			$tempXML.Save($configFile)
		}
		catch
		{
			$error[0].Exception | Format-List -Force 
			Write-Debug ("Unexpected error")
		}
	}
	catch
	{
		$error[0].Exception | Format-List -Force 
		Write-Debug ("Unexpected error")
	}
}
Write-TokenToConfig