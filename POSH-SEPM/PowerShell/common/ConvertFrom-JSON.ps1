<#
	.Synopsis
	Convert JSON name value pair data into an equivalent PowerShell object.
	
	.Description
	Given JSON data that is structured as name value pairs, create a PSObject
	with properties for the name value pairs.
	
	.Example
	If $jsonData contained the following information
	{
	  "value":"fc9a1bd0-0951-4c24-8fa1-e801afee7d66",
	  "expiration":1382592356600,
	  "tokenType":"bearer",
	  "refreshToken":{"value":"1a62cde9-db2f-4110-8d71-1cd7d32767e4","expiration":1385141156553},
	  "scope":[],
	  "additionalInformation":{},
	  "expired":false,
	  "expiresIn":29873
	}
	then making the following call:

	$MyPSObject = ConvertFrom-JSON -json $jsonData
	
	would set $MyPSObject to a PS object that contained the equivalent name value pairs of properties.
#>
Function ConvertFrom-JSON {
    param(
        $json,
        [switch]$raw  
    )

    Begin
    {
    	$script:startStringState = $false
    	$script:valueState = $false
    	$script:arrayState = $false	
    	$script:saveArrayState = $false

    	function scan-characters ($c) {
    		switch -regex ($c)
    		{
    			"{" { 
	    				"(New-Object PSObject "
	    				$script:saveArrayState=$script:arrayState
	    				$script:valueState=$script:startStringState=$script:arrayState=$false				
	    			    break
					}
    			"}" { ")"; $script:arrayState=$script:saveArrayState; break }

    			'"' {
	    				if($script:startStringState -eq $false -and $script:valueState -eq $false -and $script:arrayState -eq $false) {
	    					'| Add-Member -Passthru NoteProperty "'
	    				}
	    				else { '"' }
	    				$script:startStringState = $true
						break
    				}

    			":" {" " ;$script:valueState = $true; break }
    			"," {
	    				if($script:arrayState) { "," }
	    				else { $script:valueState = $false; $script:startStringState = $false }
						break
    				}	
    			"\[" { "@("; $script:arrayState = $true; break }
    			"\]" { ")"; $script:arrayState = $false; break }
    			"[\t\r\n]" { break }
				default { $c; break }
    		}
    	}
    	
    	function parse($target)
    	{
    		$result = ""
    		ForEach($c in $target.ToCharArray()) {	
    			$result += scan-characters $c
    		}
    		$result 	
    	}
    }

    Process { 
        if($_) { $result = parse $_ } 
    }

    End { 
        If($json) { $result = parse $json }

        If(-Not $raw) {
            $result | Invoke-Expression
        } else {
            $result 
        }
    }
}