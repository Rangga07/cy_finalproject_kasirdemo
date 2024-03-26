import urls from "../../urls";
const {locators, asserts} = require('../../locators/locatorsGlobal')

class Kategori {

    async clickKategoriButton() {
        cy.xpath(locators.btn_page_kategori).click()
        cy.xpath(asserts.assert_kategori).should('be.visible')
        cy.url().should('contain', urls.categoriesUrl)
    }

    async clickTambahButton(){
        cy.xpath(locators.btn_tambah).click()
        cy.xpath(asserts.assert_kategori_baru).should('be.visible')
        cy.url().should('contain', urls.categoriesCreateUrl)
    }

    async performCreateKategori(){
        cy.fixture("kategori").then((data) => {
            data.forEach((kategori_data) => {
                cy.xpath(locators.input_nama).type(kategori_data.nama);
                cy.xpath(locators.input_deskripsi).type(kategori_data.deskripsi);
                cy.xpath(locators.btn_simpan).click();
                
                cy.xpath(asserts.assert_create_kategori_popup).should('be.visible')
                cy.url().should('contain',urls.categoriesUrl)
                // cy.xpath(`//td[text()="${kategori_data.nama}"]`)
                // cy.xpath(`//td[text()="${kategori_data.deskripsi}"]`)

                this.clickTambahButton();
            })
        })

    }

    async performDeleteAllKategori(){
        cy.fixture("kategori").then((data) => {
            data.forEach((kategori_data) => {
                cy.xpath(`(//td[text()="${kategori_data.nama}"]/parent::tr/td[3]/button)[1]`).click();
                cy.xpath(`(//td[text()="${kategori_data.nama}"]/parent::tr/td[3]/div/div/button[text()="hapus"])[1]`).click();
                cy.xpath(locators.btn_confirm_delete).click();

                cy.xpath(asserts.assert_delete_kategori_popup).should('be.visible')
                cy.url().should('contain', urls.categoriesUrl)

            })
        })
    }

    async performEditAllKategori(){
        cy.fixture("kategori").then((data) => {
            data.forEach((kategori_data) => {
                cy.xpath(`(//td[text()="${kategori_data.nama}"]/parent::tr/td[3]/button)[1]`).click();
                cy.xpath(`(//td[text()="${kategori_data.nama}"]/parent::tr/td[3]/div/div/a[text()="ubah"])[1]`).click();

                cy.xpath(asserts.assert_kategori_ubah).should('be.visible');
                cy.xpath(`//input[@value="${kategori_data.nama}"]`).should('be.visible');
                cy.xpath(`//input[@value="${kategori_data.deskripsi}"]`).should('be.visible');

                cy.xpath(locators.input_nama).type(' edit');
                cy.xpath(locators.input_deskripsi).type(' edit');
                cy.xpath(locators.btn_simpan).click();

            })
        })
    }

} 

module.exports = new Kategori()