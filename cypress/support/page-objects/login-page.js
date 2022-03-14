export function login(creds) {
  cy.get('input#email').click.type(creds.username).blur();
  cy.get('input#password').click.type(creds.password).blur();
  cy,get('button[id="auth-0-email-pw-submit"]').click();
}

export function signUp(creds) {
  cy.get('div.login-signup-toggle button:nth-child(2)').click();
  cy.get('input#email').click.type(creds.username).blur();
  cy.get('input#confirmEmail').click.type(creds.username).blur();
  cy.get('input#password').click.type(creds.password).blur();
  cy,get('button[id="auth-0-email-pw-submit"]').click();

}