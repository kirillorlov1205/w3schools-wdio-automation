@navigation
Feature: Home page navigation

    Scenario Outline: As a user, i can open page by Navigation bar
        Given The user opens web page https://www.onliner.by
        When The user clicks on <PageLink> navigation button
        Then The user sees <PageName> page and page header has text <HeaderText>

        Examples:
            | PageLink                      | PageName  | HeaderText     |
            | https://catalog.onliner.by    | Catalog   | Все суперцены! |
            | https://ab.onliner.by         | Auto      | Автобарахолка  |
            | https://r.onliner.by/pk       | Realt     | Продажа        |
            | https://s.onliner.by/tasks    | Tasks     | Заказы         |
            | https://baraholka.onliner.by/ | Baraholka | Барахолка      |