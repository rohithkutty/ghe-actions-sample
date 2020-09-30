describe('Login Component Render Check', () => {
  beforeEach(() => {
    cy.visit('https://d28e22893a36.ngrok.io');
  });
  it('Should Render on DOM', () => {
    cy.contains('Products list').should('be.visible');
    cy.contains('product-1').should('be.visible');
  });
});
