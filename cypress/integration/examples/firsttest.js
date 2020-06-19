describe('MyTestSuite', () => {
    it('Verfy Title of The Page - Positive', function() 
    {
      cy.visit('http://demowebshop.tricentis.com/')
      cy.title().should('eq', 'Demo Web Shop')
    })
    it('Verfy Title of The Page - Negative', function() 
    {
      cy.visit('http://demowebshop.tricentis.com/')
      cy.title().should('eq', 'Demo Web Shop')
    })
  })