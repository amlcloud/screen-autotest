// <reference types="cypress"/>

declare namespace Cypress {
    interface Chainable {

        findByFltSemanticsAriaLabel(locator:string):Chainable<JQuery>;
    }
  }