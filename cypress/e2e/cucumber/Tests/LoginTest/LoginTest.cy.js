/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import login from "../../Pages/LoginPage/LoginPage.cy";
Given("I navigate to the Website", () => {
login.enterURL();

});

When("I entered valid credential", () => {
    login.selectMakeAppintment();
    login.enterUserName()
    login.enterPassword()
    });


And("User click on sign in button", () => {
    login.clickLoginButton();
});

Then("Validate the title after login", () => {
login.verifyPageTitle();
});