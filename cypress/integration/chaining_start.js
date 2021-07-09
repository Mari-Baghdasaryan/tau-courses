/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('http://localhost/users')
})

it('Chaining commands', () => {
  cy.get('[name="email"]')
      .type('admin@example.com')

    .get('[class="ui fluid input"]')
    .should(item => {
      expect(item[0]).to.contain.text("")
      expect(item[0]).to.contain.text("")

    })
});