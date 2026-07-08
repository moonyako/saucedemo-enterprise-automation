import { test, expect } from '../fixtures/my-test-base';

test.describe('SauceDemo - Authentication Test', () => {

    test.skip('Verify standard user can log in successfully', async ({ loginPage }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.verifyLoginSuccess();
    });

    test('Verify locked out user cannot log in', async ({ loginPage }) => {
        await loginPage.login('locked_out_user', 'secret_sauce');
        await loginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    });

});      