Given(/^I launch "([^"]*)?"$/, function (url) {
    cy.visit(url)
})

Then(/^go to the weather screen$/, function () {
    cy.get('#orb-nav-links li.orb-nav-weather').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/weather')
})

Then(/^search for weather by with postcode "([^"]*)?"$/, function (postcode) {
    cy.get('#ls-c-search__input-label')
        .type(postcode)
        .should('have.value', postcode)

    cy.get('.ls-c-search__submit').click()
})

Then(/^I will see the results heading "([^"]*)?"$/, function (heading) {
    cy.get('h1#wr-location-name-id').contains(heading)
})
