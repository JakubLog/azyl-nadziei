describe('Contact component | Azyl Nadziei', () => {
  it('Checks is render site', () => {
    cy.visit('/');
    cy.findByText('Ratujemy zwierzęta w potrzebie').should('exist');
  });
  it('Checks contact widgets mechanisms', () => {
    cy.visit('/contact');
    cy.findByText(
      'Jeżeli chcesz z nami porozmawiać o adopcji poprzez telefoniczną wymianę informacji, to znajdziesz nas pod numerem: +48 665 135 666'
    ).should('not.have.class', 'active');
    cy.findByText('Numer telefonu 📞').should('exist').click();
    cy.findByText(
      'Jeżeli chcesz z nami porozmawiać o adopcji poprzez telefoniczną wymianę informacji, to znajdziesz nas pod numerem: +48 665 135 666'
    ).should('have.class', 'active');
  });
});

export {};
