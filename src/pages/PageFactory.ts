import { PAGES } from '../support/enums'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { PasswordResetPage } from './PasswordResetPage'
import { SignUpPage } from './SignUpPage'

export class PageFactory {
    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return HomePage.getInstance()
            case PAGES.LOGIN:
                return LoginPage.getInstance()
            case PAGES.SIGN_UP:
                return SignUpPage.getInstance()
            case PAGES.RESET_PASSWORD:
                return PasswordResetPage.getInstance()
            default:
                throw new Error('Incorrect page name is provided')
        }
    }
}