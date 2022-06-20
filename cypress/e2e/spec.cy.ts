

describe('landing page spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3002/')
  })

  it('render results upon search', () => {
    cy.visit('http://localhost:3002/')
    //ACT
    cy.get('input').type('butterjack{enter}')
    //ASSERT
    cy.get('.repos').should('be.visible')
  })

  it('result upon non-valid username', () => {
    cy.visit('http://localhost:3002/')
    //ACT
    cy.get('input').type('non-valid-username{enter}')
    //ASSERT
    cy.contains('No such user')
  })
})