
import carrinho from '../support/pages/Carrinho';
import login from "../support/pages/login";

describe('Listando produtos do carrinho ', () => {
    it('listar produtos', () => {
        login.acessarHome();
        login.preencherLoginValido();
        carrinho.verificarListaDeProdutos();
        
    });
})

describe('Adicionando produtos ao carrinho ', () => {
    it('Adicionar produtos', () => {
        login.acessarHome();
        login.preencherLoginValido();
        carrinho.adicionarItemAoCarrinho();
        carrinho.verificarQuantidadeDeItemNoCarrinho()

        
    });
})

describe('Remover produtos do carrinho ', () => {
    it('Remover produtos', () => {
        login.acessarHome();
        login.preencherLoginValido();
        carrinho.adicionarItemAoCarrinho();
        carrinho.verificarQuantidadeDeItemNoCarrinho();
        carrinho.clickPaginaDeCarrinho2();
        carrinho.verificarPaginaDeCarrinho2();
        carrinho.removerItemDoCarrinho();
    });
})
