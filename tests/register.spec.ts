import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/page-manager';
import {faker} from '@faker-js/faker';


test('register user in demo QA', async ({ page }) => {
  const firstname= faker.person.firstName();
  const lastname= faker.person.lastName();
  const username= faker.internet.username();
  const password= faker.internet.password();
  const pm =new PageManager(page)
  await pm.getHomePage().openWebsite()
  await pm.getHomePage().clickOnBookStoreApplication()
  await pm.getBookPage().clickOnLoginButtonFromBookPage()
  await pm.getLoginPage().clickOnNewUserButton()
  await pm.getRegisterPage().fillRegistrationFlow(firstname,lastname,username,password);
  await pm.getRegisterPage().checkSignUpCompletion()
});
