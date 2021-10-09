/* eslint-disable cypress/no-unnecessary-waiting */
describe('Adoption view | Azyl Nadziei', () => {
  it('Checks is render site', () => {
    cy.visit('/');
    cy.findByText('Ratujemy zwierzęta w potrzebie').should('exist');
  });
  it('Checks is Modals working', () => {
    cy.visit('/adoption');
    cy.findByText('Zwierzęta potrzebujące kochających domów i pomocy ludzI.').should('exist');
    cy.findByText('O pupilu').should('not.exist');
    cy.findAllByText('Informacje').first().click();
    cy.findByText('O pupilu').should('exist');
    cy.findByText('Wyjdź').click();
  });
  it('Checks adoption mechanism', () => {
    cy.findAllByText('Zaadoptuj').first().click();
    //Form validation test
    cy.findByText(/imię nie może być puste/i).should('not.exist');
    cy.findByText('Poproś o kontakt').click();
    cy.findByText(/imię nie może być puste/i).should('exist');
    const testId = `Test${Math.round(Math.random() * 1000)}`;
    cy.findByLabelText('Imię').click().type(testId);
    cy.findByText(/imię nie może być puste/i).should('not.exist');
    cy.findByLabelText('Email').click().type(`EMAIL-${testId}`);
    cy.findByText(/podaj poprawny adres e-mail/i).should('exist');
    cy.findByLabelText('Email').click().clear();
    cy.findByLabelText('Email').click().type(`adres.${testId}@mail.com`);
    cy.findByText(/podaj poprawny adres e-mail/i).should('not.exist');
    //Adoption button test
    cy.findByText('Poproś o kontakt').should('exist').click();
    cy.wait(500);
    cy.findByText('Poproś o kontakt').should('not.exist');
    cy.findByText('Wysyłanie...').should('exist');
    cy.wait(3000);
    cy.findByText('Wysyłanie...').should('not.exist');
    cy.findByText('Wysłano pomyślnie!').should('exist');
  });
});

export {};
