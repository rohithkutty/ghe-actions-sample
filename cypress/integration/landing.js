describe('Login Component Render Check', () => {
  beforeEach(() => {
    cy.visit('https://ghe-actions.herokuapp.com/');
  });
  it('Should Render on DOM', () => {
    cy.contains('Products Inventory list').should('be.visible');
    cy.contains('product-1').should('be.visible');
  });
});
