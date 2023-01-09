// and
cy.get('.err').should('be.empty').and('be.hidden') // Assert '.err' is empty & hidden
cy.contains('Login').and('be.visible') // Assert el is visible


// should
cy.get('.error').should('be.empty') // Assert that '.error' is empty
cy.contains('Login').should('be.visible') // Assert that el is visible
cy.wrap({ foo: 'bar' }).its('foo').should('eq', 'bar') // Assert the 'foo' property equals 'bar'