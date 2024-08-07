const el = require('../Carrinho/elements').ELEMENTS;
class carrinho {

    verificarListaDeProdutos(){
        cy.get(el.classeItem)
        .should('contain', 'Sauce Labs Backpack');
        cy.get('.inventory_item_name')
        .should('contain', 'Sauce Labs Bike Light');
        cy.get('.inventory_item_name')
        .should('contain', 'Sauce Labs Bolt T-Shirt');
        cy.get('.inventory_item_name')
        .should('contain', 'Sauce Labs Fleece Jacket');
        cy.get('.inventory_item_name')
        .should('contain', 'Sauce Labs Onesie');
        cy.get('.inventory_item_name')
        .should('contain', 'Test.allTheThings() T-Shirt (Red)');
    }

    adicionarItemAoCarrinho(){
        cy.get('#item_1_title_link')
      .parents(el.classeItemCarrinho)
      .find(el.btnAdicionaraoCarrinho)
      .click();

      cy.get('#item_4_title_link')
      .parents(el.classeItemCarrinho)
      .find(el.btnAdicionaraoCarrinho)
      .click();

      cy.get('#item_3_title_link')
      .parents(el.classeItemCarrinho)
      .find(el.btnAdicionaraoCarrinho)
      .click();
    }

    verificarQuantidadeDeItemNoCarrinho(){
        cy.get('.shopping_cart_badge')
       .should('have.text', '3');
    }

    clickPaginaDeCarrinho2(){
        cy.get('.shopping_cart_link').click();
    }

    verificarPaginaDeCarrinho2(){
        cy.url().should('include', '/cart.html');
    }

    removerItemDoCarrinho(){
        cy.get('#item_4_title_link')
        .parents('.cart_item') 
        .find('.btn_secondary.cart_button') 
        .click(); 
    }

    clickParaCheckout(){
        cy.get('a[class="btn_action checkout_button"]').click();
    }
}export default new carrinho();