@passwordReset
Feature: W3schools password reset

    Background:
        Given The user opens web page 'https://www.w3schools.com/'

    # Scenario: Valid email validation
    #     When The user provides valid email in password reset field
    #     Then The user sees successful validation email message

    Scenario: Password reset email sending
        When The user provides valid email and clicks button 'Reset password'
        Then The user sees 'We’ve sent an email to "Email" with instructions.'

    # Scenario: Transfer to Login page by clicking "Return to Login" button on successful Password reset page
    #     When The user clicks "Return to Login" button on successful Password reset page
    #     Then The user sees "Login page"

    # Scenario: Transfer to Login page by clicking "Return to Login" button on Password reset page
    #     When The user clicks "Return to Login" button on Password reset page
    #     Then The user sees "Login page"

    # Scenario Outline: Validation while resetting password with invalid email
    #     When The user provides invalid email <Email>
    #     Then The user sees invalid email validation message

    #     Examples:
    #         | Email                    |
    #         | abc#def@mail.com         |
    #         | abc.def@mail.c           |
    #         | abc.def@mail#archive.com |
    #         | abc.def@mail             |
    #         | abc.def@mail..com        |

    # Scenario Outline: Validation while resetting password with email that doesn't exist in the system
    #     When The user provides email that doesn't exist in the system <Email>
    #     Then The user sees "email doesn't exist alert"

    # Scenario: Transfer to Home page by clicking "Home page" navigation button on Password reset page
    #     When The user clicks "Home page" navigation button on Password reset page
    #     Then The user sees "Home page"


    #     it(`Should send the email with password resetting instruction with valid email "${TEST_USER.email}"`, () => {
    #         homePage.navigationBar.clickLoginButton()
    #         loginPage.clickForgotPasswordButton()
    #         resetPasswordPage.fillEmailField(TEST_USER.email)
    #         resetPasswordPage.clickResetPasswordSubmitButton()
    #         resetPasswordPage.getPasswordResetSuccessfulMessage().should('have.text', `We’ve sent an email to ${TEST_USER.email} with instructions.`)
    #         resetPasswordPage.getPasswordResetSpamInfoMessage().should('have.text', PASSWORD_RESET_VALIDATION_MESSAGES.passwordResetSpamInfoMessage)
    #     })

    #     it('Should navigate to the Login page while clicking button [Return to login] on successful password reset page', () => {
    #         homePage.navigationBar.clickLoginButton()
    #         loginPage.clickForgotPasswordButton()
    #         resetPasswordPage.fillEmailField(TEST_USER.email)
    #         resetPasswordPage.clickResetPasswordSubmitButton()
    #         resetPasswordPage.clickReturnToLoginButtonOnSuccessfulResetPage()
    #         loginPage.getEmailField().should('be.visible')
    #     })

    #     for (const key in INVALID_EMAILS) {
    #         const invalidEmail = INVALID_EMAILS[key as keyof typeof INVALID_EMAILS]
    #         it(`Should show "${PASSWORD_RESET_VALIDATION_MESSAGES.InvalidEmailValidationMessage}" validation message while resetting password with invalid email "${invalidEmail}"`, () => {
    #             homePage.navigationBar.clickLoginButton()
    #             loginPage.clickForgotPasswordButton()
    #             resetPasswordPage.fillEmailField(`${invalidEmail}{enter}`)
    #             resetPasswordPage.getEmailValidationMessage().should('have.text', PASSWORD_RESET_VALIDATION_MESSAGES.InvalidEmailValidationMessage)
    #             resetPasswordPage.getResetPasswordSubmitButton().should('be.disabled')
    #         })
    #     }

    #     it('Should navigate to the Login page while clicking button [Return to login] on Reset password page', () => {
    #         homePage.navigationBar.clickLoginButton()
    #         loginPage.clickForgotPasswordButton()
    #         resetPasswordPage.clickReturnToLoginButton()
    #         loginPage.getEmailField().should('be.visible')
    #     })

    #     it(`Should show "${PASSWORD_RESET_VALIDATION_MESSAGES.emailDoesNotExistAlert}" validation message while password resetting with email that doesn't exist in the system`, () => {
    #         homePage.navigationBar.clickLoginButton()
    #         loginPage.clickForgotPasswordButton()
    #         resetPasswordPage.fillEmailField(`${randomstring.generate(8)}@gmail.com`)
    #         resetPasswordPage.clickResetPasswordSubmitButton()
    #         resetPasswordPage.getEmailDoesNotExistAlert().should('have.text', PASSWORD_RESET_VALIDATION_MESSAGES.emailDoesNotExistAlert)
    #     })

    #     it(`Should transfer the user to the Home page while clicking on [Home page] navigation button on the Password reset page`, () => {
    #         homePage.navigationBar.clickLoginButton()
    #         loginPage.clickHomePageButton()
    #         homePage.getWhereToBeginButton().should('be.visible')
    #     })
    # })