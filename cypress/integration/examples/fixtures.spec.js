/// <reference types="cypress" />

describe('MyTestSuite', function() {

    before(function() {
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
        // Takes data from example.json
        it('FixturesTest-example.jsom', function(){
            cy.visit('https://admin-demo.nopcommerce.com/login')
            cy.get('input[name=Email]').clear().type(this.data.email) //email
            cy.get('input[name=Password]').type(this.data.password) //password
            cy.get('input[type=submit]').click() //signin
        })

        //Hard Coded
        it('FixturesTest-hardcoded', function(){
            cy.visit('https://admin-demo.nopcommerce.com/login')
            cy.get('input[name=Email]').clear().type('admin@yourstore.com') //email
            cy.get('input[name=Password]').clear().type('admin') //password
            cy.get('input[type=submit]').click() //signin
        })

})