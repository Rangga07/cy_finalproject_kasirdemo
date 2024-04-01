const Utilities = require('../../support/pages/utils/urlUtils')
const LoginPage = require('../../support/pages/auth/loginPage')
const ProdukPage = require('../../support/pages/toko/produkPage')

describe('User should be able to delete product', () => {
    it('delete product', () => {
        Utilities.openWebsite();
        LoginPage.performPositiveLogin();
        ProdukPage.clickProdukButton();
        ProdukPage.performDeleteProdukAll();
    })
})