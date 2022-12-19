import { SIGN_UP_NAME_TYPES } from "../support/enums"
import { BasePage } from "./BasePage"
export class SignUpPage extends BasePage {

    protected static instance: SignUpPage

    constructor() {
        super()
    }

    public getEmailField = async () => {
        return await $('input.EmailInput_input_field__6t4Ux')
    }

    public fillEmailField = async (email: string) => {
        await (await this.getEmailField()).setValue(email)
    }

    public getPasswordField = async () => {
        return await $('input.PasswordInput_input_field__EWMIU')
    }

    public fillPasswordField = async (password: string) => {
        await (await this.getPasswordField()).setValue(password)
    }

    public getSignUpForFreeButton = async () => {
        return await $('div.LoginModal_cta_bottom_box_button_login__5Fbwv span')
    }

    public clickSignUpForFreeButton = async () => {
        await (await this.getSignUpForFreeButton()).click()
    }

    public getNameFieldByType = async (nameFieldType: SIGN_UP_NAME_TYPES) => {
        return await $(`input[name ="${nameFieldType}"]`)
    }

    public fillNameFieldByType = async (nameFieldType: SIGN_UP_NAME_TYPES, str: string) => {
        await (await this.getNameFieldByType(nameFieldType)).setValue(str)
    }

    public register = async (email: string, password: string, firstName: string, lastName: string) => {
        await this.navigationBar.clickLoginButton()
        await this.clickSignUpButton()
        await this.fillEmailField(email)
        await this.fillPasswordField(password)
        await this.clickSignUpForFreeButton()
        await this.fillNameFieldByType(SIGN_UP_NAME_TYPES.FIRST_NAME, firstName)
        await this.fillNameFieldByType(SIGN_UP_NAME_TYPES.LAST_NAME, lastName)
        await this.clickSignUpForFreeButton()
    }

    public getReturnToLoginButton = async () => {
        return await $('//span[contains(text(), " Log in")]')
    }

    public clickReturnToLoginButton = async () => {
        await (await this.getReturnToLoginButton()).click()
    }

    public getPasswordValidationHelperByName = async (name: string) => {
        return await $(`//li[contains(text(),'${name}')]//*[name()='circle']`)
    }

    public getNameInputErrorMessage = async () => {
        return await $("span.NameInput_email_error__Wr-Sd")
    }

    public getResendEmailButton = async () => {
        return await $('//button[contains(text(), "Resend verification email")]')
    }

    public clickResendEmailButton = async () => {
        await (await this.getResendEmailButton()).click()
    }

    public getEmailValidationMessage = async () => {
        return await $('span.EmailInput_email_error__IJxXf')
    }

    public getSignUpButton = async () => {
        return await $('//span[contains(text()," Sign up")]')
    }

    public clickSignUpButton = async () => {
        await (await this.getSignUpButton()).click()
    }

    public getValidationAlert = async () => {
        return await $('div.Alert_iwrp__5q1xH')
    }

    public getHomePageButton = async () => {
        return await $('a[href="https://w3schools.com"]')
    }

    public clickHomePageButton = async () => {
        await (await this.getHomePageButton()).click()
    }
    
    public static getInstance() {
        if (!this.instance) {
            this.instance = new SignUpPage()
        }
        return SignUpPage.instance
    }
}