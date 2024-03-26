import urls from '../../urls';
const {locators} = require('../../locators/locatorsAuth')
const {datatestNegative, datatestPositive} = require('../../datatest/dataTestAuth')

class LoginPage {
    constructor(){
        this.positiveEmail = datatestPositive.email
        this.positivePassword = datatestPositive.password
        this.negativeEmail = datatestNegative.email
        this.negativePassword = datatestNegative.password 
        this.locatorEmail = locators.input_email
        this.locatorPassword = locators.input_password
    }

    async fillEmail(email) {
        cy.xpath(this.locatorEmail).type(email).should('have.value', email);
    }

    async fillPassword(password) {
        cy.xpath(this.locatorPassword).type(password).should('have.value', password);
    }

    async assertPositive() {
        cy.xpath('//h3[text()="kasirAja"]').should('be.visible');
        cy.url().should('contain', urls.dashboardUrl);
    }

    async assertNegative() {
        cy.xpath('//div[@role="alert" and text()="Kredensial yang Anda berikan salah"]')
            .should('be.visible');
        cy.url().should('contain', urls.loginUrl);
    }

    async clickLoginButton() {
        cy.xpath(locators.btn_login).click();
    }

    async performLogin(email, password) {
        this.fillEmail(email);
        this.fillPassword(password);
        this.clickLoginButton();
    }

    async performPositiveLogin() {
        this.performLogin(this.positiveEmail, this.positivePassword);
        await this.assertPositive();
    }

    async performNegativeLogin() {
        await this.performLogin(this.negativeEmail, this.negativePassword);
        this.assertNegative();
    }

}

module.exports = new LoginPage()