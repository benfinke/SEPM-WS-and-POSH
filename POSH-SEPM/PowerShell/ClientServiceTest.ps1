# Directory where this script is located
$ScriptDir = Split-Path $MyInvocation.MyCommand.Path

# Dot-Source includes from our common library
. $ScriptDir\common\Get-SepmRmmWebService.ps1

function TestClientService
{
	param([ValidateNotNullOrEmpty()]$configFile = "$($ScriptDir)\Config.xml")
	try
	{
		# Read our config file
		[xml]$config = Get-Content $configFile
		
		# Generate a client proxy for communicating with the web service.
		$clientService = Get-SepmRmmWebService -HostName $config.SepmWS.HostName -Port $config.SepmWS.PortNo -WsdlFile "$($config.SepmWS.wsdlDir)\ClientService.wsdl" -AccessToken $config.SepmWS.AccessToken

		$pagingOptions = $clientService.createPagingOptions()
		$context = $clientService.createContext()
		$context.offSet = 1

		# Write to console all SEP client groups
		$groupResult= $clientService.getGroupsByName("*",$pagingOptions,$context)
		foreach ($group in $groupResult.groups)
		{
			Write-Host "---------------------------------------------------------------------"
			Write-Host "Full Path:				"$group.fullPath
			Write-Host "ID:					"$group.id
			Write-Host "Name:					"$group.name
			Write-Host "IsInheritanceEnabled?		"$group.policyInheritanceEnabled
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
		$clientService.Dispose();
	}
}

TestClientService