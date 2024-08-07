import login from "../support/pages/login";


describe('Dado que faço um Login valido', () => {
    it('E preencho as credenciais corretas', () => {
        login.acessarHome();
        login.preencherLoginValido();
        login.verificarLoginValido();
        
    });
 
});

describe('Dado que faço um Login invalido', () => {
    it('E preencho as credenciais incorretas', () => {
        login.acessarHome();
        login.preencherLoginInvalido();
        login.verificarLoginInvalido();
        
    });
});
