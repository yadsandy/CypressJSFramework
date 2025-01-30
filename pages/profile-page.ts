import { CommonActions } from "../utils/common-actions";
import { expect, Page } from "@playwright/test";

export class ProfilePage extends CommonActions{

   readonly getUsername: string
    constructor(page : Page){
        super(page)
      
      this.getUsername ='#userName-value'
    }

    async checkLoggedInUserDetail(expectedUsername: string){
        const username =await this.page.locator(this.getUsername).textContent()
        expect(username).toEqual(expectedUsername)
    }
   
}

