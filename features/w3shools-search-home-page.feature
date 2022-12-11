@homePageSearch
Feature: Home page search

    Background:
        Given The user opens web page 'https://www.w3schools.com/'

    Scenario: Text searching
        When The user fiils search field with text ''
        Then The user sees search dropdown

    Scenario: Searching without text providing
        When The user clicks "Submit search" button
        Then The user doesn't see search dropdown

    Scenario Outline: Searching for page by title
        When The user provides text '<Title>' in the search field and clicks 'Submit search' button
        Then The user sees '<Title>' page with url '<Url>'

        Examples:
            | Title                    | Url                              |
            | HTML Tag Reference       | tags/default.asp                 |
            | HTML Browser Support     | tags/ref_html_browsersupport.asp |
            | HTML Event Reference     | tags/ref_eventattributes.asp     |
            | HTML Attribute Reference | tags/ref_attributes.asp          |
            | HTML Canvas Reference    | tags/ref_canvas.asp              |
            | XML DOM Reference        | xml/dom_nodetype.asp             |
            | JavaScript Reference     | jsref/default.asp                |
            | HTML DOM Reference       | jsref/default.asp                |
            | HTML Character Sets      | charsets/default.asp             |