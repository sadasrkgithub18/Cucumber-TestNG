$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/D_EclipseWorkSpace/CucumberAndTestNG/src/main/java/com/qa/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Login use case",
  "description": "",
  "id": "facebook-login-use-case",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14073386399,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Facebook login with valid un and valid pwd",
  "description": "",
  "id": "facebook-login-use-case;facebook-login-with-valid-un-and-valid-pwd",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Rameshsoft"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "when user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters valid un as \"sadasrk@gmail.com\" and pwd as \"Test@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "when user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.when_user_is_on_landing_page()"
});
formatter.result({
  "duration": 204940500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sadasrk@gmail.com",
      "offset": 25
    },
    {
      "val": "Test@123",
      "offset": 56
    }
  ],
  "location": "LoginStepDefinition.user_enters_valid_un_as_and_pwd_as(String,String)"
});
formatter.result({
  "duration": 332145501,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.when_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 128240000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 104300,
  "status": "passed"
});
formatter.after({
  "duration": 163487500,
  "status": "passed"
});
});