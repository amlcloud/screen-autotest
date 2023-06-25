const { resolve } = require("path");
require('cypress-xpath');
const { LoginPage } = require("../pages/loginPage")

// <reference types="cypress" />
///reference types = 'cypress-xpath'

describe('Flutter application Tests', () => {
    const loginPage = new LoginPage();
    // })
    it('Search tab functionality',  ()=>{
        loginPage.clickLoginanonymous()
        // verify the Sanction Search is available
        cy.get("[aria-label='Sanction Search']").should('exist')
        cy.get('flt-semantics input').type('Hello, AML Cloud') 
        cy.get('flt-semantics[aria-label="Search"]').click()
        cy.wait(10000);
        cy.get('flt-semantics[aria-label*="AML"]').click();
    }) 
    it('Verify the error message if search item characters less than five characters', ()=>{
        cy.visit("https://screen.amlcloud.io/#/search")
        // negative scenario----->
        cy.wait(10000); 
        cy.get('flt-semantics-placeholder').first().click({ force: true });
        cy.get('flt-semantics input').type('ABC') 
        cy.get('flt-semantics[aria-label="Search"]').click()
        cy.wait(10000); 
        cy.get('#ftl-announcement-assertive').invoke('text').should('eq', 'Please input 5 or more characters') 
    })

    it('List tab functionalisty', () =>{
        cy.visit("https://screen.amlcloud.io/#/lists")
        cy.wait(10000); 
        cy.get('flt-semantics-placeholder').first().click({ force: true });
        cy.get('flt-scene-host').click({ force: true });
        cy.wait(10000); 
        cy.get('#flt-semantic-node-6').should(($element) => {
            const ariaLabel = $element.attr('aria-label');
            expect(ariaLabel).to.include('BIS');
          });
          cy.get('#flt-semantic-node-6').click()
    })

  }) 