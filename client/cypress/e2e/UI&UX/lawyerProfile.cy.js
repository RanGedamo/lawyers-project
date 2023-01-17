describe('empty spec', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
  it('visit route', () => {
    cy.visit('http://localhost:3000/lawyer/profile/Lynet@gmail.com')
  })
  it('category image', () => {
    cy.visit('http://localhost:3000/lawyer/profile/Lynet@gmail.com')
    cy.get('.css-13pmxen').
  })
})
