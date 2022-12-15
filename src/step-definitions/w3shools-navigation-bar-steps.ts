import { Then, When } from '@wdio/cucumber-framework'
import { HomePage } from '../pages/HomePage'
import { PageFactory } from '../pages/PageFactory'
import { BASE_URL } from '../support/constants'
import { NAVIGATION_ITEMS_NAMES, PAGES } from '../support/enums'

const homePage = PageFactory.getPage(PAGES.HOME) as HomePage

// When(/^The user clicks navigation item with name "Tutorials"$/, async () => {
// })

When(/^The user clicks item with name "(.+)" from dropdown menu "Tutorials"$/, async (name: string) => {
    await homePage.navigationBar.clickNavigationItemByName(NAVIGATION_ITEMS_NAMES.TUTORIALS)
    await homePage.navigationBar.clickItemFromDropdownMenuByName(name)
})

When(/^The user clicks navigation item with name "References"$/, async () => {
    await homePage.navigationBar.clickNavigationItemByName(NAVIGATION_ITEMS_NAMES.REFERENCES)
})

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