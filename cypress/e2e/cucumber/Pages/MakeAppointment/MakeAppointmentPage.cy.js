class MakeAppointmentPage {


   checkHospitalReadminision(){
    cy.get('.checkbox-inline').click()
   }

   inputInformation(date){
    cy.fixture('appointment').then(data=>{
        cy.get('#txt_visit_date').type(data.visitDate)
        cy.get('#txt_comment').type(data.comment, {force: true})
    })
   }

   clickOnBookAppointment(){
    cy.get('#btn-book-appointment').click()
   }

   validateAppointmentConfirmation(){
    cy.contains('Appointment Confirmation').should('be.visible')
   }

 }
 const makeAppointment = new MakeAppointmentPage();
 export default makeAppointment;