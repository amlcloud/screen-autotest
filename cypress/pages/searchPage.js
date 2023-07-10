
import { BrowserUtils } from "../e2e/utils/browserutils";

export class SearchPage extends BrowserUtils {
    constructor() {
        super(); 
        this.searchInputField='flt-semantics input'
        this.searchButton='flt-semantics[aria-label="Search"]'
        this.errormessage = '#ftl-announcement-assertive'
        this.sanctionSearchLabel = '[aria-label="Sanction Search"]'
        this. searchedItem = function(name) {
            return `flt-semantics[aria-label*=${name}]`
        }
        this.searchedTargetItem = function() {
            return `flt-semantics[aria-label*="Searched Target"]`
        }
       }

    isSanctionSearchExist() {
         this.isElementExist(this.sanctionSearchLabel)

    }
    enterTextInSearchField(value) {
        this.typeInputText(this.searchInputField, value) 
    }

    clickOnSearchButton() {
        this.clickonElement(this.searchButton)
        this.waitForTimeOut(5000)

    }

    clickOnSearchedItem(name) {
        this.clickonElement(this.searchedItem(name))
        this.waitForTimeOut(5000)
    }

    validateErrorMessage(expectedMessage) {
        const actualErrorMessage = this.getElementtext(this.errormessage)
        this.assertEqual(actualErrorMessage, expectedMessage)
    }

    isSearchButtonIsDisabled() {
        this.isElementDisabled(this.searchButton, 'SearchButton is enabled')
    }

    getSearchedTargetItem(name) {
       return this.getElementtext(this.searchedTargetItem(name))
    }

}