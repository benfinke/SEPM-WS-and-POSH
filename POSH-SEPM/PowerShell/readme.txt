Readme for Symantec Endpoint Protection Remote Monitoring and Management PowerShell scripts

October 2012

Copyright 2012

To run the scripts out of the box, you must run them from the directory where this readme is located. Otherwise, you must edit the <wsdlDir> element of the config.xml file.

To run the PowerShell scripts, you must first register your web services client application with the instance of Symantec Endpoint Protection Manager that the client will manage. The default registration URL is https://localhost:8446/sepm/viewLoginRMM.do. If you register remotely, replace localhost with the hostname or IP address of the Symantec Endpoint Protection Manager server.

For more information about registering your web services client, see the Integration Guide in this SDK.

Edit the appropriate elements in the config.xml file to specify the following information:

- The IP address and web services port of the Symantec Endpoint Protection Manager instance to manage
- The hostname of the Symantec Endpoint Protection Manager instance (Server Name).
- The client ID and client secret that you obtained from registration

The Server Name is used to run the CommandService methods against the server as well as against any clients that you specify.

You can then run Write-AccessTokenToConfig.ps1. This script obtains the access token that must be included with every web service call and writes it to the config.xml file.

For more information about access tokens and authenticating web service calls, see the Integration Guide.

If you run the sample scripts remotely, you must also edit the WSDL files to replace localhost:8446 with the hostname or IP address and, if necessary, the web services port number if you customized it.

For more information about the WSDL files, see the Integration Guide.

You can now run any of the scripts to call an individual web service, or you can run RunAllTests.ps1 to run all of them.