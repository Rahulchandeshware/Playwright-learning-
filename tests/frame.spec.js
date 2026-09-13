
const {test,expect} = require('playwright/test');

test('iframe',async({page})=>{

    await page.goto('');

    const iframe = await page.frameLocator("//frame[@name='packageListFrame']")

    
    await iframe.locator("//a[text()='java.applet']").click()
})
