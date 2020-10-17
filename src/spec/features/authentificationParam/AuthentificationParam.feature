@tag
Feature: Authentification - Param - OrangeHRM
  En tant que utilisateur je souhaite m authentifier

  Background: 
    Given J ouvre l application OrangeHRM
    When je saisie le nom d utilisateur "Admin"
    And je saisie le mot de passe "admin123"
    And Je clique sur le bouton login
    Then Redirection vers la page Home

  @buzz
  Scenario: Clique - Buzz
    When je clique sur le module Buzz

  @temps
  Scenario: Clique - Temps
    When je clique sur le module Temps
