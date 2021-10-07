describe('Navigation | Azyl Nadziei', () => {
  it('Checks is render site', () => {
    cy.visit('/');
    cy.findByText('Ratujemy zwierzęta w potrzebie').should('exist');
  });
  it('Checks navigation in application', () => {
    cy.findByText('O fundacji').should('exist').click();
    cy.findByText('O naszej fundacji').should('exist');

    cy.go('back');
    cy.findByText('O naszej fundacji').should('not.exist');
    cy.findByText('Ratujemy zwierzęta w potrzebie').should('exist');
    cy.go('forward');
    cy.findByText('O naszej fundacji').should('exist');

    cy.findByText('Adopcja').should('exist').click();
    cy.findByText('Nasi podopieczni').should('exist');

    cy.findByText('Jak pomóc?').should('exist').click();
    cy.findByText('Wpłać darowiznę').should('exist');

    cy.findByText('Kontakt').should('exist').click();
    cy.findByText(/masz pytania?/i).should('exist');
  });
});

export {};
