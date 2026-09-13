//demo

const { test, expect } = require('@playwright/test');

test('checkbox test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkbox1 = page.locator('#checkboxes input').nth(0);

    await checkbox1.check();

    await expect(checkbox1).toBeChecked();

});