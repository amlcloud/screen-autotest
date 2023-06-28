
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
        cy.get(locator).type(locatorValue) 
    }

    waitUntilElementIsDisplayed(locator) {
    }

    waitForTimeOut(timeOut) {
        cy.wait(timeOut)
    }
}