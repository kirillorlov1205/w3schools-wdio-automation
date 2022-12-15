import { Given, Then } from '@wdio/cucumber-framework'
import { HomePage } from '../pages/HomePage'
import { PageFactory } from '../pages/PageFactory'
import { BASE_URL } from '../support/constants'
import { PAGES } from '../support/enums'

const homePage = PageFactory.getPage(PAGES.HOME) as HomePage

Given(/^The user opens web page "(.+)"$/, (url: string) => {
    browser.url(url)
})

Then(/^The user sees page with url "(.+)"$/, async (url: string) => {
    expect(browser).toHaveUrl(`${BASE_URL}${url}`)
})