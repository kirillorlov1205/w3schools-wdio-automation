import { NavigationBar } from "./elements/NavigationBar"

export class BasePage {

    public navigationBar: NavigationBar
    protected url!: string

    public constructor() {
        this.navigationBar = new NavigationBar()
    }

    getPageTitle = async () => {
        return await browser.getTitle()
    }

    getCurrentUrl = async () => {
        return await browser.getUrl()
    }
}