/**
 * 🛠️ 超級環境盒子 (Fixture) 
 * 職責：把剛剛在 POM 寫好的大寫機器人（Class），一個個初始化，並「貼上小寫標籤」送給測試腳本。
 */

// 🛒 搬出 Playwright 的「原廠標準辦公桌」，並暫時改名叫 base（基礎基地）
// 白話：「原廠提供的 test 工具非常好，但為了不跟我們自己等一下要打造的『超級 test』撞名，
// 這裡用 'as base' 幫原廠工具改個小名叫做 base，當作我們擴充裝潢的『毛胚屋地基』。」
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';       // 👈 完美的一層跳躍！
import { ProductsPage } from '../pages/ProductsPage';   // 從 POM 進口 productsPage 軍火庫

// 📋 秘書辦公桌規格：拿著專屬秘書名單，去勞保局登記規格 (TypeScript 泛型)
type MyFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage; 
};

/**
 * 🎁 秘書大放送與辦公室擴充：
 * 
 * 1. export const test 掛上自訂公司的招牌：
 *    白話：「從現在開始，我要打造一個屬於我們自己、功能更強大的超級測試工具，它的名字一樣叫做 test。
 *    而且我要把它發行出去（export），讓明天的測試腳本（.spec.ts）可以直接使用它。」
 * 
 * 2. base.extend 針對原廠辦公室進行「豪華擴充裝潢」：
 *    白話：妳對著原廠喊話：「原廠的 base 辦公室啊，我不想摧毀妳，但我想要在妳的基礎上擴充（extend）我私人的豪華功能！」
 */
export const test = base.extend<MyFixtures>({
  
  // 1. 幫測試案例準備好「能直接做事」的小寫 loginPage 秘書
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page); // 實例化主管
    await loginPage.gotoLoginPage();       // 貼心服務：進辦公室前先幫妳把網頁開好
    await use(loginPage);                  // 把綁著小寫名牌的秘書交給測試案例使用
  },

  // 2. 幫測試案例準備好「能直接做事」的小寫 productsPage 秘書
  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page); // 實例化主管
    await use(productsPage);                     // 把綁著小寫名牌的秘書交給測試案例使用
  }
}); // 👈 完美的收尾括號，語法完全正確！