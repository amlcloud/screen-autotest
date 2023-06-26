export class LoginPage {
    clickLoginanonymous() {
        cy.visit("https://screen.amlcloud.io/#/login", { timeout: 30000 })
        // verify the title of the page "Sanctions Screener"
        cy.title().should('eq', "Sanctions Screener")
        cy.get('flt-semantics-placeholder').first().click({ force: true });
        // verify the loaded URL 
        cy.url().should('include', 'amlcloud') // => true
        // verify the Login page Title
        cy.get("[aria-label='Login']").should('exist')
        // clicking on Anonymous button
        cy.get('flt-semantics[aria-label="Log in Anonymous"]').click({ force: true });
        cy.wait(10000); // waiting for some time 
    }
}