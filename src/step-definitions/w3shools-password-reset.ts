import { Then, When } from '@wdio/cucumber-framework'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { PageFactory } from '../pages/PageFactory'
import { PasswordResetPage } from '../pages/PasswordResetPage'
import { LOGIN_VALIDATION_MESSAGES, PASSWORD_RESET_VALIDATION_MESSAGES, TEST_USER } from '../support/constants'
import { PAGES } from '../support/enums'

const randomstring = require("randomstring");
const homePage = PageFactory.getPage(PAGES.HOME) as HomePage
const loginPage = PageFactory.getPage(PAGES.LOGIN) as LoginPage
const resetPasswordPage = PageFactory.getPage(PAGES.RESET_PASSWORD) as PasswordResetPage

When(/^The user provides valid email in password reset field$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickForgotPasswordButton()
    await resetPasswordPage.fillEmailField(TEST_USER.email)
})

Then(/^The user sees successful validation email message$/, async () => {
    expect(await resetPasswordPage.getResetPasswordSubmitButton()).toBeEnabled()
    expect(await resetPasswordPage.getSuccessfulValidationEmailMessage()).toHaveText(PASSWORD_RESET_VALIDATION_MESSAGES.successfulValidationEmailMessage)
})

When(/^The user provides valid email and clicks button 'Reset password'$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickForgotPasswordButton()
    await resetPasswordPage.fillEmailField(TEST_USER.email)
    await resetPasswordPage.clickResetPasswordSubmitButton()
    await browser.pause(5000)
})

Then(/^The user sees 'We’ve sent an email to "Email" with instructions.'$/, async () => {
    expect(await resetPasswordPage.getPasswordResetSuccessfulMessage()).toHaveText(`We’ve sent an email to ${TEST_USER.email} with instructions.`)
    expect(await resetPasswordPage.getPasswordResetSpamInfoMessage()).toHaveText(PASSWORD_RESET_VALIDATION_MESSAGES.passwordResetSpamInfoMessage)
})