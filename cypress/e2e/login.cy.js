import login from "../support/pages/login";


describe('Login valido', () => {
    it('Preenchendo os dados validos', () => {
        login.acessarHome();
        login.preencherLoginValido();
        login.verificarLoginValido();
        
    });
 
});

describe('Login invalido', () => {
    it('Preenchendo as credenciais incorretas', () => {
        login.acessarHome();
        login.preencherLoginInvalido();
        login.verificarLoginInvalido();
        
    });
});
