describe('Embedded mode', () => {
  it('shows data', () => {
    const url = 'https://github.com/Bry-inGH/family-tree-embedded/#' + Cypress.config('baseUrl');
    cy.visit(url);
    cy.get('iframe')
    .its('0.contentDocument.body').should('not.be.empty')
      .then(cy.wrap)
      .find('#root')
      .contains('Bonifacy');
  });
});
