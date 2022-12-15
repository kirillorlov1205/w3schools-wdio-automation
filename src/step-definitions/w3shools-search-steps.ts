import { Then, When } from '@wdio/cucumber-framework'
import { HomePage } from '../pages/HomePage'
import { PageFactory } from '../pages/PageFactory'
import { PAGES } from '../support/enums'

const homePage = PageFactory.getPage(PAGES.HOME) as HomePage

When(/^The user fills search field with text "testText"$/, async () => {
    await homePage.searchField.clickSearchIcon()
    await homePage.searchField.fillSearchField('testText')
    await browser.keys('\uE007')
})

Then(/^The user sees search modal page$/, async () => {
    expect(await homePage.searchField.getSearchModalPage()).toBeDisplayed()
})

When(/^The user clicks "Submit search" button$/, async () => {
    await homePage.searchField.clickSearchIcon()
    await homePage.searchField.clickSubmitSearchButton()
})

Then(/^The user doesn't see search modal page$/, async () => {
    expect(await homePage.searchField.getSearchModalPage()).not.toBeDisplayed()
})

When(/^The user provides symbol "(.+)" in the search field and clicks "Submit search" button$/, async (specialSymbol: string) => {
    await homePage.searchField.clickSearchIcon()
    await homePage.searchField.fillSearchField(specialSymbol)
})

When(/^The user fills search field with space character " "$/, async () => {
    await homePage.searchField.clickSearchIcon()
    await homePage.searchField.fillSearchField(' ')
    await homePage.searchField.clickSubmitSearchButton()
})

When(/^The user fills search field on Home page with text "testText"$/, async () => {
    await homePage.fillSearchFieldOnHomePage('testText')
})

Then(/^The user sees search dropdown$/, async () => {
    expect(await homePage.getSearchDropdownOnHomePage()).toBeDisplayed()
})

When(/^The user clicks "Submit search" button on Home page$/, async () => {
    await homePage.clickSubmitSearchButtonOnHomePage()
})

Then(/^The user doesn't see search dropdown$/, async () => {
    expect(await homePage.getSearchDropdownOnHomePage()).not.toBeDisplayed()
})

When(/^The user provides text "(.+)" in the search field and clicks "Submit search" button$/, async (title: string) => {
    await homePage.fillSearchFieldOnHomePage(title)
    await homePage.clickSubmitSearchButtonOnHomePage()
})