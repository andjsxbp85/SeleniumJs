@login

Feature: Login Flip
  As a User
  I want to login to my account on flip
  So that I can access all feature on it using my privilege

  Scenario: Success login Flip
    Given I open Flip main page
    When I click button 'Masuk' pada main page
    And I fill in Email field with "flipidtester@gmail.com" and Password field "flipidtester123"
    And I click button 'Masuk' pada login page
    Then I can see my dashboard page