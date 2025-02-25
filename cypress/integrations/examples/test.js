/// <reference types="Cypress" />

describe('8020REI Test Suite', function() 
{

it('test1',function() {

//Navigate to the target page
cy.visit("https://vue-aknxx1.stackblitz.io/")
cy.get("#promptToRun").contains("Run this project").click()

//Verify that the image is available
cy.get("img[alt='image of Rick Sanchez']").should("exist")

//Verify that the correct name is present
cy.get(".w-full").contains("Rick Sanchez").should("exist")

//Verify that Ver Detalle button is present and it takes you the the correct page
cy.get("a[href='/character/1']").contains("Ver detalle").should("exist").click()
cy.url().should('eq', 'https://vue-aknxx1.stackblitz.io/character/1')

//Verify that the name, gender, specie and status are correct
cy.get("h1:contains('Rick Sanchez')").should("exist")
cy.get("p:contains('Gender:')").should("include.text", "Male")
cy.get("p:contains('Specie:')").should("include.text", "Human")
cy.get("p:contains('Status:')").should("include.text", "Alive")

//Validate the home button functionality
cy.get("a:contains('Home')").should("exist").click()
cy.url().should('eq', 'https://vue-aknxx1.stackblitz.io/')

//Verify the Add button functionality
cy.get("a:contains('Add')").should("exist").click()
cy.url().should('eq', 'https://vue-aknxx1.stackblitz.io/new') //Since the add page does not have any forms, I have not included any code for verification

//Navigate back to the home page
cy.get("a:contains('Home')").should("exist").click()
cy.url().should('eq', 'https://vue-aknxx1.stackblitz.io/')

//Scroll to a random height which is atleasr 500
cy.window().then((win) => {
    const randomScroll = Math.floor(Math.random() * (win.document.body.scrollHeight - 500)) + 500
    cy.scrollTo(0, randomScroll)
})

//Click and validate that the top button is functioning properly
cy.get("button:contains('Top')").should("exist").click()
cy.window().should('have.property', 'scrollY', 0)

    })
})