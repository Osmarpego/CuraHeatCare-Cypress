class LoginPage {
    enterURL() {
     cy.visit(
       "https://katalon-demo-cura.herokuapp.com/"
     );
   }

   selectMakeAppintment(){
    cy.get('#btn-make-appointment').should('be.visible')
    cy.get('#btn-make-appointment').click();
   }

   enterUserName(){
    cy.get('[aria-describedby="demo_username_label"]').invoke("val").as("username")
    cy.get('@username').then(user => {
      cy.get("#txt-username").type(user)
   })
   }

   enterPassword(){
    cy.get('[aria-describedby="demo_password_label"]').invoke("val").as("password")
    cy.get('@password').then(pass => {
      cy.get("#txt-password").type(pass)
   })
   }
    clickLoginButton() {
     cy.get('#btn-login').click();
     return this;
   }

    verifyPageTitle() {
     return cy.contains('Make Appointment').should('be.visible');
   }
 }
 const login = new LoginPage();
 export default login;