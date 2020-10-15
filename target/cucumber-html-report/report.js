$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentification/Authentification.feature");
formatter.feature({
  "line": 2,
  "name": "Authentification - OrangeHRM",
  "description": "En tant que utilisateur je souhaite m authentifier",
  "id": "authentification---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@connexion"
    }
  ]
});
formatter.before({
  "duration": 8834401100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Authentification - OrangeHRM",
  "description": "",
  "id": "authentification---orangehrm;authentification---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "J ouvre l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Je saisie userName",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Je saisie mot de passe",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Redirection vers la page Home",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefintion.jOuvreLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2862667600,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeSaisieUserName()"
});
formatter.result({
  "duration": 78340200,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeSaisieMotDePasse()"
});
formatter.result({
  "duration": 75711400,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 4000359400,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.redirectionVersLaPageHome()"
});
formatter.result({
  "duration": 35525800,
  "status": "passed"
});
formatter.after({
  "duration": 1433044000,
  "status": "passed"
});
});