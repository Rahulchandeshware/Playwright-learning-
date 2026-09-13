
const {test,expect} = require('playwright/test');

test('fileupload',async({page}) =>{

    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator('#file-upload').setInputFiles('C:/Users/rahul/OneDrive/Desktop/doc.pdf');

    await page.getByRole('button',{name:'Upload'}).click();

    await expect(page.locator('\\h3')).toHaveText("File Uploaded!");


})