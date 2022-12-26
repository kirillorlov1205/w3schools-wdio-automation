@sign-up
Feature: W3schools sign-up

    Background:
        Given The user opens web page "https://www.w3schools.com/"

    Scenario: Successful registration
        When The user provides valid Email, Password, First name, Last name
        Then The user sees Sign up successful page

    Scenario: Empty Email
        When The user provides empty Email
        Then The user sees "Empty Email sign-up" validation message

    Scenario Outline: Invalid Email
        When The user provides invalid Email "<email>"
        Then The user sees "invalid Email sign-up" validation message

        Examples:
            | email                    |
            | abc#def@mail.com         |
            | abc.def@mail.c           |
            | abc.def@mail#archive.com |
            | abc.def@mail             |
            | abc.def@mail..com        |

    Scenario Outline: Invalid Password
        When The user provides invalid Password "<password>"
        Then The user sees "<passwordValidationHelper>" password validation helper

        Examples:
            | password | passwordValidationHelper |
            | TEST123! | One lowercase character  |
            | Testing! | One number               |
            | Test1234 | One special character    |
            | Test12!  | 8 characters minimum     |

    Scenario Outline: Invalid First Name
        When The user provides invalid First Name "<name>"
        Then The user sees "invalid name sign-up" validation message

        Examples:
            | name  |
            | Name1 |
            | Name! |

    Scenario Outline: Invalid Last Name
        When The user provides invalid Last Name "<name>"
        Then The user sees "invalid name sign-up" validation message

        Examples:
            | name  |
            | Name1 |
            | Name! |

    Scenario: Empty First Name
        When The user provides empty First Name
        Then The user sees "invalid name sign-up" validation message

    Scenario: Empty Last Name
        When The user provides empty Last Name
        Then The user sees "invalid name sign-up" validation message

    Scenario: Transfer to Login page from Registration page
        When The user clicks "Login page" navigation button on Registration page
        Then The user sees Login page

    Scenario: Transfer to Home page from Registration page
        When The user clicks "Home page" navigation button on Registration page
        Then The user sees Home page