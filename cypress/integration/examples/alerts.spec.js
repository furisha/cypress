/// <reference types="cypress" />
describe('Alerts', function()
{
    it('Alerts', function()
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#HTML9 > div.widget-content > button').click()

        // cy.on('window:alert',(str) => {
        //     expect(str).to.equal('Please enter a valid user name!')      // window:alert
        // })
        
        cy.on('window:confirm',(str) => {
            expect(str).to.equal('Press a button!')                         // window:confirm
        })
    })
})