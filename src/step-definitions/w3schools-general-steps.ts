import { Given, Then } from '@wdio/cucumber-framework'
import { BASE_URL } from '../support/constants'

Given(/^The user opens web page "(.+)"$/, (url: string) => {
    browser.url(url)
})

Then(/^The user sees page with url "(.+)"$/, async (url: string) => {
    expect(browser).toHaveUrl(`${BASE_URL}${url}`)
})