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
        cy.get(el.produtos).should('contain', 'Products');
    }

    preencherLoginInvalido(){
        cy.get(el.usuario).type('dado errado');
        cy.get(el.senha).type('tudo errado');
        cy.get(el.btnEntrar).click();
    }
    
    verificarLoginInvalido(){
        cy.get(el.msgError).should('contain', 'Epic sadface: Username and password do not match any user in this service');
    }
}export default new login();