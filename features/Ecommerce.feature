Feature : Ecommerce Validations
Scenario: Placing the order
Given a login to Ecommerce application with "jmsantaji@gmail.com" and "Iamking@000"
When Add "ADIDAS ORIGINAL" to Cart
Then Verify "ADIDAS ORIGINAL" is displayed in the Cart
When Enter valid details and Place the Order
Then Verify order is present in the orderHistory
