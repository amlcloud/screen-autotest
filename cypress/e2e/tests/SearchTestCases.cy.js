const { resolve } = require("path");
require('cypress-xpath');
// <reference types="cypress" />
///reference types = 'cypress-xpath'
const { LoginNewPage } = require("../../pages/loginPage")
const { SearchPage } = require("../../pages/searchPage")
const searchData = require("../testData/searchData.json")
describe('AML Login Tests', () => {
    const loginPage = new LoginNewPage();
    const searchPage = new SearchPage()
    let isInitialized = false;
    before(() => {
        if (!isInitialized) {
            // Code to run before the first test
            // This block will only execute once
            cy.log('Executing beforeAll...');
            loginPage.navigateToAMLCloud()
            loginPage.clickOnSematicsPlaceHolder()
            loginPage.clickLoginanonymous()
            // Additional setup or initialization logic
            isInitialized = true;
        }
    });


    it('Enter the valid search item and validates validate entered search item details',  ()=>{
        // verify the Sanction Search is available
        searchPage.waitForDocumentExist()
        searchPage.isSanctionSearchExist()
        // entering the valid input
        searchPage.enterTextInSearchField(searchData['searchItem'])
        searchPage.clickOnSearchButton()
        searchPage.clickOnSearchedItem(searchData['searchItem'])
        searchPage.waitForDocumentExist()
        })

    it('Validate the search button is disabled when validation message is triggered', ()=>{
        searchPage.navigateToPage('search')
        searchPage.waitForDocumentExist()
        loginPage.clickOnSematicsPlaceHolder()
        // entering the invalid input
        searchPage.enterTextInSearchField(searchData['invalidSearchInput'])
        searchPage.clickOnSearchButton()
        searchPage.validateErrorMessage('Please input 5 or more characters.')
        searchPage.isSearchButtonIsDisabled()
    })
})