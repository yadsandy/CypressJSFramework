import { Page } from "@playwright/test";
import { CommonActions } from "../utils/common-actions";
import { RegisterPage } from "./register-page";
import { HomePage } from "./home-page";
import { LoginPage } from "./login-page";
import { BookPage } from "./book-page";
import { ProfilePage } from "./profile-page";

export class PageManager  {
    readonly homePage : HomePage
    readonly registerPage: RegisterPage
    readonly loginPage: LoginPage
    readonly bookPage: BookPage
    readonly profilePage: ProfilePage
    readonly page: Page

    constructor(page: Page){
    this.page = page
    this.homePage = new HomePage(page)
    this.registerPage = new RegisterPage(page)
    this.loginPage = new LoginPage(page)
    this.bookPage = new BookPage(page)
    this.profilePage=new ProfilePage(page)
}

 getHomePage(){
    return this.homePage
}

getRegisterPage(){
    return this.registerPage
}

getLoginPage(){
    return this.loginPage
}

getBookPage(){
    return this.bookPage
}

getProfilePage(){
    return this.profilePage
}
}