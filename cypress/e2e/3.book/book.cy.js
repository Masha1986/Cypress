describe('example to-do app', () => {
   beforeEach(() => {

    cy.visit('http://localhost:3000/')
    //cy.viewport(667, 375)
    cy.contains('Log in').click()
    cy.get('#mail').click().type('bropet@mail.ru');
    cy.get('#pass').click().type('123');
    cy.get('form > .ml-2').click();
  })
  
    afterEach(() => {
        cy.contains('Log out').click()
         })

         


      it('add books', () => {

        cy.get('.p-0 > .btn').click();
        cy.get('#title').type('123');
        cy.get('form > .ml-2').click();
        cy.contains('123').should('be.visible');
      })

      it('book favorite', () => {
        
        cy.contains('Add to favorite').click();
        cy.get('h4').click();
        cy.contains('123').should('be.visible');
  
      })

      it('delete book', () => {
        
        cy.get('h4').click();
        cy.get('.card-footer > .btn').click();
        cy.get('.btn > a').should('be.visible');
  
      })
  })