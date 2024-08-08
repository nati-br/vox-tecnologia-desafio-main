import carrinho from '../support/pages/Carrinho';
import login from "../support/pages/login";
import checkout from '../support/pages/Checkout';

describe('Preencho os dados ', () => {
    it('Preenchendo os dados do comprador', () => {
        login.acessarHome();
        login.preencherLoginValido();
        carrinho.adicionarItemAoCarrinho();
        carrinho.verificarQuantidadeDeItemNoCarrinho();
        carrinho.clickPaginaDeCarrinho2();
        carrinho.verificarPaginaDeCarrinho2();
        carrinho.clickParaCheckout();
        checkout.preencherDados();
      
    });

    it('Finalizando compra', () => {
        login.acessarHome();
        login.preencherLoginValido();
        carrinho.adicionarItemAoCarrinho();
        carrinho.verificarQuantidadeDeItemNoCarrinho();
        carrinho.clickPaginaDeCarrinho2();
        carrinho.verificarPaginaDeCarrinho2();
        carrinho.clickParaCheckout();
        checkout.preencherDados();
        //validando a compra
        checkout.validarCompra();
    });




})