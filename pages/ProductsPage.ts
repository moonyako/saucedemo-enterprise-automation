import { Page, Locator, expect  } from '@playwright/test';

export class ProductsPage {
    // 1. 宣告這頁會用到的「元件貼紙（Locator）」
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly headerLogo: Locator;

    //在頁面的Element具體位置
    constructor(page: Page) {
        this.page = page;
        // SauceDemo 商品頁左上角的綠色或黑色大標題 "Products" 的 class 通常是 .title
        this.pageTitle = page.locator('.title');
        //加大廠工具 locator去 我自己命名的headerlogo 格子
        this.headerLogo = page.locator ('.app_logo')
    }

    // 2. 宣告這頁專屬的動作：驗證標題是否正常顯示
    async verifyTitleIsVisible() {
        // 斷言：預期這個標題必須是看得到的，而且文字要是 "Products"
        await expect(this.pageTitle).toBeVisible();
        await expect(this.pageTitle).toHaveText('Products');
    }

    // 3. 宣告懶人專屬動作：驗證頁面logo是否顯示正常
    async verifyLogoIsVisible (){
        //斷言：預期這個logo 是看得到的，而且文字鑰匙 “Swag Labs"
        await expect (this.headerLogo).toBeVisible;
        await expect(this.headerLogo).toHaveText('Swag Labs');
    }
    
}