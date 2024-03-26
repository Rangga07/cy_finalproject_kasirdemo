const Utilities = require('../../support/pages/utils/urlUtils')
const RegisterPage = require('../../support/pages/auth/registerPage')

describe('User should be able to Register', () => {
    it('with valid data', () => {
        Utilities.openWebsite();
        RegisterPage.performRegister();
    })

})

