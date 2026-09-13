const {test,expect} = require('playwright/test')

test('login',async({page}) =>{


    await page.goto('https://www.demoblaze.com/index.html');

    //click on login button --- id
    await page.locator('#login2').click();

    // add username input fields ---> xpath

    await page.locator("//input[@id='loginusername']").fill('pavanol');

    //add password input fields -->attribure

    await page.locator('#loginpassword').fill('test@123');

    // submit the button 

    await page.click("button[onclick='logIn()']");

    // verify the logout button 



    const logoutlink = await page.locator("//a[@id='logout2']");

    await expect(logoutlink).toBeVisible();

    console.log(await logoutlink.isVisible());

    //await page.close();




})