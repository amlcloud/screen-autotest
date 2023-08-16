const { resolve } = require("path");
require('cypress-xpath');
const { LoginNewPage } = require("../../pages/loginPage")
// <reference types="cypress" />
///reference types = 'cypress-xpath'
describe('AML Login Tests', () => {
    const loginPage = new LoginNewPage();
    let isInitialized = false;
    before(() => {
        if (!isInitialized) {
            // Code to run before the first test
            // This block will only execute once
            cy.log('Executing beforeAll...');
            loginPage.navigateToAMLCloud()
            loginPage.clickOnSematicsPlaceHolder()
            loginPage.verifyLoginPageExist()
            loginPage.clickLoginanonymous()
            // Additional setup or initialization logic
            isInitialized = true;
        }
    });

    it('verify Login in Anonymous', () => {
        loginPage.verifyTitleOfAMlCloudPage("Sanctions Screener")
        // loginPage.verifyAMlCloudURL('amlcloud')
        loginPage.clickOnSematicsPlaceHolder()
        loginPage.verifyLoginPageExist()
        loginPage.clickLoginanonymous()
    })
})