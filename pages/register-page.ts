import { expect, Locator, Page } from "@playwright/test";
import { CommonActions } from "../utils/common-actions";


export class RegisterPage extends CommonActions {

    readonly firstname: string
    readonly lastname: string
    readonly userName: string
    readonly password: string
    readonly recaptcha: string
    readonly registerBtn: string
    readonly frame: string
    constructor(page: Page) {
        super(page)
        this.firstname = "#firstname"
        this.lastname = "#lastname"
        this.userName = "#userName"
        this.password = "#password"
        this.recaptcha = "#recaptcha-anchor"
        this.registerBtn = "#register"
        this.frame = '//iframe[@title="reCAPTCHA"]'
    }


    async fillRegistrationFlow(firstname: string, lastname: string, userName: string, password: string) {
        await this.page.locator(this.firstname).fill(firstname)
        await this.page.locator(this.lastname).fill(lastname)
        await this.page.locator(this.userName).fill(userName)
        await this.scrollToElement(this.password)
        await this.page.locator(this.password).fill(password)
        const frame = await this.page.frameLocator(this.frame)
        await frame?.locator(this.recaptcha).click()
        await this.page.locator(this.registerBtn).click()
    }

    async checkSignUpCompletion() {
        await this.acceptAlertDialog('User Register Successfully.')
    }

}