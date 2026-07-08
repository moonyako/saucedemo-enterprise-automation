import { test, expect } from '../fixtures/my-test-base';

// 第一層分組
test.describe('SauceDemo - Authentication Test', () => {

    // 👑 亮點 1：beforeEach 直接拔掉！因為去登入頁面的動作，管家已經自動幫妳做完了。

    // TC1 - Log in - Standard User can log in 
    test('Verify standard user can log in successfully', async ({ loginPage }) => {
        // 👑 亮點 2：大括號直接用 { loginPage }，不用再手動 new 類別！
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.verifyLoginSuccess();
    });

    // TC 2 - Log in - locked out user cannot log in
    test('Verify locked out user cannot log in', async ({ loginPage }) => {
        await loginPage.login('locked_out_user', 'secret_sauce');
        await loginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    });

});