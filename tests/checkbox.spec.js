const {test,expect} =require('playwright/test');

test("checkbox",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/");

    await page.getByRole('Link',{name:'checkboxes'}).click();

    await expect(page).toHaveURL('https://the-internet.herokuapp.com/checkboxes');

    const checkbox1 = page.locator("//input[1]");

    await checkbox1.check();

    await page.locator("//input[2]").click();


//     if (await checkbox1.isChecked() == false) {
//     await checkbox1.check();
    
// }




})


