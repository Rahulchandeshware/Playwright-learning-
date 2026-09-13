const { link } = require('node:fs');
const {test,expect} = require('playwright/test')

test('dropdown',async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/");

    const dropdownlink = await page.getByRole('link',{name:'Dropdown'});
    dropdownlink.click();

    await page.locator('#dropdown').selectOption({label:'Option 2'});

    await expect(page.locator('#dropdown')).toHaveValue('2');

    //This gives you the visible text of all options.

    // const options = await page.locator('#dropdown option').allTextContents();

    // console.log(options);



})