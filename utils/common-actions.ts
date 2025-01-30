import { expect, Page } from "@playwright/test";
import { TIMEOUT } from "dns";

export class CommonActions {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    async waitForInterval(timeInSeconds: number) {
        await this.page.waitForTimeout(timeInSeconds)
    }

    async checkElementIsVisible(value: string, timeout: number) {
        return await this.page.isVisible(value, { timeout })
    }
    async waitForNetworkLoadState() {
        await this.page.waitForLoadState("networkidle")
    }

    async scrollToElement(locator: string) {
        await this.page.locator(locator).scrollIntoViewIfNeeded()
    }

    async acceptAlertDialog(message: string) {
        this.page.on('dialog', dialog => {
            expect(dialog.message()).toEqual(message)
            dialog.accept()
        })
    }
}