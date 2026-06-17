const { Given, When, Then } = require("@cucumber/cucumber")
const {POManager} = require('../../pageobject/POManager');
const {expect} = require("@playwright/test");
const playwright = require("@playwright/test");


Given('a login to Ecommerce application with {string} and {string}', {timeout: 100*1000}, async function (username, password)
    {
        const browser = await playwright.chromium.launch();
        const context = await  browser.newContext();
        const page= await context.newPage();
         this.poManager = new POManager(page);
        const products = page.locator(".card-body");
        const loginPage = this.poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(username,password);

    }
);


When('Add {string} to Cart', async function (productName)
{
     this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.searchProductAddCard(productName);
    await this.dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the Card', async function(productName)
{
    const cartPage = this.poManager.getCardPage();
    await cartPage.verifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});

When('Enter valid details and Place the order',async function()
    {
    const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
    });

Then('Verify order in present in the orderHistory', async function () {
    await this.dashboardPage.navigateToOrders();
   const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
})