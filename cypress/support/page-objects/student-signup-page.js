export function selectWorkplace(worplaceName) {
  cy.get('.css-2b097c-container').click();
  cy.get('.css-2b097c-container').find('input#employer').type(worplaceName);
    cy.contains('div.recess-react-select__option', worplaceName).click({force: true});
};

export function clickNext() {
  cy.get('[data-testid="select-employer-button"]').click();
}

export function signUp() {
  cy.get('#email').fill('email');
  cy.get('#confirmEmail').fill('email');
  cy.get('#password').fill('password');
  cy.get('[data-testid="login-email=button"]').click(); 
}

export function login() {
  cy.get('#email').fill('email');
  cy.get('#password').fill('password');
  cy.get('[data-testid="login-email=button"]').click(); 
}

export function resetPassword() {
  cy.contains('a', 'Forgot password?').click();
}