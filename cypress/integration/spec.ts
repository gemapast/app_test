import es from '../../src/assets/i18n/es.json';

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('image title mobile not visible', () => {
    cy.viewport(393, 851)
    cy.viewport("samsung-s10");
    cy.get('[data-testid="title"]').should("not.be.visible");
  });

  it('load image title desktop', () => {
    cy.get('[data-testid="title"]').should("be.visible");
  });

  it('enter correct email and password', () => {
    cy.get('[data-testid="email"]').type('email@test.com');
    cy.get('[data-testid="password"]').type('validPassword');
    cy.get('[data-testid="email"]').should('have.value', 'email@test.com');
    cy.get('[data-testid="password"]').should('have.value', 'validPassword');
  });

  it('login ok', () => {
    cy.get('[data-testid="email"]').type('email@test.com');
    cy.get('[data-testid="password"]').type('validPassword');
    cy.get('[data-testid="submit"]').click();
    cy.contains(es.loginOK);
    cy.get('ion-alert').should("be.visible");
  });

  it('login ok with remember password', () => {
    cy.get('[data-testid="email"]').type('email@test.com');
    cy.get('[data-testid="password"]').type('validPassword');
    cy.get('[data-testid="rememberPassword"]').click();
    cy.get('[data-testid="submit"]').click();
    cy.get('.alert-message').should('contain', es.passwordSaved);
  });

  it('login failed', () => {
    cy.get('[data-testid="email"]').type('email@test.com');
    cy.get('[data-testid="password"]').type('vali');
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="errorPassword"]').should('contain', es.passwordMinlength);
  });

  it('close alert', () => {
    cy.get('[data-testid="email"]').type('email@test.com');
    cy.get('[data-testid="password"]').type('validPassword');
    cy.get('[data-testid="submit"]').click();
    cy.contains(es.accept).click();
    cy.get('ion-alert').should("not.be.visible");
  });

  it('incorrect email pattern and password required', () => {
    cy.get('[data-testid="email"]').type('email.com');
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="errorEmail"]').should('contain', es.emailPattern);
    cy.get('[data-testid="errorPassword"]').should('contain', es.passwordRequired);
  });
});


