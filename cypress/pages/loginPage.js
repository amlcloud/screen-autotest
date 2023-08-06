import { BrowserUtils } from "../e2e/utils/browserutils";

export class LoginPage {

    constructor() {
        this.sematicsPlaceholder = 'flt-semantics-placeholder'
        this.loginButton = '[aria-label="Login"]';
        this.loginAnonymousButton = 'flt-semantics[aria-label="Log in Anonymous"]'
      }  

    clickLoginanonymous() {
        cy.visit("https://screen.amlcloud.io/#/login", { timeout: 30000 })
        // verify the title of the page "Sanctions Screener"
        cy.title().should('eq', "Sanctions Screener")
        cy.get(this.sematicsPlaceholder).first().click({ force: true });
        // verify the loaded URL 
        cy.url().should('include', 'amlcloud') // => true
        // verify the Login page Title
        cy.get(this.loginButton).should('exist')
        cy.get(this.loginAnonymousButton).click({ force: true });
        cy.wait(10000); // waiting for some time 
    }
}

export class LoginNewPage extends BrowserUtils {
    constructor() {
     super(); 
      this.sematicsPlaceholder = 'flt-semantics-placeholder'
      this.loginButton = '[aria-label="Login"]';
      this.loginAnonymousButton = 'flt-semantics[aria-label="Log in Anonymous"]'
    }

    navigateToAMLCloud() {
        // cy.log("baseURL----->",Cypress.config('baseUrl'))
        // cy.visit(`${Cypress.config('baseUrl')}`, { failOnStatusCode: false })
        // Intercept the network request and set the Content-Type header to 'text/html'
        cy.intercept('GET', 'http://localhost:8080', (req) => {
            req.reply((res) => {
            res.headers['content-type'] = 'text/html';
            res.send({}); // You can customize the response body if needed
            });
        })
        this.waitForTimeOut(10000)
        cy.visit(`${Cypress.config('baseUrl')}/#/login`, { failOnStatusCode: false })

        this.waitForDocumentExist()
        this.waitForTimeOut(15000)
    }
    
    clickLogInAnonymous() {
        this.forceClickOnElement(this.loginAnonymousButton)
    }

    // verify the title of the page "Sanctions Screener"
    verifyTitleOfAMlCloudPage(title) {
        cy.title().should('eq', title)
    }

    // verify the loaded URL 
    verifyAMlCloudURL(url) {
        cy.url().should('include', url)
    }

    clickOnSematicsPlaceHolder() {
        this.forceClickOnElement(this.sematicsPlaceholder)
    }

     // verify the Login page Title
    verifyLoginPageExist() {
        this.waitForTimeOut(10000)
        cy.get(this.loginButton).should('exist')
    }
  
    clickLoginanonymous() {
        this.clickLogInAnonymous();
        this.waitForTimeOut(10000)
    }
  }
  