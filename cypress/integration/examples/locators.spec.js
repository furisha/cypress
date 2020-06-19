/// <reference types="cypress" />
describe('Locating Elements', function()
{
    it('verify types of locators', function()
    {
        cy.visit("https://demo.nopcommerce.com/") //Opens the URL

        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") //Search Box

        cy.get("[type='submit']").click() //Click on Search button

        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()

        cy.get("#product_enteredQuantity_4").clear().type('6') //Quantity
        cy.wait(3000)

        cy.get('#add-to-cart-button-4').click() //Add to card button after providing a quantity
        cy.wait(3000)
        
        cy.get("#topcartlink > a > span.cart-label").click() //Shopping card link

        cy.get(".product-unit-price").contains('$1,800.00') //Validation
    })
})