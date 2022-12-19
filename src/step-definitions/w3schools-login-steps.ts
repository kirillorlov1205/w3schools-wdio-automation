import { Then, When } from '@wdio/cucumber-framework'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { PageFactory } from '../pages/PageFactory'
import { PasswordResetPage } from '../pages/PasswordResetPage'
import { SignUpPage } from '../pages/SignUpPage'
import { LOGIN_VALIDATION_MESSAGES, TEST_USER } from '../support/constants'
import { PAGES } from '../support/enums'

const randomstring = require("randomstring");
const homePage = PageFactory.getPage(PAGES.HOME) as HomePage
const loginPage = PageFactory.getPage(PAGES.LOGIN) as LoginPage
const signUpPage = PageFactory.getPage(PAGES.SIGN_UP) as SignUpPage
const resetPasswordPage = PageFactory.getPage(PAGES.RESET_PASSWORD) as PasswordResetPage

When(/^The user logs in with valid email and valid password$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.login(TEST_USER.email, TEST_USER.password)
})

Then(/^The user sees "Log out" button$/, async () => {
    expect(await homePage.navigationBar.getLogOutButton()).toBeDisplayed()
})

When(/^The user clicks "Sign up" button on Login page$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickSignUpButton()
})

Then(/^The user sees Sign up page$/, async () => {
    expect(await signUpPage.getSignUpForFreeButton()).toBeDisabled()
})

When(/^The user logs in with empty email and valid password$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.fillPasswordField(TEST_USER.password)
    await loginPage.submitForm()
})

Then(/^The user sees "Empty email validation message"$/, async () => {
    expect(await loginPage.getEmailValidationMessage()).toHaveText(LOGIN_VALIDATION_MESSAGES.emptyEmailValidationMessage)
})

When(/^The user logs in with invalid email "(.+)" and valid password$/, async (invalidEmail: string) => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.fillEmailField(invalidEmail)
    await loginPage.fillPasswordField(TEST_USER.password)
    await loginPage.submitForm()
})

Then(/^The user sees "Invalid email validation message"$/, async () => {
    expect(await loginPage.getEmailValidationMessage()).toHaveText(LOGIN_VALIDATION_MESSAGES.invalidEmailValidationMessage)
})

When(/^The user logs in with a valid email that doesn't exist in the system$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.fillEmailField(`${randomstring.generate(8)}@gmail.com`)
    await loginPage.fillPasswordField(TEST_USER.password)
    await loginPage.submitForm()
})

Then(/^The user sees "Email doesn't exist validation message"$/, async () => {
    expect(await loginPage.getEmailValidationMessage()).toHaveText(LOGIN_VALIDATION_MESSAGES.emailDoesNotExistValidationMessage)
})

When(/^The user logs in with valid email and empty password$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.fillEmailField(TEST_USER.email)
    await loginPage.submitForm()
})

When(/^The user logs in with valid email and invalid password$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.fillEmailField(TEST_USER.email)
    loginPage.fillPasswordField(randomstring.generate(8))
    await loginPage.submitForm()
})

Then(/^The user sees "Invalid password validation message"$/, async () => {
    expect(await loginPage.getValidationAlert()).toHaveText(LOGIN_VALIDATION_MESSAGES.invalidPasswordValidationMessage)
})

When(/^The user clicks "Forgot password" button on Login page$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickForgotPasswordButton()
})

Then(/^The user sees Reset password page$/, async () => {
    expect(await resetPasswordPage.getEmailField()).toBeDisplayed()
})

When(/^The user clicks "Home page" navigation button on Login page$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickHomePageButton()
})

Then(/^The user sees Home page$/, async () => {
    expect(await homePage.getWhereToBeginButton()).toBeDisplayed()
})