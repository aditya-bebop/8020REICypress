class testV2Page{

    run(runButton){cy.get("#promptToRun").contains(runButton).click()}

    char1Name(){return cy.get(".w-full")}
    char1DetalleGender(){return cy.get("p:contains('Gender:')")}
    char1DetalleSpecie(){return cy.get("p:contains('Specie:')")}
    char1DetalleStatus(){return cy.get("p:contains('Status:')")}
    char1Image(){return cy.get('img[src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"]')
    }
    char1Ver(){return cy.get("a[href='/character/1']")}
    char1DetalleName(){return cy.get("h1:contains('Rick Sanchez')")}
    char1DetalleHome(){return cy.get("a:contains('Home')")}
    char1AddButton(){return cy.get("a:contains('Add')")}
    char1TopButton(){return cy.get("button:contains('Top')")}

    char2Name(){return cy.get(".w-full")}
    char2DetalleGender(){return cy.get("p:contains('Gender:')")}
    char2DetalleSpecie(){return cy.get("p:contains('Specie:')")}
    char2DetalleStatus(){return cy.get("p:contains('Status:')")}
    char2Image(){return cy.get('img[src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"]')}
    char2Ver(){return cy.get("a[href='/character/2']")}
    char2DetalleName(){return cy.get("h1:contains('Morty Smith')")}
    char2DetalleHome(){return cy.get("a:contains('Home')")}
    char2AddButton(){return cy.get("a:contains('Add')")}
    char2TopButton(){return cy.get("button:contains('Top')")}
    char3Name(){return cy.get(".w-full")}
    char3DetalleGender(){return cy.get("p:contains('Gender:')")}
    char3DetalleSpecie(){return cy.get("p:contains('Specie:')")}
    char3DetalleStatus(){return cy.get("p:contains('Status:')")}
    char3Image(){return cy.get('img[src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"]')}
    char3Ver(){return cy.get("a[href='/character/3']")}
    char3DetalleName(){return cy.get("h1:contains('Summer Smith')")}
    char3DetalleHome(){return cy.get("a:contains('Home')")}
    char3AddButton(){return cy.get("a:contains('Add')")}
    char3TopButton(){return cy.get("button:contains('Top')")}
   
}
export default testV2Page;
