# Directory where this script is located
$ScriptDir = Split-Path $MyInvocation.MyCommand.Path

# Dot-Source includes from our common library
. $ScriptDir\common\Get-SepmRmmWebService.ps1

function TestCommandService
{
	param([ValidateNotNullOrEmpty()]$configFile = "$($ScriptDir)\Config.xml")
	try
	{
		# Read our config file
		[xml]$config = Get-Content $configFile
		# Generate a client proxy for communicating with the client web service.
		$clientService = Get-SepmRmmWebService -HostName $config.SepmWS.HostName -Port $config.SepmWS.PortNo -WsdlFile "$($config.SepmWS.wsdlDir)\ClientService.wsdl" -AccessToken $config.SepmWS.AccessToken

		# Generate a client proxy for communicating with the command web service.
		$commandService = Get-SepmRmmWebService -HostName $config.SepmWS.HostName -Port $config.SepmWS.PortNo -WsdlFile "$($config.SepmWS.wsdlDir)\CommandService.wsdl" -AccessToken $config.SepmWS.AccessToken

		$pagingOptions = $clientService.createPagingOptions()
		$context = $clientService.createContext()
		$context.offSet = 1
		$cmdPagingOptions = $commandService.createPagingOptions()
		$cmdContext = $commandService.createContext()
		$cmdContext.offSet = 1

		# Get a list of target machines to send the command to.
		$targets = @($config.SepmWS.ServerName)
		$computerResult = $clientService.getComputersByHostName($targets, $pagingOptions, $context)

		# Send a command to the clients; scan type: one of ScanNow_Quick, ScanNow_Full, ScanNow_Custom
		$commandResult= $commandService.runClientCommandScan(@(($computerResult.get_computers()[0]).computerId),"ScanNow_Quick")
		# Get command status
		$commandStatusDetailsResult = $commandService.getCommandStatusDetails($commandResult.get_commandId(), $cmdPagingOptions, $cmdContext)
		foreach ($commandDetails in $commandStatusDetailsResult.get_cmdStatusDetail())
		{
			Write-Host "---------------------------------------------------------------------"
			Write-Host "Begin Time		"$commandDetails.beginTime
			Write-Host "Computer IP		"$commandDetails.computerIp
			Write-Host "Computer Name	"$commandDetails.computerName
			Write-Host "Current User	"$commandDetails.currentLoginUserName
			Write-Host "Domain Name		"$commandDetails.domainName
			Write-Host "Last Updated	"$commandDetails.lastUpdateTime
			Write-Host "State ID		"$commandDetails.stateId
			Write-Host "SubState Desc	"$commandDetails.subStateDesc
			Write-Host "SubState ID		"$commandDetails.subStateId
			Write-Host "---------------------------------------------------------------------"
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
		$clientService.Dispose()
		$commandService.Dispose()
	}
}

TestCommandService