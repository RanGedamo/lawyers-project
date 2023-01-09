// Get the children of each DOM element within a set of DOM elements.
cy.get('nav').children() // Yield children of nav

// Get the DOM element containing the text.
cy.get('.nav').contains('About') // Yield el in .nav containing 'About'
cy.contains('Hello') // Yield first el in document containing 'Hello'

// eq
cy.get('tbody>tr').eq(0) // Yield first 'tr' in 'tbody'
cy.get('ul>li').eq(4) // Yield fifth 'li' in 'ul'