const { test,expect } = require('@playwright/test');

test('Home page',async({page}) =>{

await page.goto('https://www.demoblaze.com/index.html');

const pagetitle = await page.title;
console.log("page-title" , pagetitle);

await expect (page).toHaveTitle('STORE');

const pageurl = page.url();

await expect (page).toHaveURL('https://www.demoblaze.com/index.html');

await page.close();

})


