import { expect, Locator, Page } from "@playwright/test";
import { CommonActions } from "../utils/common-actions";
import { text } from "stream/consumers";
import { time } from "console";

export class HomePage extends CommonActions{
    readonly contact: string
    readonly bookStoreApplication : string
    readonly loginButton : string
    constructor(page: Page){
       super(page)
       this.bookStoreApplication="//h5[text()='Book Store Application']"
        
        this.contact='//b[text()="Contacts"]'
    }

    async openWebsite(){
        await this.page.goto('/')
    }

    async clickOnBookStoreApplication() {
        await this.waitForNetworkLoadState()
        await this.scrollToElement(this.bookStoreApplication)
        const run= await this.checkElementIsVisible(this.bookStoreApplication,5)
        expect(run).toBeTruthy()
        await this.page.locator(this.bookStoreApplication).click()
    } 

    async clickOnLoginButton(){
        await this.page.locator(this.loginButton).click()
    }

    async checkHybperLinkAccuracy(){
        const links=  this.page.locator('a');
        console.log('Total links are: '+await links.count())
       for(let link of await links.all()){
        const href=await link.getAttribute('href')
        if (href?.startsWith('http://') || href?.startsWith('https://')) {
            try {
                const response =await this.page.request.get(href)
                console.log(href+" : "+response.status())
                expect(response.status()).toBe(200)}
         catch (error) {
                console.warn(`⚠️ Error accessing link: ${href}`);
            }
       
        }
    }
    }
}