import { BasePage } from './BasePage'

export class PasswordResetPage extends BasePage {

    protected static instance: PasswordResetPage

    public constructor() {
        super()
    }

    public getEmailField = async () => {
        return await $('div.ResetPasswordRequest_modal_inner__42fZy  input.EmailInput_input_field__6t4Ux')
    }

    public fillEmailField = async (email: string) => {
        await (await this.getEmailField()).setValue(email)
    }

    public getReturnToLoginButton = async () => {
        return await $('div.ResetPasswordRequest_return_to_login_wrapper__-jz5P')
    }

    public clickReturnToLoginButton = async () => {
        await (await this.getReturnToLoginButton()).click()
    }

    public getEmailValidationMessage = async () => {
        return await $('span.EmailInput_email_error__IJxXf')
    }

    public getResetPasswordSubmitButton = async () => {
        return await $('div.ResetPasswordRequest_cta_bottom_box__gSd9O button')
    }

    public clickResetPasswordSubmitButton = async () => {
        await (await this.getResetPasswordSubmitButton()).click()
    }

    public getSuccessfulValidationEmailMessage = async () => {
        return await $('span.ResetPasswordForm_email_message__li39K')
    }

    public getPasswordResetSuccessfulMessage = async () => {
        return await $('div.Alert_success__g430w')
    }

    public getPasswordResetSpamInfoMessage = async () => {
        return await $('p.ResetPasswordRequest_reset_done_msg__HYi4h')
    }

    public getReturnToLoginButtonOnSuccessfulResetPage = async () => {
        return await $('div.ResetPasswordRequest_cta_bottom_box__gSd9O a')
    }

    public clickReturnToLoginButtonOnSuccessfulResetPage = async () => {
        await (await this.getReturnToLoginButtonOnSuccessfulResetPage()).click()
    }

    public getEmailDoesNotExistAlert = async () => {
        return await $('div.Alert_iwrp__5q1xH')
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new PasswordResetPage()
        }
        return PasswordResetPage.instance
    }
}