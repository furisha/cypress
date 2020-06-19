/// <reference types="cypress" />
describe('CustomSuite', function()
{
    it('LoginTest', function()
    {
        cy.login('admin@yourstore.com', 'admin')
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')

        cy.login('admin@yourstore.com', 'admin123')
        cy.title().should('be.equal', 'Your store. Login')

        cy.login('admin@yourstore123.com', 'admin')
        cy.title().should('be.equal', 'Your store. Login')
    })

    it('Add customer', function()
    {
        cy.login('admin@yourstore.com', 'admin')
        cy.log('Adding customer')
    })

    it('Edit customer', function()
    {
        cy.login('admin@yourstore.com', 'admin')
        cy.log('Editing customer')
    })
})