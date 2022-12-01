import { BasePage } from './BasePage'

export class LoginPage extends BasePage {

    protected static instance: LoginPage

    protected constructor() {
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

    public getSubmitButton = async () => {
        return await $('button.Button_primary__d2Jt3')
    }

    public submitForm = async () => {
        await (await this.getSubmitButton()).click()
    }

    public login = async (email:string, password: string) => {
        await this.fillEmailField(email)
        await this.fillPasswordField(password)
    }

    public getEmailValidationMessage = async () => {
        return await $('span.EmailInput_email_error__IJxXf')
    }

    public getValidationAlert = async () => {
        return await $('div.Alert_iwrp__5q1xH')
    }

    public getForgotPasswordButton = async () => {
        return await $('div.LoginModal_forgot_pwd_wrapper__qttSX')
    }

    public clickForgotPasswordButton = async () => {
        await (await this.getForgotPasswordButton()).click()
    }

    public getSignUpButton = async () => {
        return await $('//span[contains(text()," Sign up")]')
    }

    public clickSignUpButton = async () => {
        await (await this.getSignUpButton()).click()
    }

    public getHomePageButton = async () => {
        return await $('a[href="https://w3schools.com"]')
    }

    public clickHomePageButton = async () => {
        await (await this.getHomePageButton()).click()
    }

    // public getEmailField = async () => {
    //     return await $('div.auth-input__wrapper input[type = text]')
    // }

    // public fillEmailField = async (email: string) => {
    //     const emailField = await this.getEmailField()
    //     await emailField.waitForExist()
    //     await emailField.setValue(email)
    // }

    // public getPasswordField = async () => {
    //     return await $('div.auth-input__wrapper input[type = password]')
    // }

    // public fillPasswordField = async (password: string) => {
    //     const passwordField = await this.getPasswordField()
    //     await passwordField.waitForDisplayed()
    //     await passwordField.setValue(password)
    // }

    // public getSubmitButton = async () => {
    //     return await $('div.auth-form__control button[type = submit]')
    // }

    // public async submitForm() {
    //     const getSubmitButton = await this.getSubmitButton()
    //     await getSubmitButton.waitForExist()
    //     await getSubmitButton.click()
    // }

    // public getProtectionPopUpMessage = async () => {
    //     return await $('div.auth-form__mediabox span')
    // }

    // public getValidationMessage = async () => {
    //     return await $('div.auth-form__description_error')
    // }

    static getInstance() {
        if (!this.instance) {
            this.instance = new LoginPage()
        }
        return LoginPage.instance
    }
}