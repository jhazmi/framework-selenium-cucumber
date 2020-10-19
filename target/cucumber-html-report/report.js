$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentificationParam/AuthentificationParam.feature");
formatter.feature({
  "line": 2,
  "name": "Authentification - Param - OrangeHRM",
  "description": "En tant que utilisateur je souhaite m authentifier",
  "id": "authentification---param---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 9004310200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "J ouvre l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "je saisie le nom d utilisateur \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Redirection vers la page Home",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefintion.jOuvreLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 9257924700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 32
    }
  ],
  "location": "AuthentificationParamStepDefinition.jeSaisieLeNomDUtilisateur(String)"
});
formatter.result({
  "duration": 115486500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthentificationParamStepDefinition.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 63096700,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 12252393100,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.redirectionVersLaPageHome()"
});
formatter.result({
  "duration": 5156051300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Clique - Buzz",
  "description": "",
  "id": "authentification---param---orangehrm;clique---buzz",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@buzz"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "je clique sur le module Buzz",
  "keyword": "When "
});
formatter.match({
  "location": "AuthentificationParamStepDefinition.jeCliqueSurLeModuleBuzz()"
});
formatter.result({
  "duration": 25061968500,
  "status": "passed"
});
formatter.after({
  "duration": 1362203300,
  "status": "passed"
});
formatter.before({
  "duration": 8584284300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "J ouvre l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "je saisie le nom d utilisateur \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Redirection vers la page Home",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefintion.jOuvreLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 8845025200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 32
    }
  ],
  "location": "AuthentificationParamStepDefinition.jeSaisieLeNomDUtilisateur(String)"
});
formatter.result({
  "duration": 61931400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthentificationParamStepDefinition.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 56268400,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 11553814000,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.redirectionVersLaPageHome()"
});
formatter.result({
  "duration": 26423600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Clique - Temps",
  "description": "",
  "id": "authentification---param---orangehrm;clique---temps",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@temps"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "je clique sur le module Temps",
  "keyword": "When "
});
formatter.match({
  "location": "AuthentificationParamStepDefinition.jeCliqueSurLeModuleTemps()"
});
formatter.result({
  "duration": 3529630500,
  "status": "passed"
});
formatter.after({
  "duration": 1311028700,
  "status": "passed"
});
});