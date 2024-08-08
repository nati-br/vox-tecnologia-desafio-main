/// <reference types='cypress'/>
const el = require('../Checkout/elements').ELEMENTS;
class checkout {
    preencherDados(){
        cy.get(el.nome).type('José');
        cy.get(el.sobrenome).type('Cuervo');
        cy.get(el.cep).type('53370-198');
        cy.get(el.btnClick).click();
    }

    validarCompra(){
        cy.get(el.btnComprar).click()
        cy.get(el.validacao).should('have.text', el.msgSucess);
    }
}export default new checkout();