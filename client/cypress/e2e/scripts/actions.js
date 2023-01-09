cy.get('[type="checkbox"]').check() // Check checkbox element
cy.get('[type="radio"]').first().check() // Check first radio element
cy.get('[type="checkbox"]').uncheck() // Unchecks checkbox element

// Type into a DOM element.
cy.get('input').type('Hello, World') // Type 'Hello, World' into the 'input'

cy.get('.btn').click() // Click on button

cy.get('button').dblclick() // Double click on button
cy.focused().dblclick() // Double click on el with focus
cy.contains('Welcome').dblclick() // Double click on first el containing 'Welcome'

// Clear the value of an input or textarea.
cy.get('[type="text"]').clear() // Clear text input
cy.get('textarea').type('Hi!').clear() // Clear textarea
cy.focused().clear() // Clear focused input/textarea

// Select an <option> within a <select>.
cy.get('select').select('user-1') // Select the 'user-1' option

cy.get('input[type=file]').selectFile('file.json')
cy.get('input[type=file]').selectFile(['file.json', 'file2.json'])

// Selects a file or files in an HTML5 input element or simulates dragging a file or files into the browser.
cy.get('input[type=file]').selectFile({
  contents: Cypress.Buffer.from('file contents'),
  fileName: 'file.txt',
  mimeType: 'text/plain',
  lastModified: Date.now(),
})

// Trigger an event on a DOM element.
cy.get('a').trigger('mousedown') // Trigger mousedown event on link