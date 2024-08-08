/// <reference types='cypress'/>

const el = require('../Login/elements').ELEMENTS;
class login {
    acessarHome(){
        cy.visit('https://www.saucedemo.com/v1/');
    }

    preencherLoginValido(){
        cy.get(el.usuario).type('standard_user');
        cy.get(el.senha).type('secret_sauce');
        cy.get(el.btnEntrar).click();
    }

    verificarLoginValido(){
        cy.get(el.produtos).should('contain', el.msgProdutosPage);
    }

    preencherLoginInvalido(){
        cy.get(el.usuario).type('dado errado');
        cy.get(el.senha).type('tudo errado');
        cy.get(el.btnEntrar).click();
    }
    
    verificarLoginInvalido(){
        cy.get(el.msgError).should('contain', el.msdErrorTXT);
    }
}export default new login();