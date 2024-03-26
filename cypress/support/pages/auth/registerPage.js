import urls from "../../urls";
const {locators} = require('../../locators/locatorsAuth')
const {datatestPositive} = require('../../datatest/dataTestAuth')

class RegisterPage {
    constructor(){
        this.namaToko = datatestPositive.namatoko;
        this.email = datatestPositive.email;
        this.password = datatestPositive.password;
        this.locatorNamaToko = locators.input_namatoko;
        this.locatorEmail = locators.input_email;
        this.locatorPassword = locators.input_password;
    }
     
    async openRegisterPage() {
        cy.xpath(locators.link_register_page).click();
        cy.url().should('eq',urls.registerUrl);
    }

    async fillNamaToko(){
        cy.xpath(this.locatorNamaToko).type(this.namaToko);
    }

    async fillEmail(){
        cy.xpath(this.locatorEmail).type(this.email);
    }

    async fillPassword(){
        cy.xpath(this.locatorPassword).type(this.password);
    }

    async clickRegisterButton(){
        cy.xpath(locators.btn_daftar).click();
    }

    async assertPositive(){
        cy.xpath('//div[@role="alert"]//div[text()="Toko berhasil didaftarkan"]').should('be.visible');
        cy.url().should('contain', urls.loginUrl)
    }

    async performRegister(){
        this.openRegisterPage();
        this.fillNamaToko();
        this.fillEmail();
        this.fillPassword();
        this.clickRegisterButton();
        this.assertPositive();
    }

}

module.exports = new RegisterPage()