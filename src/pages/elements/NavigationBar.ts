export class NavigationBar {

    public getLoginButton = async () => {
        return await $('a[id="w3loginbtn"]')
    }

    public clickLoginButton = async () => {
        await (await this.getLoginButton()).click()
    }

    public getLogOutButton = async () => {
        return await $('button._tFEpH')
    }

    public clickLogOutButton = async () => {
        await (await this.getLogOutButton()).click()
    }

    public getHomePageNavigationButton = async () => {
        return await $('a[href="https://www.w3schools.com "]')
    }

    public clickHomePageButton = async () => {
        await (await this.getHomePageNavigationButton()).click()
    }

    public getNavigationItemByName = async (name: string) => {
        return await $(`//div[contains(@class, 'w3-bar')]/a[contains(text(), "${name}")]`)
    }

    public clickNavigationItemByName = async (name: string) => {
        await (await this.getNavigationItemByName(name)).click()
    }

    public getItemFromDropdownMenuByName = async (name: string) => {
        return await $(`//div[contains(@class, "w3-row-padding")]//div[contains(@class, 'w3-col')]/a[contains(text(), "${name}")]`)
    }

    public clickItemFromDropdownMenuByName = async (name: string) => {
        await (await this.getItemFromDropdownMenuByName(name)).click()
    }

    public getThemeSwitcher = async () => {
        return await $(`a[xxtitle="Toggle Dark Code"] i`)
    }

    public clickThemeSwitcher = async () => {
        await (await this.getThemeSwitcher()).click()
    }

    public getThemeFromDropdownByName = async (themeName: string) => {
        return await $(`//label[contains(text(), '${themeName}')]`)
    }

    public switchThemeByName = async (themeName: string) => {
        await (await this.getThemeSwitcher()).moveTo()
        await (await this.getThemeFromDropdownByName(themeName)).click()
    }

    public getPageByTheme = async (themeName: string) => {
        return await $(`//body[contains(@class, '${themeName}')]`)
    }

    public getButtonWithOuterLinkByTitle = async (title: string) => {
        return await $(`a[title = "${title}"]`)
    }

    public clickOnButtonWithOuterLinkByTitle = async (title: string) => {
        await (await this.getButtonWithOuterLinkByTitle(title)).click()
    }
}

export const navigationBar = new NavigationBar()