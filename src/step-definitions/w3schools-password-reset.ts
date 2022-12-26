import { Then, When } from '@wdio/cucumber-framework'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { PageFactory } from '../pages/PageFactory'
import { PasswordResetPage } from '../pages/PasswordResetPage'
import { PASSWORD_RESET_VALIDATION_MESSAGES, TEST_USER } from '../support/constants'
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

When(/^The user provides valid email and clicks button "Reset password"$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickForgotPasswordButton()
    await resetPasswordPage.fillEmailField(TEST_USER.email)
    await resetPasswordPage.clickResetPasswordSubmitButton()
})

Then(/^The user sees "We’ve sent an email to {Email} with instructions."$/, async () => {
    expect(await resetPasswordPage.getPasswordResetSuccessfulMessage()).toHaveText(`We’ve sent an email to ${TEST_USER.email} with instructions.`)
    expect(await resetPasswordPage.getPasswordResetSpamInfoMessage()).toHaveText(PASSWORD_RESET_VALIDATION_MESSAGES.passwordResetSpamInfoMessage)
})

When(/^The user clicks "Return to Login" button on successful Password reset page$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickForgotPasswordButton()
    await resetPasswordPage.fillEmailField(TEST_USER.email)
    await resetPasswordPage.clickResetPasswordSubmitButton()
    await resetPasswordPage.clickReturnToLoginButtonOnSuccessfulResetPage()
})

Then(/^The user sees "Login page"$/, async () => {
    expect(await loginPage.getEmailField()).toBeDisplayed()
})

When(/^The user clicks "Return to Login" button on Password reset page$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickForgotPasswordButton()
    await resetPasswordPage.clickReturnToLoginButton()
})

When(/^The user provides email "(.+)" email: "(.+)"$/, async (invalidEmail: string, emailMistakeType) => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickForgotPasswordButton()
    await resetPasswordPage.fillEmailField(invalidEmail)
    await browser.keys('\uE007')
})

Then(/^The user sees "invalid email" validation message$/, async () => {
    expect(await resetPasswordPage.getResetPasswordSubmitButton()).toBeDisplayed()
    expect(await resetPasswordPage.getEmailValidationMessage()).toHaveText(PASSWORD_RESET_VALIDATION_MESSAGES.InvalidEmailValidationMessage)
})

When(/^The user provides email that doesn't exist in the system$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickForgotPasswordButton()
    await resetPasswordPage.fillEmailField(`${randomstring.generate(8)}@gmail.com`)
    await resetPasswordPage.clickResetPasswordSubmitButton()
    await browser.pause(5000)
})

Then(/^The user sees "email doesn't exist" alert$/, async () => {
    expect(await resetPasswordPage.getEmailDoesNotExistAlert()).toHaveText(PASSWORD_RESET_VALIDATION_MESSAGES.emailDoesNotExistAlert)
})

When(/^The user clicks "Home page" navigation button on Password reset page$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickForgotPasswordButton();
    await resetPasswordPage.clickHomePageButton()
})

Then(/^The user sees "Home page"$/, async () => {
    expect(await homePage.getWhereToBeginButton()).toBeDisplayed()
})