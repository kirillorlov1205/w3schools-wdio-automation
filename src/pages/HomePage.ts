import { BasePage } from './BasePage'
import { NavigationBar, navigationBar } from './elements/NavigationBar'
import { SearchField, searchField } from './elements/SearchField'

export class HomePage extends BasePage {

    protected static instance: HomePage
    public searchField: SearchField

    protected constructor() {
        super()
        this.searchField = searchField
    }

    public getWhereToBeginButton = async () => {
        return await $('a[href="where_to_start.asp"]')
    }

    public clickWhereToBeginButton = async () => {
        await (await this.getWhereToBeginButton()).click()
    }

    public getSearchFieldFromHomePage = async () => {
        return await $('input[id = "search2"]')
    }

    public getSubmitSearchButtonOnHomePage = async () => {
        return await $('button[id="learntocode_searchbtn"]')
    }

    public clickSubmitSearchButtonOnHomePage = async () => {
        await (await this.getSubmitSearchButtonOnHomePage()).click()
    }

    public fillSearchFieldOnHomePage = async (str: string) => {
        await (await this.getSearchFieldFromHomePage()).setValue(str)
    }

    public getSearchDropdownOnHomePage = async () => {
        return await $('div[id = "listofsearchresults"]')
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new HomePage()
        }
        return HomePage.instance
    }
}