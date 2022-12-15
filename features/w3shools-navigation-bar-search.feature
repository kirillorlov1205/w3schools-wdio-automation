@navigationBarSearch
Feature: Navigation bar search

    Background:
        Given The user opens web page "https://www.w3schools.com/"

    Scenario: Searching with text
        When The user fills search field with text "testText"
        Then The user sees search modal page

    Scenario: Searching without text providing
        When The user clicks "Submit search" button
        Then The user doesn't see search modal page

    Scenario Outline: Searching for for special symbol
        When The user provides symbol "<Symbol>" in the search field and clicks "Submit search" button
        Then The user sees search modal page

        Examples:
            | Symbol |
            | ~      |
            | !      |
            | #      |
            | %      |
            | ^      |
            | *      |
            | -      |
            | =      |
            | +      |
            | ;      |

Scenario: Searching for space character
    When The user fills search field with space character " "
    Then The user sees search modal page