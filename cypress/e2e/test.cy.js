describe('Test David Salvador', () => {
  const baseUrl = 'http://a20davsalsos.dam.inspedralbes.cat/cypress-tests/web';
  it('Carga correctamente la página principal', () => {
    cy.visit(`${baseUrl}/index.html`);

    cy.contains('a', 'Veure els meus projectes')
      .should('exist')
      .should('be.visible');
  });

  it('Navega a projectes', () => {
    cy.visit(`${baseUrl}/index.html`);
    cy.contains('a', 'Veure els meus projectes')
      .should('exist')
      .should('be.visible')
      .click();

    cy.url().should('include', '/projectes.html');

    cy.contains('h1', 'Els meus projectes');

    cy.contains('a', 'Projecte 1')
      .should('exist')
      .should('be.visible')
      .should('have.attr', 'href', 'https://github.com/inspedralbes/m07-desenvolupament-d-interf-cies-Dasbits');
    cy.contains('a', 'Projecte 2')
      .should('exist')
      .should('be.visible')
      .should('have.attr', 'href', 'https://github.com/inspedralbes/tr2-24-25-front-back-tr2_g3');
    cy.contains('a', 'Projecte 3')
      .should('exist')
      .should('be.visible')
      .should('have.attr', 'href', 'https://github.com/inspedralbes/SoundOClock');
  });

  it('Torna a index.html desde projectes.html', () => {
    cy.visit(`${baseUrl}/projectes.html`);
    cy.contains('a', 'Tornar a la pàgina principal')
      .should('exist')
      .should('be.visible')
      .click();

    cy.url().should('include', '/index.html');

    cy.contains('a', 'Veure els meus projectes')
      .should('exist')
      .should('be.visible');
  });
});
