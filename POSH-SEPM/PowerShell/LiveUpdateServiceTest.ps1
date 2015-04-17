# Directory where this script is located
$ScriptDir = Split-Path $MyInvocation.MyCommand.Path

# Dot-Source includes from our common library
. $ScriptDir\common\Get-SepmRmmWebService.ps1

function TestLiveUpdateService
{
	param([ValidateNotNullOrEmpty()]$configFile = "$($ScriptDir)\Config.xml")
	try
	{
		# Read our config file
		[xml]$config = Get-Content $configFile

		# Generate a client proxy for communicating with the web service.
		$liveupdateService = Get-SepmRmmWebService -HostName $config.SepmWS.HostName -Port $config.SepmWS.PortNo -WsdlFile "$($config.SepmWS.wsdlDir)\LiveUpdateService.wsdl" -AccessToken $config.SepmWS.AccessToken

		# Get the latest version of the VirusDefs
		$status = $liveupdateService.getLiveUpdateContentVersion().liveUpdateAvDefsStatus

		Write-Host "---------------------------------------------------------------------"
		Write-Host "Definition content present?             "$status.avDefsContentPresent
		Write-Host "Server AV definitions present?          "$status.serverAvDefsContentPresent
		Write-Host "Latest AV definitions date:             "$status.latestAvDefsContentDate
		Write-Host "Latest AV definitions revision:         "$status.latestAvDefsContentRevision
		Write-Host "Latest server AV definitions date:      "$status.latestServerAvDefsContentDate
		Write-Host "Latest server AV definitions revision:  "$status.latestServerAvDefsContentRevision
		Write-Host "---------------------------------------------------------------------"

		# Send a command to the SEPM server to run LiveUpdate
		$luResult = $liveupdateService.runLiveUpdate()
		if ($luResult -eq "1")
		{
			Write-Host "LiveUpdate started successfully"
		}
		else
		{
			Write-Host "LiveUpdate already running"
		}
	}
	catch [System.Web.Services.Protocols.SoapException]
	{
		Write-Error "Unexpected SoapException: $_.Exception.Detail.FirstChild.get_Name() - $_.Exception.Detail.FirstChild.message"
	}
	catch
	{
		$error[0].Exception | Format-List -Force
		Write-Error ("Unexpected error")
	}
	finally
	{
		$liveupdateService.Dispose()
	}
}

TestLiveUpdateService
