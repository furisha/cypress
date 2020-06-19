/// <reference types="cypress" />
describe('Table', function()
{
    it('Table test', function()
    {
        cy.visit('https://testautomationpractice.blogspot.com/')

        //(1) Check value presene anywhere in the table
        cy.get('table[name=BookTable]').contains('td', 'Learn Selenium').should('be.visible')

        //(2) Check Value presence in a specific row & column
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

        //(3) Verify the book name "Master in Java" whose author is Amod
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2)').each(($e1, index, $list) => {

            const text=$e1.text()
            if(text.includes("Amod"))
            {
                cy.get('table[name=BookTable] > tbody > tr:nth-child(1)').eq(index).then(function(bname)
                {
                    const bookName=bname.text()
                    expect(bookName).to.equal("Master in Java")
                })
            }

        })
    })
})