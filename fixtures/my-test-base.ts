//Fixture - 把剛剛寫好的 POM 機器人，一個個初始化，並「貼上標籤」送給測試腳本
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; // 👈 完美的一層跳躍！
import { ProductsPage } from '../pages/ProductsPage';// 從POM 進口 product pages 軍火

type MyFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage; //規劃專屬秘書辦公桌
};

//秘書大放送
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage(); 
    await use(loginPage);
 },

  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage (page);
    await use (productsPage);
  }
  
  
});

export { expect } from '@playwright/test';