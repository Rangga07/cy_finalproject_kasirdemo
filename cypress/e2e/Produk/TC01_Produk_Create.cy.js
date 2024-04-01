const Utilities = require('../../support/pages/utils/urlUtils')
const LoginPage = require('../../support/pages/auth/loginPage')
const ProdukPage = require('../../support/pages/toko/produkPage')

describe('user should be able to create produk', () => {
    it('Create produk test', () => {
        Utilities.openWebsite();
        LoginPage.performPositiveLogin();
        ProdukPage.clickProdukButton();
        ProdukPage.clickTambahButton();
        ProdukPage.performCreateProduk()
    });
})