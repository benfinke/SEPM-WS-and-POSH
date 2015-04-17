#Path to the tester functions
$ScriptDir = Split-Path $MyInvocation.MyCommand.Path

cls

Write-Host "TokenToConfig`n====================================================================="
. $ScriptDir\Write-TokenToConfig.ps1
Write-Host "=====================================================================`n"

Write-Host "TestClientService`n====================================================================="
. $ScriptDir\ClientServiceTest.ps1
Write-Host "=====================================================================`n"

Write-Host "TestCommandService`n====================================================================="
. $ScriptDir\CommandServiceTest.ps1
Write-Host "=====================================================================`n"

Write-Host "TestLicenseService`n====================================================================="
. $ScriptDir\LicenseServiceTest.ps1
Write-Host "=====================================================================`n"

Write-Host "TestLiveUpdateService`n====================================================================="
. $ScriptDir\LiveUpdateServiceTest.ps1
Write-Host "=====================================================================`n"

Write-Host "TestPolicyService`n====================================================================="
. $ScriptDir\PolicyServiceTest.ps1
Write-Host "=====================================================================`n"
