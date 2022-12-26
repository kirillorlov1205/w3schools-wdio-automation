@homePageSearch
Feature: Navigation bar

    Background:
        Given The user opens web page "https://www.w3schools.com/"

    Scenario Outline: Transfer to the page by name from "Tutorials" dropdown
        When The user clicks navigation item with name "Tutorials"
        And The user clicks item with name "<name>" from dropdown menu
        Then The user sees page with url "<url>"

        Examples:
            | name            | url                         |
            | Learn HTML      | html/default.asp            |
            | Learn CSS       | css/default.asp             |
            | Learn RWD       | css/css_rwd_intro.asp       |
            | Learn Bootstrap | bootstrap/bootstrap_ver.asp |
            | Learn W3.CSS    | w3css/default.asp           |
            | Learn Colors    | colors/default.asp          |
            | Learn Icons     | icons/default.asp           |
            | Learn Graphics  | graphics/default.asp        |
            | Learn SVG       | graphics/svg_intro.asp      |
            | Learn Canvas    | graphics/canvas_intro.asp   |

    Scenario Outline: Transfer to the page by name from "References" dropdown
        When The user clicks navigation item with name "References"
        And The user clicks item with name "<name>" from dropdown menu
        Then The user sees page with url "<url>"

        Examples:
            | name                     | url                              |
            | HTML Tag Reference       | tags/default.asp                 |
            | HTML Browser Support     | tags/ref_html_browsersupport.asp |
            | HTML Event Reference     | colors/default.asp               |
            | HTML Color Reference     | bootstrap/bootstrap_ver.asp      |
            | HTML Attribute Reference | tags/ref_attributes.asp          |
            | HTML Canvas Reference    | tags/ref_canvas.asp              |
            | XML DOM Reference        | xml/dom_nodetype.asp             |
            | JavaScript Reference     | jsref/default.asp                |
            | HTML DOM Reference       | jsref/default.asp                |
            | HTML Character Sets      | charsets/default.asp             |

    Scenario Outline: Transfer to the page by Name from "Exercises" dropdown
        When The user clicks navigation item with name "Exercises"
        And The user clicks item with name "<name>" from dropdown menu
        Then The user sees page with url "<url>"

        Examples:
            | name                 | url                     |
            | HTML Exercises       | html/html_exercises.asp |
            | CSS Exercises        | css/css_exercises.asp   |
            | JavaScript Exercises | js/js_exercises.asp     |

    Scenario Outline: Transfer to the page by clicking on button with outer link
        When The user clicks navigation item with outer link by title "<title>"
        Then The page with url "<url>" is opened in a new tab

        Examples:
            | title                                      | url                                                     |
            | Courses                                    | https://campus.w3schools.com/collections/course-catalog |
            | Get Your Own Website With W3Schools Spaces | https://www.w3schools.com/spaces/                       |