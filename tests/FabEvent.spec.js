const { test, expect } = require('@playwright/test');


    

test('test', async ({ page }) =>
{
    const email = "jmsantaji@gmail.com";

  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill("Shivansh@2019");
  await page.getByRole('button', { name: 'Sign In' }).click();
 
  await page.getByTestId('nav-events').click();
  await page.getByRole('button', { name: 'Add New Event' }).click();
  await page.getByTestId('event-title-input').fill("Maunsun Festive");
  await page.getByRole('textbox', { name: 'Describe the event…' }).fill("Hi come and join us and create new memory with your family.");
  await page.getByRole('textbox', { name: 'City*' }).fill("Bengalore");
  await page.getByRole('textbox', { name: 'Venue*' }).fill("Bengalore Palace");
  await page.getByLabel('Event Date & Time').fill('2027-12-31T10:00');

  
  await page.getByRole('spinbutton', { name: 'Price ($)*' }).fill("100");
  await page.getByRole('spinbutton', { name: 'Total Seats*' }).fill("50");
  await page.getByRole('textbox', { name: 'Image URL (optional)' }).fill("https://i1-c.pinimg.com/1200x/6e/af/25/6eaf25019e08e12ecfeacd9e43119116.jpg");
  await page.getByTestId('add-event-btn').click();
  
  await expect(page.getByText('Event created!')).toBeVisible();
  await page.getByTestId('nav-events').click();
  await page.getByRole('combobox').first().selectOption('Festival');
  await page.goto('https://eventhub.rahulshettyacademy.com/events?category=Festival');
  await page.getByRole('combobox').nth(1).selectOption('Bangalore');
  await page.goto('https://eventhub.rahulshettyacademy.com/events?category=Festival&city=Bangalore');
  await page.locator('div').filter({ hasText: 'FestivalMaunsoon FestThu, 25' }).nth(1).click();
  await page.getByText('Maunsoon FestThu, 25').click();
  await expect(page.getByText('Maunsoon FestThu, 25')).toBeVisible();
  await page.getByTestId('book-now-btn').click();
  await page.getByText('1', { exact: true }).click();
  await expect(page.getByText('1', { exact: true })).toBeVisible();
  await page.getByRole('textbox', { name: 'Full Name*' }).fill("Jyoti");
  await page.getByTestId('customer-email').fill(email);
  await page.getByRole('textbox', { name: 'Phone Number*' }).fill("8088242373");
  await page.getByRole('button', { name: 'Confirm Booking' }).click();

  await expect(page.getByRole('heading', { name: 'Booking Confirmed! 🎉' })).toBeVisible();

  await page.getByRole('button', { name: 'View My Bookings' }).click();
  await page.getByTestId('booking-card').first().click();
  await expect(page.getByTestId('booking-card').first()).toBeVisible();
  await page.getByRole('button', { name: 'View Details' }).first().click();
  await expect(page.getByRole('heading', { name: 'Event Details' })).toBeVisible();
  await page.getByTestId('nav-events').click();
});
