import { Then, When } from '@wdio/cucumber-framework'
import { HomePage } from '../pages/HomePage'
import { PageFactory } from '../pages/PageFactory'
import { BASE_URL } from '../support/constants'
import { NAVIGATION_ITEMS_NAMES, PAGES } from '../support/enums'

const homePage = PageFactory.getPage(PAGES.HOME) as HomePage

When(/^The user clicks navigation item with name "Tutorials"$/, async () => {
    await homePage.navigationBar.clickNavigationItemByName(NAVIGATION_ITEMS_NAMES.TUTORIALS)
})

When(/^The user clicks item from dropdown menu with name "(.+)"$/, async (name: string) => {
    await homePage.navigationBar.clickItemFromDropdownMenuByName(name)
})

Then(/^The user sees page with url "(.+)"$/, async (url: string) => {
    expect(await homePage.getCurrentUrl()).toEqual(`${BASE_URL}${url}`)
})

When(/^The user clicks navigation item with name "References"$/, async () => {
    await homePage.navigationBar.clickNavigationItemByName(NAVIGATION_ITEMS_NAMES.REFERENCES)
})

// for (const pageTitle in TUTORIALS_PAGE_TITLES_MAP) {
//     const pageLink = TUTORIALS_PAGE_TITLES_MAP[pageTitle as keyof typeof TUTORIALS_PAGE_TITLES_MAP]
//     it(`Should navigate to the "${pageTitle}" page from "Tutorials" dropdown`, () => {
//         homePage.navigationBar.clickNavigationItemByName(NAVIGATION_ITEMS_NAMES.TUTORIALS)
//         homePage.navigationBar.clickItemFromDropdownMenuByName(pageTitle)
//         homePage.getCurrentUrl().should('eq', `${BASE_URL}${pageLink}`)
//     })
// }

///------------------------------------------


When(/^The user selects "(.+)" page theme$/, async (themeName: string) => {
    await homePage.navigationBar.switchThemeByName(themeName)
})

Then(/^The user sees page theme with theme indicatior "(.+)"$/, async (themeIndicator: string) => {
    expect(await homePage.navigationBar.getPageByTheme(themeIndicator)).toBeDisplayed()
})

When(/^The user clicks on theme switcher$/, async () => {
    await homePage.navigationBar.clickThemeSwitcher()
})

Then(/^The user sees "Dark mode and Dark code" page themes$/, async () => {
    expect(await homePage.navigationBar.getPageByTheme('darktheme darkpagetheme')).toBeDisplayed()
})

Then(/^The user sees "Default" page theme$/, async () => {
    expect(await homePage.navigationBar.getPageByTheme(' ')).toBeDisplayed()
})