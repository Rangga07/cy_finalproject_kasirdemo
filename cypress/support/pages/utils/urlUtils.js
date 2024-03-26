import urls from "../../urls"

class Utils {
    
    async openWebsite() {
        cy.visit(urls.baseUrl, {timeout: 8000})
        cy.url().should('eq', urls.loginUrl)
        cy.title().should('eq','kasirAja')
        cy.xpath("//div[@class='css-1w7v3tn']").should('be.visible')
    }
    
}


module.exports = new Utils()