# Directory where this script is located
$ScriptDir = Split-Path $MyInvocation.MyCommand.Path

# Dot-Source includes from our common library
. $ScriptDir\common\Get-SepmRmmWebService.ps1

function TestLicenseService
{
	param([ValidateNotNullOrEmpty()]$configFile = "$($ScriptDir)\Config.xml")
	try
	{ 
		# Read our config file
		[xml]$config = Get-Content $configFile
		
		# Generate a client proxy for communicating with the web service
		$licenseService = Get-SepmRmmWebService -HostName $config.SepmWS.HostName -Port $config.SepmWS.PortNo -WsdlFile "$($config.SepmWS.wsdlDir)\LicenseService.wsdl" -AccessToken $config.SepmWS.AccessToken

		# Get SEP License Summary info and write info to console
		$licenseSummaryInfo = $licenseService.getLicenseSummaryInfo()
		Write-Host "---------------------------------------------------------------------"
    	Write-Host "anyLicenseAboutToExpire:  "$licenseSummaryInfo.anyLicenseAboutToExpire
		Write-Host "expiredLicenses:          "$licenseSummaryInfo.expiredLicenses
		Write-Host "licenseOverDeployed:      "$licenseSummaryInfo.licenseOverDeployed
		Write-Host "licenseType:              "$licenseSummaryInfo.licenseType
		Write-Host "nextRenewalDeadline:      "$licenseSummaryInfo.nextRenewalDeadline
		Write-Host "purchasedSEPSeats:        "$licenseSummaryInfo.purchasedSEPSeats
		Write-Host "purchasedSNACSeats:       "$licenseSummaryInfo.purchasedSNACSeats
		Write-Host "usedSEPSeats:             "$licenseSummaryInfo.usedSEPSeats
		Write-Host "usedSNACSeats:            "$licenseSummaryInfo.usedSNACSeats
		Write-Host "---------------------------------------------------------------------"
		# Write information about individual licenses
		foreach ($license in $licenseSummaryInfo.licenseInfoList)
		{
			Write-Host "---------------------------------------------------------------------"
			Write-Host "Expiration Date:  "$license.expirationDate
			Write-Host "Is Expired?       "$license.expired
			Write-Host "License Type:     "$license.licenseType
			Write-Host "Product Type:     "$license.productType
			Write-Host "Purchased seats:  "$license.purchasedSeats
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
		$licenseService.Dispose()
	}
}

TestLicenseService