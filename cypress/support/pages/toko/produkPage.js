import urls from "../../urls";
const {locator_produk, asserts} = require('../../locators/locatorsGlobal');

class Produk {

    async clickProdukButton() {
        cy.xpath(locator_produk.btn_page_produk).click();
        cy.xpath(asserts.assert_produk).should('be.visible');
        cy.url().should('contain', urls.productsUrl);
    }

    async clickTambahButton(){
        cy.xpath(locator_produk.btn_tambah).click()
        cy.xpath(asserts.assert_produk_baru).should('be.visible')
        cy.url().should('contain', urls.productsCreateUrl)
    }

    async performCreateProduk(){
        cy.fixture("produk").then((data) => {
            data.forEach((kategori_data) => {
                cy.xpath(locator_produk.input_nama).type(kategori_data.nama);
                cy.xpath(locator_produk.input_deskripsi).type(kategori_data.deskripsi);
                cy.xpath(locator_produk.input_hargabeli).type(kategori_data.harga_beli);
                cy.xpath(locator_produk.input_hargajual).type(kategori_data.harga_jual);
                cy.xpath(locator_produk.input_stok).type(kategori_data.stok);
                cy.xpath(locator_produk.dropdown_kategori).click().should('be.visible',asserts.assert_kategori_dropdown)
                cy.xpath(locator_produk.input_search).type(kategori_data.kategori)
                cy.wait(1000)
                cy.xpath(`//td[text()="${kategori_data.kategori}"]`)
                .should('be.visible')
                .click()
                cy.xpath(locator_produk.dropdown_kategori).should('have.value',kategori_data.kategori)
                cy.xpath(locator_produk.btn_simpan).click();

                this.clickTambahButton();
            });
        })
    }

    async performDeleteProdukAll(){
        cy.fixture("produk").then((data) => {
            data.forEach((kategori_data) => {
                cy.xpath(`(//td[text()="${kategori_data.nama}"]/parent::tr/td[10]/button)[1]`).click()
                cy.xpath(`(//td[text()="${kategori_data.nama}"]/parent::tr/td[10]/div/div/button)[1]`).click()
                cy.xpath(locator_produk.btn_confirm_delete).click();

                cy.xpath(asserts.assert_delete_kategori_popup).should('be.visible')
                cy.url().should('contain',urls.productsUrl)
            })
        })
    }
}

module.exports = new Produk();