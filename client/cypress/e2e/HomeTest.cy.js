describe('template spec', () => {
  
    it('passes', () => {
      cy.visit('/')
    })
    it("btn-img",()=>{
        cy.visit('/')
        cy.get('.css-p4fh8y > .chakra-stack > .css-jut409').contains("Get started")
    })
    // it("favorite Lawyer",()=>{
    //     cy.visit('/')
    // })
  })
