/// <reference types="cypress" />
describe('UI Elements', function()
{
    it('Verify Inputbox & Radio buttons', function()
    {
        //Open URL and verify including 'newtours'
        cy.visit("http://newtours.demoaut.com/")
        cy.url().should('include', 'newtours')

        //Verify visibility of fields and type 'mercury' in the fields
        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury")

        //Click on Sign-in
        cy.get('input[name=login]').should('be.visible').click()

        //Title verification
        cy.title().should('eq', 'Find a Flight: Mercury Tours:')

        //Radio buttons
        //visibility checked status + click
        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')  
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()

        //Continue button click
        cy.get('input[name=findFlights]').should('be.visible').click()

        //Verify Title
        cy.title().should('eq', 'Select a Flight: Mercury Tours')

    })

    it('Hobbies check boxes', function()
    {
        cy.visit("http://demo.automationtesting.in/Register.html") //Opens the URL

        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type=checkbox]').check(['Cricket', 'Hockey'])
    })

    it('Skills Drop Down', function()
    {
        cy.get('#Skills').select('Android').should('have.value', 'Android')        
    })

    it('Languages Multi Select', function()
    {
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japanese').click()
    })
    
    it('Select countries searchable drop down', function()
    {
        cy.get('[role=combobox]').click({force: true})
        cy.get('.select2-search__field').type('ind')
        cy.get('.select2-search__field').type('{enter}')
    })
    
})