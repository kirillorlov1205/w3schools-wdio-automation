import { Then, When } from "@wdio/cucumber-framework";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { PageFactory } from "../pages/PageFactory";
import { SignUpPage } from "../pages/SignUpPage";
import { SIGN_UP_VALIDATION_MESSAGES, TEST_USER } from "../support/constants";
import { PAGES, SIGN_UP_NAME_TYPES } from "../support/enums";

const randomstring = require("randomstring");

const randomEmail = `${randomstring.generate(8)}@gmail.com`.toLowerCase()
const homePage = PageFactory.getPage(PAGES.HOME) as HomePage
const loginPage = PageFactory.getPage(PAGES.LOGIN) as LoginPage
const signUpPage = PageFactory.getPage(PAGES.SIGN_UP) as SignUpPage

When(/^The user provides valid Email, Password, First name, Last name$/, async () => {
    await signUpPage.register(randomEmail, TEST_USER.password, TEST_USER.first_name, TEST_USER.last_name)
})

Then(/^The user sees Sign up successful page$/, async () => {
    expect(await signUpPage.getValidationAlert()).toHaveText(`We've sent an email to ${randomEmail} with instructions.`)
})

When(/^The user provides empty Email$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickSignUpButton()
    await signUpPage.fillPasswordField(TEST_USER.password)
    await signUpPage.clickSignUpForFreeButton()
})

Then(/^The user sees "Empty Email sign-up validation message"$/, async () => {
    expect(await signUpPage.getEmailValidationMessage()).toHaveText(SIGN_UP_VALIDATION_MESSAGES.emptyEmailValidationMessage)
})

When(/^The user provides invalid Email "(.+)"$/, async (invalidEmail: string) => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickSignUpButton()
    await signUpPage.fillEmailField(invalidEmail)
    await signUpPage.clickSignUpForFreeButton()
})

Then(/^The user sees "invalid Email sign-up validation message"$/, async () => {
    expect(await signUpPage.getEmailValidationMessage()).toHaveText(SIGN_UP_VALIDATION_MESSAGES.invalidEmailValidationMessage)
})

When(/^The user provides invalid Password "(.+)"$/, async (invalidPassword: string) => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickSignUpButton()
    await signUpPage.fillEmailField(TEST_USER.email)
    await signUpPage.fillPasswordField(invalidPassword)
})

Then(/^The user sees "(.+)" password validation helper$/, async (helper: string) => {
    expect(await signUpPage.getPasswordValidationHelperByName(helper)).toHaveAttr('fill', '#04AA6D')
})

When(/^The user provides invalid First Name "(.+)"$/, async (invalidName: string) => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickSignUpButton()
    await signUpPage.fillEmailField(randomEmail)
    await signUpPage.fillPasswordField(TEST_USER.password)
    await signUpPage.clickSignUpForFreeButton()
    await signUpPage.fillNameFieldByType(SIGN_UP_NAME_TYPES.FIRST_NAME, invalidName)
    await signUpPage.fillNameFieldByType(SIGN_UP_NAME_TYPES.LAST_NAME, TEST_USER.last_name)
    await signUpPage.clickSignUpForFreeButton()
})

Then(/^The user sees "invalid name sign-up validation message"$/, async () => {
    expect(await signUpPage.getNameInputErrorMessage()).toHaveText(SIGN_UP_VALIDATION_MESSAGES.invalidNameErrorMessage)
})

When(/^The user provides invalid Last Name "(.+)"$/, async (invalidName: string) => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickSignUpButton()
    await signUpPage.fillEmailField(randomEmail)
    await signUpPage.fillPasswordField(TEST_USER.password)
    await signUpPage.clickSignUpForFreeButton()
    await signUpPage.fillNameFieldByType(SIGN_UP_NAME_TYPES.FIRST_NAME, TEST_USER.first_name)
    await signUpPage.fillNameFieldByType(SIGN_UP_NAME_TYPES.LAST_NAME, invalidName)
    await signUpPage.clickSignUpForFreeButton()
})

When(/^The user provides empty First Name$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickSignUpButton()
    await signUpPage.fillEmailField(randomEmail)
    await signUpPage.fillPasswordField(TEST_USER.password)
    await signUpPage.clickSignUpForFreeButton()
    await signUpPage.fillNameFieldByType(SIGN_UP_NAME_TYPES.LAST_NAME, TEST_USER.last_name)
    await signUpPage.clickSignUpForFreeButton()
})

When(/^The user provides empty Last Name$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickSignUpButton()
    await signUpPage.fillEmailField(randomEmail)
    await signUpPage.fillPasswordField(TEST_USER.password)
    await signUpPage.clickSignUpForFreeButton()
    await signUpPage.fillNameFieldByType(SIGN_UP_NAME_TYPES.FIRST_NAME, TEST_USER.first_name)
    await signUpPage.clickSignUpForFreeButton()
})

When(/^The user clicks "Login page" navigation button on Registration page$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickSignUpButton()
    await signUpPage.clickReturnToLoginButton()
})

Then(/^The user sees Login page$/, async () => {
    expect(await loginPage.getSignUpButton()).toBeDisplayed()
})

When(/^The user clicks "Home page" navigation button on Registration page$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.clickSignUpButton()
    await signUpPage.clickHomePageButton()
})