@themeChange
Feature: Navigation bar theme change

    Background:
        Given The user opens web page "https://www.w3schools.com/"

    Scenario Outline: Changing theme of the page
        When The user selects "<themeName>" page theme
        Then The user sees page theme with theme indicatior "<themeIndicatior>"

        Examples:
            | themeName | themeIndicatior |
            | Dark mode | darkpagetheme   |
            | Dark code | darktheme       |

    Scenario Outline: Changing theme of the page by clicking on theme switcher
        When The user clicks on theme switcher
        Then The user sees "Dark mode and Dark code" page themes

    Scenario Outline: Changing theme of the page to default by clicking on theme switcher
        When The user clicks on theme switcher
        Then The user sees "Dark mode and Dark code" page themes
        And The user clicks on theme switcher
        Then The user sees "Default" page theme

    Scenario Outline: Add "Dark code" theme by clicking on theme switcher after "Dark mode" has been selected
        When The user selects "Dark mode" page theme
        Then The user sees page theme with theme indicatior "darkpagetheme"
        And The user clicks on theme switcher
        Then The user sees "Dark mode and Dark code" page themes