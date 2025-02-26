describe('Labs basic', () => {
  it('Portada', () => {
      cy.visit('https://dam.inspedralbes.cat:8083/');
      cy.get('label:contains("Username")')
          .should('exist');
  })
})