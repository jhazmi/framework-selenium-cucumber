@connexion
Feature: Authentification - OrangeHRM
  En tant que utilisateur je souhaite m authentifier

  @cnx
  Scenario: Authentification - OrangeHRM
    Given J ouvre l application OrangeHRM
    When Je saisie userName
    And Je saisie mot de passe
    And Je clique sur le bouton login
    Then Redirection vers la page Home
