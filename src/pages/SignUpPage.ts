import { SIGN_UP_NAME_TYPES } from "../support/enums"
import { LoginPage } from "./LoginPage"

export class SignUpPage extends LoginPage {

    protected static instance: SignUpPage

    constructor() {
        super()
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

    static getInstance() {
        if (!this.instance) {
            this.instance = new SignUpPage()
        }
        return SignUpPage.instance
    }
}