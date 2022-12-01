import { NavigationBar } from "./elements/NavigationBar"

export class BasePage {

    public navigationBar: NavigationBar
    protected url!: string

    public constructor() {
        this.navigationBar = new NavigationBar()
    }

    get getPageTitle() {
        return browser.getTitle()
    }

    get getCurrentUrl() {
        return browser.getUrl()
    }
}