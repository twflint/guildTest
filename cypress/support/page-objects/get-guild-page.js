export function verifyPage() {
  cy.get('h1 span').should('have.text', 'Your employer isn\'t working with Guild, yet.');
}