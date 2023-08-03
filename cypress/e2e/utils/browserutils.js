
export class BrowserUtils {
    constructor() {
       // Call the super constructor of the base class
        // Other code specific to the derived class
      }

    clickonElement(locator, timeOut) {
        timeOut = timeOut!=undefined? timeOut: 0
        cy.get(locator, { timeout: 5000 }).click()
    }

    forceClickOnElement(locator, timeOut) {
        timeOut = timeOut!=undefined? timeOut: 0
        cy.get(locator, { timeout: 5000 }).first().click({ force: true });
    }

    typeInputText(locator, locatorValue, timeOut) {
        timeOut = timeOut!=undefined? timeOut: 0
        cy.get(locator).type(locatorValue,  { delay: timeOut}) 
    }

    waitUntilElementIsDisplayed(locator) {
    }

    waitForTimeOut(timeOut) {
        cy.wait(timeOut)
    }

    getElementtext(element){
        return cy.get(element).invoke('text')
    }

    assertEqual(actualText, expectedText){
        actualText.should('eq', expectedText)
    }

    assertInclude(actualText, expectedSubString) {
        expect(actualText).to.include(expectedSubString);
    }

    isElementDisabled(element, message = '') {
        // Assert that the element is disabled
        // cy.get(element).should('be.disabled')
        // cy.get(element).should('have.attr', 'disabled');

    }

    isElementVisible(element, message='') {
        cy.get(element).should('be.visible', message);
    }

    isElementExist(element) {
        cy.get(element).should('exist', 'Element is not existed')
    }

    waitForDocumentExist() {
        cy.document().should('exist'); 
    }

    navigateToPage(tabName) {
        cy.visit(`${Cypress.config('baseUrl')}/#/${tabName}`)
        this.waitForDocumentExist()
        this.waitForTimeOut(15000)
    }

    getAtrributeValue(element, attributeValue) {
        let actualValue = null
        cy.get(element).invoke('attr', attributeValue).then((value) => {
            actualValue = value
          });
          return actualValue
    }

}
