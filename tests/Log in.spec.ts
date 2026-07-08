import { test,expect } from '../fixtures/my-test-base';

test ('手動體驗 : POM + Fixture 的魔法', async ({ loginPage}) => {
    
//TC 1 Verify if "standard_user" can be succesfully logged in 
    await loginPage.gotoLoginPage();
    await loginPage.login ('standard_user','secret_sauce');
    await loginPage.verifyLoginSuccess();

// TC 2 Verify if "locked out user" can be locked out from sign in
    await loginPage.gotoLoginPage();
    await loginPage.login ('locked_out_user','secret_sauce');
    await loginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
   
}

)