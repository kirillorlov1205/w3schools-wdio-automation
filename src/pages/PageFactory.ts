import { PAGES } from '../support/types'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'

export class PageFactory {
    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return HomePage.getInstance()
            case PAGES.LOGIN:
                return LoginPage.getInstance()
            default:
                throw new Error('incorrect page name is provided')
        }
    }
}