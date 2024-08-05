/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import makeAppointment from "../../Pages/MakeAppointment/MakeAppointmentPage.cy";


And("fill out the form of appointment", ()=>{
    makeAppointment.checkHospitalReadminision();
    makeAppointment.inputInformation();
    makeAppointment.clickOnBookAppointment()
})


Then("I visulize the confirmation", () => {
    makeAppointment.validateAppointmentConfirmation();
});