class checkout {
    preencherDados(){
        cy.get('input[id="first-name"]').type('José');
        cy.get('input[id="last-name"]').type('Cuervo');
        cy.get('input[id="postal-code"]').type('53370-198');
        cy.get('input[class="btn_primary cart_button"]').click();
    }

    validarCompra(){
        cy.get('a[class="btn_action cart_button"').click()
        cy.get('h2[class="complete-header"').should('have.text', 'THANK YOU FOR YOUR ORDER');
    }
}export default new checkout();