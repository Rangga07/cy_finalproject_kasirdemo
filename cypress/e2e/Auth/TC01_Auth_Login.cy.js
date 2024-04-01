const Utilities = require('../../support/pages/utils/urlUtils')
const LoginPage = require('../../support/pages/auth/loginPage')


describe('User should be able to Login', () => {
    beforeEach(() => {
        Utilities.openWebsite();    
    })
    it('with valid data', () => {
        LoginPage.performPositiveLogin();
    })

    it('with invalid data', () => {
        LoginPage.performNegativeLogin();
    })

})