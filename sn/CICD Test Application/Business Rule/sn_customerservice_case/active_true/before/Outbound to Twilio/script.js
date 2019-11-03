/* 
 * Application : CICD Test Application
 * ClassName   : sys_script
 * Created On  : 2019-10-04 22:03:33
 * Created By  : admin
 * Updated On  : 2019-10-04 22:07:36
 * Updated By  : admin
 * URL         : /sys_script.do?sys_id=546a75a91b5c88106933fc88cc4bcb5c
 */
(function executeRule(current, previous /*null when async*/) {

	// Add your code here

	
	var request = new sn_ws.RESTMessageV2('Outbound to Twilio','case create');
	request.setStringParameterNoEscape('casenum',current.number);
	request.execute();
	
	var response = request.execute();
	var requestBody = request.getRequestBody();
	var responseBody = response.getBody();
	var httpStatus = response.getStatusCode();
	gs.log(response.getBody());
	
	responseJSON = responseBody.substring(10,responseBody.length-1);
	parsedJSON = JSON.parse(responseJSON);
	var targetCaseNumber = parsedJSON["number"];
	
	var logString = "Greetings. A new case " +targetCaseNumber+" has been created.";
	gs.log(logString, "SNOW REST Test");
	
})(current, previous);
