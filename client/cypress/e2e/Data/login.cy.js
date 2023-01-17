describe("empty spec", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
  it("user sign up", () => {
    cy.visit("/");
    cy.get(".css-26a7w4 > .chakra-stack > .css-jut409").click();
    cy.get(".row > :nth-child(2) > .chakra-button").click();
    cy.get(":nth-child(2) > .nav-link").click();
    cy.get("#form1").type("Tessy");
    cy.get("#form2").type("Tespay");
    cy.get("#form3").type("test@gmail.com");
    cy.get("#form4").type("Test@12345");
    cy.get("#form5").type("Test@12345");
    cy.get('.show > .card-body > .ripple').click()
  });
   it('user sign in', () => {
       cy.visit('/')
       cy.get('.css-26a7w4 > .chakra-stack > .css-jut409').click()
       cy.get('.row > :nth-child(2) > .chakra-button').click()
       cy.get('#formControlLgEmail').type('test@gmail.com')
       cy.get('#formControlLgPassword').type('Test@12345')
       cy.get('.show > .card-body > .ripple').click()
     })

   it('user sign in via google', () => {
     cy.visit('/')
     cy.get('.css-26a7w4 > .chakra-stack > .css-jut409').click()
     cy.get('.row > :nth-child(2) > .chakra-button').click()
     cy.get('[style="display: block; border: 0px; border-radius: 3px; box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px; color: black; cursor: pointer; font-size: 19px; margin: 5px; width: 250px; overflow: hidden; padding: 0px 10px; user-select: none; height: 50px; background: white;"]').click()
   })
});
