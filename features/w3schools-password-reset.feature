@passwordReset
Feature: W3schools password reset

    Background:
        Given The user opens web page "https://www.w3schools.com/"

    Scenario: Valid email validation
        When The user provides valid email in password reset field
        Then The user sees successful validation email message

    Scenario: Password reset email sending
        When The user provides valid email and clicks button "Reset password"
        Then The user sees "We’ve sent an email to {Email} with instructions."

    Scenario: Transfer to Login page by clicking "Return to Login" button on successful Password reset page
        When The user clicks "Return to Login" button on successful Password reset page
        Then The user sees "Login page"

    Scenario: Transfer to Login page by clicking "Return to Login" button on Password reset page
        When The user clicks "Return to Login" button on Password reset page
        Then The user sees "Login page"

    Scenario Outline: Password resetting with invalid email
        When The user provides email "<emailMistakeType>" email: "<email>"
        Then The user sees "invalid email" validation message

        Examples:
            | email                    | emailMistakeType              |
            | abc#def@mail.com         | with invalid character prefix |
            | abc.def@mail.c           | with invalid top domain       |
            | abc.def@mail#archive.com | with invalid character domain |
            | abc.def@mail             | without top domain            |
            | abc.def@mail..com        | with two dots in top domain   |

    Scenario: Password resetting with email that doesn't exist in the system
        When The user provides email that doesn't exist in the system
        Then The user sees "email doesn't exist" alert

    Scenario: Transfer to Home page by clicking "Home page" navigation button on Password reset page
        When The user clicks "Home page" navigation button on Password reset page
        Then The user sees "Home page"