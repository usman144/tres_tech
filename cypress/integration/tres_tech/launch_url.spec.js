describe('Shoudl be launch tres technologyes url', function()
{
    it('Should be open open home page', function(){
        cy.visit('https://dev.staging.trestechnologies.com/login')
        cy.get('#mat-input-0').type('admin')
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        .type('Admin#2021')
        cy.get('#mat-input-2').type('test')
   //     cy.get(':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
        cy.get('.icon-span').click()
        cy.wait(1000)
        cy.get('[href="/client-profiles"] > .mat-list-item-content > span').click()
        cy.wait(1000)
        cy.get('.module-head > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.wait(1000)
        cy.get('.form-group > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
        cy.contains('Corporate').click()
        cy.get(':nth-child(2) > div.ng-pristine > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        .type('test')
        cy.wait(1000)
        cy.get(':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()

    //   //  cy.get('#mat-select-value-17 > .mat-select-placeholder').click()
        cy.get('.mat-select-search-inner > .mat-select-search-input').type('barbara Cohen')
        cy.get('#mat-option-30 > .mat-option-text').click()
        cy.get('.mat-select-placeholder').click()
        cy.get(':nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        // .click({force: true})
        // cy.contains('Branch 2').click({force: true})
        // cy.get(':nth-child(6) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        // .type('text')




        
    })
})