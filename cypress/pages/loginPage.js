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
        // cy.request({
        //     method: 'GET',
        //     url: 'http://localhost:8080',
        //     headers: {
        //       'Connection': 'keep-alive',
        //       'Content-Type': 'text/html',
        //       'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        //       'accept': '*/*',
        //       'accept-encoding': 'gzip, deflate'
        //       // Add more headers as needed
        //     }
        //   }).then((response) => {
        //     // Add assertions or other test logic here
        //     expect(response.status).to.eq(200); // Example assertion
        //   });
        cy.intercept('GET', 'http://localhost:8080/**', (req) => {
      req.headers['Content-Type'] = 'text/html';
    }).as('customContentType');
          
        cy.visit(`${Cypress.config('baseUrl')}/#/login`, { failOnStatusCode: false })
        this.waitForDocumentExist()
        this.waitForTimeOut(15000)
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
  