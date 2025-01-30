import { Page } from "@playwright/test";
import { CommonActions } from "../utils/common-actions";

export class BookPage extends CommonActions{
    readonly loginButton: string
    constructor(page: Page){
        super(page)
        this.loginButton = '#login'
    }

    async clickOnLoginButtonFromBookPage(){
        await this.page.locator(this.loginButton).click()
    }


}