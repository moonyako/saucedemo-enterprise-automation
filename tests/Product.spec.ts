//去Fixture 拿 test 和 expect 套裝
import { test, expect } from '../fixtures/my-test-base';

//1. test describe: 呼叫Playwright , 我要設計一個測試套件，把相關的測試都打包在一起。
// 只要是呼叫功能，後面一定使用小括號（）當大門
//2. '' 活動（測試）主題的名字。名字是文字（字串），所以用單引號 '' 包起來。
// 名字給完之後，後面要加個逗號 ,，代表「名字講完了，接下來我要放活動內容囉！」
//3. () => { ... } JavaScript 裡最有名的「箭頭函式（Arrow Function）」
// 妳可以直接把它大腦翻譯成：「（動作開始）=> { 內容在這裡 }」。
//記憶法：

//前面的 () 是準備起跑的動作（裡面不放東西）。

//箭頭 => 就是「接下來要做的事」。

//大括號 {} 就是妳的施工現場，所有相關的測試案例通通要塞在這對大括號的肚子裡。

test.describe ('Verify product page texts',()=> {

    //把 fixutre 格子裡的秘書叫出來
    test('Verify Product page header', async ({loginPage, productsPage}) => {
    await loginPage.login('standard_user','secret_sauce')
    await productsPage.verifyLogoIsVisible();
    await productsPage.verifyTitleIsVisible();
    });
    
});