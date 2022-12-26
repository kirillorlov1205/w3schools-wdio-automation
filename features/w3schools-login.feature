@login
Feature: W3schools login

    Background:
        Given The user opens web page "https://www.w3schools.com/"

    Scenario: Valid credentials
        When The user logs in with valid email and valid password
        Then The user sees "Log out" button

    Scenario: Transfer to Sign up page from Login page by clicking "Sign up" on Login page
        When The user clicks "Sign up" button on Login page
        Then The user sees Sign up page

    Scenario: Empty email
        When The user logs in with empty email and valid password
        Then The user sees "Empty email" validation message

    Scenario Outline: Invalid email
        When The user logs in with invalid email "<email>" and valid password
        Then The user sees "Invalid email" validation message

        Examples:
            | email                    |
            | abc#def@mail.com         |
            | abc.def@mail.c           |
            | abc.def@mail#archive.com |
            | abc.def@mail             |
            | abc.def@mail..com        |

    Scenario: Valid email that doesn't exist in the system
        When The user logs in with a valid email that doesn't exist in the system
        Then The user sees "Email doesn't exist" validation message

    Scenario: empty password
        When The user logs in with valid email and empty password
        Then The user sees "Invalid password" validation message

    Scenario: Invalid password
        When The user logs in with valid email and invalid password
        Then The user sees "Invalid password" validation message

    Scenario: Transfer to Reset password page from Login page
        When The user clicks "Forgot password" button on Login page
        Then The user sees Reset password page

    Scenario: Transfer to Home page from Login page
        When The user clicks "Home page" navigation button on Login page
        Then The user sees Home page