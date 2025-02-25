/// <reference types="Cypress" />
import testV2Page from '../../PageObjects/testV2Page'

describe('8020REI Test Suite', function() {
    //The code within the before block runs before each test (it blocks)
    beforeEach(function(){
        cy.fixture('testV2Data').then(function(data){
            this.data = data
            this.testV2Page = new testV2Page()
            //Navigate to the target page and click on Run
            cy.visit(this.data.homePage)
            this.testV2Page.run(this.data.runButton)
        })
    })

    it('char1', function() {
        const charData = this.data // Pass all the data
        const testPageFunctions = this.testV2Page // Pass the test page functions
        
        const charPrefix = 'char1' // Specify the character prefix
        cy.verifyCharacterDetails(charData, testPageFunctions, charPrefix); // Call the custom command with parameters
    })

    it('char2', function() {
        const charData = this.data // Pass all the data
        const testPageFunctions = this.testV2Page // Pass the test page functions
        
        const charPrefix = 'char2' // Specify the character prefix
        cy.verifyCharacterDetails(charData, testPageFunctions, charPrefix); // Call the custom command with parameters
    })

    it('char3', function() {
        const charData = this.data // Pass all the data
        const testPageFunctions = this.testV2Page // Pass the test page functions
        
        const charPrefix = 'char3' // Specify the character prefix
        cy.verifyCharacterDetails(charData, testPageFunctions, charPrefix); // Call the custom command with parameters
    })
    
})

