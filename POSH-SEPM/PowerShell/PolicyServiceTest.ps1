# Directory where this script is located
$ScriptDir = Split-Path $MyInvocation.MyCommand.Path

# Dot-Source includes from our common library
. $ScriptDir\common\Get-SepmRmmWebService.ps1

function TestPolicyService
{
	param([ValidateNotNullOrEmpty()]$configFile = "$($ScriptDir)\Config.xml")
	try
	{
		# Read our config file
		[xml]$config = Get-Content $configFile
		
		# Generate a client proxy for communicating with the client web service.
		$clientService = Get-SepmRmmWebService -HostName $config.SepmWS.HostName -Port $config.SepmWS.PortNo -WsdlFile "$($config.SepmWS.wsdlDir)\ClientService.wsdl" -AccessToken $config.SepmWS.AccessToken

		# Generate a client proxy for communicating with the command web service.
		$policyService = Get-SepmRmmWebService -HostName $config.SepmWS.HostName -Port $config.SepmWS.PortNo -WsdlFile "$($config.SepmWS.wsdlDir)\PolicyService.wsdl" -AccessToken $config.SepmWS.AccessToken

		# Get information about a particular policy
		$policySummaryInfo = $policyService.getPolicySummaryInfo("Virus and Spyware Protection policy - High Performance", "ANTIVIRUS")

		# Initialization
		$pagingOptions = $clientService.createPagingOptions()
		$context = $clientService.createContext()
		$context.offSet = 1

		# Get a group ID for assigning a policy to a group and all of its inherited children
		$groupResult = $clientService.getGroupsByName("*", $pagingOptions, $context)

		# Get information about a particular policy
		$policyService.assignPolicy($policySummaryInfo, $groupResult.groups[0].id, "")
		foreach($g in $groupResult.groups)
		{
			Write-Host "---------------------------------------------------------------------"
			Write-Host "ID:					" $g.id
			Write-Host "Name:					" $g.name
			Write-Host "Path:					" $g.fullPath
			Write-Host "Policy inheritance enabled?	" $g.policyInheritanceEnabled
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
		$policyService.Dispose()
	}
}

TestPolicyService