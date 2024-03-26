const Utilities = require('../../support/pages/utils/urlUtils')
const LoginPage = require('../../support/pages/auth/loginPage')


describe('User should be able to Login', () => {
    it('with valid data', () => {
        Utilities.openWebsite();    
        LoginPage.performPositiveLogin();
    })

    it('with invalid data', () => {
        Utilities.openWebsite();
        LoginPage.performNegativeLogin();
    })

})