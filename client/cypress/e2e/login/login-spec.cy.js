describe("header spec", () => {
  before(() => {
    cy.visit("/");
  });
  it("check header logo", () => {
    cy.get(".css-lygqz2 > :nth-child(1)").contains("Themis");
  });
//   it("check header option", () => {
//     cy.get(".chakra-link > .css-0").contains("Categories");
//   });
//   it("check mood btn", () => {
//     cy.get(".css-10ku4d3").contains("Categories");
//   });
//   it("check sign in btn", () => {
//     cy.get(".css-10ku4d3").contains("Categories");
//   });
//   it("check sign up btn", () => {
//     cy.get(".css-10ku4d3").contains("Categories");
//   });
//   it("check header load", () => {
//     cy.get(".css-lygqz2").contains("Categories");
//   });
//   it("check header color", () => {
//     cy.get(".css-lygqz2").should(
//       "have.css",
//       "background-color",
//       "rgb(255, 255, 255)"
//     );
//   });
});

// describe("check mood btn spec", () => {
//   before(() => {
//     cy.visit("/");
//   });
//   it("btn icon", () => {
//     cy.get(".css-10ku4d3").contains("Categories");
//   });
//   it("btn color", () => {
//     cy.get(".css-10ku4d3").contains("Categories");
//   });
//   it("btn onclick event", () => {
//     cy.get(".css-10ku4d3").click();
//   });
// });
// describe("check sign-in btn spec", () => {
//   before(() => {
//     cy.visit("/");
//   });
//   it("btn text", () => {
//     cy.get(".css-lsgkb6").contains("Sign In");
//   });
//   it("btn bg color", () => {
//     cy.get(".css-lsgkb6").should(
//       "have.css",
//       "background-color",
//       "rgb(255, 255, 255)"
//     );
//   });
//   it("btn onclick event", () => {
//     cy.get(".css-lsgkb6").click();
//   });
// });
// describe("check sign-up btn spec", () => {
//   before(() => {
//     cy.visit("/");
//   });
//   it("btn text", () => {
//     cy.get(".css-qs63ec").contains("Sign Up");
//   });
//   it("btn color", () => {
//     cy.get(".css-qs63ec").contains("Categories");
//   });
//   it("btn onclick event", () => {
//     cy.get(".css-qs63ec").click();
//   });
// });
