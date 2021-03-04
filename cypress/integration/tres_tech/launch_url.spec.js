describe('Shoudl be launch tres technologyes url', function()
{
    it('Should be open open home page', function(){
        cy.visit('https://dev.staging.trestechnologies.com/login')
        cy.get('#mat-input-0').type('admin')
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        .type('Admin#2021')
        cy.get('#mat-input-2').type('test')
        cy.get('.icon-span').click()
        


        
    })
})