const { resolve } = require("path");
require('cypress-xpath');
// <reference types="cypress" />
///reference types = 'cypress-xpath'
const { LoginNewPage } = require("../../pages/loginPage")
const { SearchPage } = require("../../pages/searchPage")
const searchData = require("../testData/searchData.json")
describe('AML Search Test cases', () => {
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
            loginPage.verifyLoginPageExist()
            loginPage.clickLoginanonymous()
            // Additional setup or initialization logic
            isInitialized = true;
        }
    });


    it('Enter the valid search item and validates validate entered search item details',  ()=>{
        const searchItem = searchData['searchItem']
        // verify the Sanction Search is available
        searchPage.waitForDocumentExist()
        searchPage.isSanctionSearchExist()
        // entering the valid input
        searchPage.enterTextInSearchField(searchItem)
        searchPage.clickOnSearchButton()
        searchPage.waitForDocumentExist() 
        // validating the search target item
        const targetSearchItem = searchPage.getSearchedTargetItem(searchItem)
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

    it('List tab functionalisty', () =>{
        searchPage.navigateToPage('lists')
        searchPage.waitForDocumentExist()
        searchPage.waitForTimeOut(10000)
        loginPage.clickOnSematicsPlaceHolder()
        searchPage.waitForTimeOut(15000)
        searchPage.clickOnSearchedItem(searchData['listItem'])
    })

    it('List tab functionalisty', () =>{
        searchPage.navigateToPage('lists')
        searchPage.waitForDocumentExist()
        searchPage.waitForTimeOut(10000)
        loginPage.clickOnSematicsPlaceHolder()
        searchPage.waitForTimeOut(15000)
        searchPage.clickOnSearchedItem("mouni")
    })
    
})