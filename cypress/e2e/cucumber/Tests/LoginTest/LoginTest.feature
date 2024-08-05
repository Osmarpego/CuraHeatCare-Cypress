Feature: I want to login into the site with valid data

  Background: Navigate to the Website
    Given I navigate to the Website

  Scenario: Login as sign up user with valid data
    When I entered valid credential
    And User click on sign in button
    And Validate the title after login
    And fill out the form of appointment
    Then I visulize the confirmation