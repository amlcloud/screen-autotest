// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('findByFltSemanticsAriaLabel', function (locator) {
  return cy.get('flt-semantics[aria-label="' + locator + '"]');
});

Cypress.Commands.add('findFltSpanWithText', (text) => {
  return cy.get('flt-span')
    .filter(($element) => {
      return $element.text().includes(text);
    });
});

// Define a custom command 'getTextFromAllElements'
Cypress.Commands.add('getTextFromAllElements', (selector) => {
  // Get all elements that match the provided selector
  return cy.get(selector).then((elements) => {
    // Create an array to store the text content of each element
    const textContents = [];

    // Iterate over the array of elements and get the text content of each element
    elements.each((index, element) => {
      // Use Cypress's 'invoke' method to retrieve the text content of the element
      cy.wrap(element).invoke('text').then((textContent) => {
        // Push the text content to the 'textContents' array
        textContents.push(textContent);
      });
    });

    // Return the array of text contents to be used in the test case
    return textContents;
  });
});

// Define a custom command 'getAttributeValuesFromAllElements'
Cypress.Commands.add('getAttributeValuesFromAllElements', (selector, attributeName) => {
  // Get all elements that match the provided selector
  return cy.get(selector).then((elements) => {
    // Create an array to store the attribute values of each element
    const attributeValues = [];

    // Iterate over the array of elements and get the attribute value of each element
    elements.each((index, element) => {
      // Use Cypress's 'invoke' method to retrieve the attribute value of the element
      cy.wrap(element).invoke('attr', attributeName).then((attributeValue) => {
        // Push the attribute value to the 'attributeValues' array
        attributeValues.push(attributeValue);
      });
    });

    // Return the array of attribute values to be used in the test case
    return cy.wrap(attributeValues); // Wrap the value and return it inside cy.then()
  });
});

// get single element attribute
Cypress.Commands.add('getAttributeValue', (selector, attributeName) => {
  return cy.get(selector).invoke('attr', attributeName).then((attributeValue) => {
    return attributeValue;
  });
});




