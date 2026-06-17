const {test,expect} = require("@playwright/test");
 
 
test.only("Popup Validations",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
// this is for hidden boxes or how to handel displayed mode
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();

//how to automate java/javaScript pop ups 

//if you want to accept the pop up you use accept(); and if you want to reject then use dismiss();
page.on('dialog',dialog => dialog.accept());
await page.locator("#confirmbtn").click();

// how to mouse hover automate
await page.locator("#mousehover").hover();

// how to deal with frames
const framesPage = page.frameLocator("#courses-iframe");
await framesPage.locator("li a[href*='lifetime-access']:visible").click();
const textCheck = await framesPage.locator(".text h2").textContent();
console.log(textCheck.split(" ")[1]);


})