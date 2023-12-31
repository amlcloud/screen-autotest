
import { BrowserUtils } from "../e2e/utils/browserutils";

export class SearchPage extends BrowserUtils {
    constructor() {
        super();
        this.searchInputField = 'flt-semantics input'
        this.searchButton = 'flt-semantics[aria-label="Search"]'
        this.errormessage = '#ftl-announcement-assertive'
        this.sanctionSearchLabel = '[aria-label="Sanction Search"]'
        this.searchedItem = function (name) {
            return `flt-semantics[aria-label*="${name}"]`
        }
        this.searchedTargetItem = function () {
            return `flt-semantics[aria-label*="Searched Target"]`
        }
        this.listNames = 'flt-semantics[id*="flt-semantic-node"]'
        this.listLastChangedTime = `flt-semantics[aria-label*="Last"]`
        this.newCaseButton = 'flt-semantics[aria-label="New case"]'
        this.emptyCaseInputField = 'flt-semantics[aria-label="null"]'
        this.draftDropDownIcon = 'flt-semantics[aria-label="Draft"]'
        this.draftDropDownValues = 'flt-semantics[aria-label="Popup menu"] flt-semantics-container flt-semantics'
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

    verifySearchedTargetItem(name) {
        cy.get(this.searchedItem(name)).invoke('attr', 'aria-label').then((actualValue) => {
            expect(actualValue).to.include(name, 'Searched Item is not displayed');
        });
    }

    // Verifies that there is at least one element
    verifyItemsLengthInListTab() {
        cy.get(this.listNames).should((elements) => {
            expect(elements.length).to.be.greaterThan(0)
        });
    }

    isLastChangedTimeIsDisplayed() {
        this.isElementVisible(this.listLastChangedTime)
    }

    clickOnNewCase() {
        this.clickonElement(this.newCaseButton)
    }

    clickOnEmptyCaseBoxField() {
        this.clickonElement(this.emptyCaseInputField)
    }

    clickOnDraftDropDownIcon() {
        this.clickonElement(this.draftDropDownIcon)
        this.waitForTimeOut(5000)
    }

    verifyDraftDropDownValues(expectedCasesDropDownValues) {
        let attributesValues = []
        cy.get(this.draftDropDownValues).each(($element, index, $list) => {
            const ariaLabelValue = $element.attr('aria-label');
            attributesValues.push(ariaLabelValue);
        }).then(() => {
            // This block is executed after the .each() loop is completed
            for (const item of expectedCasesDropDownValues) {
                expect(attributesValues).to.include(item);
            }
        });
    }
}