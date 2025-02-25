// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('verifyCharacterDetails', function (charData, testPageFunctions, charPrefix) {
    
    // Verify that the image is available
    console.log(charPrefix);

    testPageFunctions[`${charPrefix}Image`]().should("exist")

    // Verify that the correct name is present
    testPageFunctions[`${charPrefix}Name`]().contains(charData[`${charPrefix}Name`]).should("exist")

    // Verify that Ver Detalle button is present and it takes you to the correct page
    testPageFunctions[`${charPrefix}Ver`]().contains('Ver detalle').should("exist").click()
    cy.url().should('eq', charData[`${charPrefix}Url`])

    // Verify that the name, gender, species, and status are correct
    testPageFunctions[`${charPrefix}DetalleName`]().should("exist")
    testPageFunctions[`${charPrefix}DetalleGender`]().should("include.text", charData[`${charPrefix}Gender`])
    testPageFunctions[`${charPrefix}DetalleSpecie`]().should("include.text", charData[`${charPrefix}Specie`])
    testPageFunctions[`${charPrefix}DetalleStatus`]().should("include.text", charData[`${charPrefix}Status`])

    // Validate the home button functionality
    testPageFunctions[`${charPrefix}DetalleHome`]().should("exist").click()
    cy.url().should('eq', charData.homePage)

    // Verify the Add button functionality
    testPageFunctions[`${charPrefix}AddButton`]().should("exist").click()
    cy.url().should('eq', charData.newPage)

    // Navigate back to the home page
    testPageFunctions[`${charPrefix}DetalleHome`]().should("exist").click()
    cy.url().should('eq', charData.homePage)

    // Scroll to a random height which is at least 500
    cy.window().then((win) => {
        const randomScroll = Math.floor(Math.random() * (win.document.body.scrollHeight - 500)) + 500
        cy.scrollTo(0, randomScroll)
    })

    // Click and validate that the top button is functioning properly
    testPageFunctions[`${charPrefix}TopButton`]().should("exist").click()
    cy.window().should('have.property', 'scrollY', 0)
})

//A more readable version of the custom command (the original it block)

// it('char1',function() {

//     //Verify that the image is available
//     this.testV2Page.char1Image().should("exist")

//     //Verify that the correct name is present
//     this.testV2Page.charName().contains(this.data.character1).should("exist")

//     //Verify that Ver Detalle button is present and it takes you the the correct page
//     this.testV2Page.char1Ver().contains(this.data.verDetalle).should("exist").click()
//     cy.url().should('eq', this.data.character1Url)

//     //Verify that the name, gender, specie and status are correct
//     this.testV2Page.char1DetalleName().should("exist")
//     this.testV2Page.charDetalleGender().should("include.text", this.data.character1Gender)
//     this.testV2Page.charDetalleSpecie().should("include.text", this.data.character1Specie)
//     this.testV2Page.charDetalleStatus().should("include.text", this.data.character1Status)

//     //Validate the home button functionality
//     this.testV2Page.detalleHome().should("exist").click()
//     cy.url().should('eq', this.data.homePage)

//     //Verify the Add button functionality
//     this.testV2Page.addButton().should("exist").click()
//     cy.url().should('eq', this.data.newPage) //Since the add page does not have any forms, I have not included any code for verification

//     //Navigate back to the home page
//     this.testV2Page.detalleHome().should("exist").click()
//     cy.url().should('eq', this.data.homePage)

//     //Scroll to a random height which is atleasr 500
//     cy.window().then((win) => {
//         const randomScroll = Math.floor(Math.random() * (win.document.body.scrollHeight - 500)) + 500
//         cy.scrollTo(0, randomScroll)
//     })

//     //Click and validate that the top button is functioning properly
//     this.testV2Page.topButton().should("exist").click()
//     cy.window().should('have.property', 'scrollY', 0)

//     })

//JSON file for the above it block
    // "homePage" : "https://vue-aknxx1.stackblitz.io/",
    // "newPage" : "https://vue-aknxx1.stackblitz.io/new",
    // "runButton" : "Run this project",
    // "verDetalle" : "Ver detalle",
    // "character1Name" : "Rick Sanchez",
    // "character1Url" : "https://vue-aknxx1.stackblitz.io/character/1",
    // "character1Gender" : "Male",
    // "character1Specie" : "Human",
    // "character1Status" : "Alive"

//PageObjects of the it block
    // run(runButton){
    //     cy.get("#promptToRun").contains(runButton).click()
    // }
    // charName(){
    //     return cy.get(".w-full")
    // }
    // charDetalleGender(){
    //     return cy.get("p:contains('Gender:')")
    // }
    // charDetalleSpecie(){
    //     return cy.get("p:contains('Specie:')")
    // }
    // charDetalleStatus(){
    //     return cy.get("p:contains('Status:')")
    // }
    // char1Image(){
    //     return cy.get("img[alt='image of Rick Sanchez']")
    // }
    // char1Ver(){
    //     return cy.get("a[href='/character/1']")
    // }
    // char1DetalleName(){
    //     return cy.get("h1:contains('Rick Sanchez')")
    // }
    // detalleHome(){
    //     return cy.get("a:contains('Home')")
    // }
    // addButton(){
    //     return cy.get("a:contains('Add')")
    // }
    // topButton(){
    //     return cy.get("button:contains('Top')")
    // }