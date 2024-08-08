/// <reference types='cypress'/>

const el = require('../Carrinho/elements').ELEMENTS;
class carrinho {

    verificarListaDeProdutos(){
        cy.get(el.classeItemLista)
        .should('contain', el.listaTxtItem1 );
        cy.get(el.classeItemLista)
        .should('contain',el.listaTxtItem2 );
        cy.get(el.classeItemLista)
        .should('contain',el.listaTxtItem3 );
        cy.get(el.classeItemLista)
        .should('contain',el.listaTxtItem4 );
        cy.get(el.classeItemLista)
        .should('contain',el.listaTxtItem5);
        cy.get(el.classeItemLista)
        .should('contain',el.listaTxtItem6 );
    }

    adicionarItemAoCarrinho(){
        cy.get(el.produto1)
      .parents(el.classeItemCarrinho)
      .find(el.btnAdicionaraoCarrinho)
      .click();

      cy.get(el.produto2)
      .parents(el.classeItemCarrinho)
      .find(el.btnAdicionaraoCarrinho)
      .click();

      cy.get(el.produto3)
      .parents(el.classeItemCarrinho)
      .find(el.btnAdicionaraoCarrinho)
      .click();
    }

    verificarQuantidadeDeItemNoCarrinho(){
        cy.get(el.quantidaDeItem)
       .should('have.text', '3');
    }

    clickPaginaDeCarrinho2(){
        cy.get(el.btnPaginaDeCarrinho2).click();
    }

    verificarPaginaDeCarrinho2(){
        cy.url().should('include', el.link);
    }

    removerItemDoCarrinho(){
        cy.get(el.produto2)
        .parents(el.classeRemoveItem) 
        .find(el.btnRemoverItem) 
        .click(); 
    }

    clickParaCheckout(){
        cy.get(el.btnProximapagina).click();
    }
}export default new carrinho();