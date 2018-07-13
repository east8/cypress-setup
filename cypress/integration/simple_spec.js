// describe('My First Test', function() {
//     it('Does not do much!', function() {
//         expect(true).to.equal(false)
//     })
// })

// describe('My First Test', function() {
//     it('Visits the Kitchen Sink', function() {
//         cy.visit('https://example.cypress.io')
//     })
// })


describe('My First Test', function() {
    it("Gets, types and asserts", function() {
        cy.visit('http://www.bbc.co.uk')

        cy.get('#orb-nav-links li.orb-nav-weather').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/weather')

        // Get an input, type into it and verify that the value has been updated
        cy.get('#ls-c-search__input-label')
            .type('EC4A 2BB')
            .should('have.value', 'EC4A 2BB')

        cy.get('.ls-c-search__submit').click()

        cy.get('h1#wr-location-name-id').contains('EC4A')


    })
})
