import { CommonActions } from "../utils/common-actions";
import { expect, Page } from "@playwright/test";

export class LoginPage extends CommonActions{

   readonly username: string
   readonly password: string
   readonly loginBtn: string
   readonly newUser: string
   readonly getUsername: string
    constructor(page : Page){
        super(page)
      this.username='#userName'
      this.password='#password'
      this.loginBtn = '#login'
      this.newUser ='#newUser'
      this.getUsername ='#userName-value'
    }

    async enterLoginDetails(username: string, password: string){
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
    }

    async clickOnLogInButton(){
        await this.page.locator(this.loginBtn).click()
    }

    async clickOnNewUserButton(){
        await this.page.locator(this.newUser).click()
    }

    async checkLoggedInUserDetail(expectedUsername: string){
        const username =await this.page.locator(this.getUsername).textContent()
        expect(username).toEqual(expectedUsername)
    }
   
}

