
const {test,expect} = require('playwright/test')

test('login',async({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/')

    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');

    await page.getByRole('textbox',{name:'Username'}).fill('student');

    await page.locator('#password').fill('Password@123')

    const submitbtn = await page.locator('#submit');

    if(submitbtn.isVisible()){

        await submitbtn.click();
    }
    else{
        console.log("submit button is not visible")
    }



})