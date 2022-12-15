export class SearchField {

    public getSearchIcon = async () => {
        return await $('a.w3searchbtntopnav')
    }

    public clickSearchIcon = async () => {
        await (await this.getSearchIcon()).click()
    }

    public getSearchField = async () => {
        return await $('input[name = "search"]')
    }

    public getSubmitSearchButton = async () => {
        return await $('button.gsc-search-button')
    }

    public clickSubmitSearchButton = async () => {
        await (await this.getSubmitSearchButton()).click()
    }

    public fillSearchField = async (str: string) => {
        await (await this.getSearchField()).setValue(str)
        await this.clickSubmitSearchButton()
    }

    public getSearchModalPage = async () => {
        return await $('div.gsc-resultsbox-visible')
    }
}

export const searchField = new SearchField()