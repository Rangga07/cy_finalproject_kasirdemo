const Utilities = require('../../support/pages/utils/urlUtils')
const LoginPage = require('../../support/pages/auth/loginPage')
const KategoriPage = require('../../support/pages/toko/kategoriPage')

describe('User should be able to update categories', ()=> {

    it('Update Categories', () => {
        Utilities.openWebsite();
        LoginPage.performPositiveLogin();
        KategoriPage.clickKategoriButton();
        KategoriPage.performEditAllKategori();
    })
})