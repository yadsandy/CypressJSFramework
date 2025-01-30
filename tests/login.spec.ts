import test from "@playwright/test";
import { PageManager } from "../pages/page-manager";
import { loginData } from "./login-test-data";

test('login with user in demo QA', async ({ page }) => {
    const pm =new PageManager(page)
    await pm.getHomePage().openWebsite()
    await pm.getHomePage().clickOnBookStoreApplication()
    await pm.getBookPage().clickOnLoginButtonFromBookPage()
    await pm.getLoginPage().enterLoginDetails(loginData.username,loginData.password)
    await pm.getLoginPage().clickOnLogInButton()
    await pm.getProfilePage().checkLoggedInUserDetail(loginData.username)
  });
