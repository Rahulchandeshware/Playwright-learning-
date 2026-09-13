const {test,expect} = require('playwright/test');

test('test',async({page})=>{

    //url open
    await page.goto("https://demo.nopcommerce.com/register");

    // verifying the URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    // verfying the pagetitle
    await expect(page).toHaveTitle("nopCommerce demo store. Register");
    

})

