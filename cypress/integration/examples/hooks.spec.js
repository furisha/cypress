/// <reference types="cypress" />

describe('Hooks', () => {
    before(() => {
      // runs once before all tests in the block
      cy.log('*** Setup Block ***')
    })
  
    beforeEach(() => {
      // runs before each test in the block
      cy.log('*** LOGIN Block ***')
    })
  
    afterEach(() => {
      // runs after each test in the block
      cy.log('*** LOGOUT Block ***')
    })
  
    after(() => {
      // runs once after all tests in the block
      cy.log('*** Tear Down Block ***')
    })

    it('searching'), function()
    {
        cy.log('*** Searching test ***')
    }

    it('searching2'), function()
    {
        cy.log('*** Searching test ***')
    }

  })