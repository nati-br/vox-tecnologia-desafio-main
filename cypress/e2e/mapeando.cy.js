describe('Adicionar itens na minha lista de toDo', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it.skip('Login valido',() => {
        cy.get('input[id="user-name"]').type('standard_user');
        cy.get('input[id="password"]').type('secret_sauce');
        cy.get('input[id="login-button"]').click();
        //verificando se o login foi bem-sucecido 
        cy.get('.product_label')
      .should('contain', 'Products');
    })

    it.skip('Login invalido',() => {
        cy.get('input[id="user-name"]').type('dado errado');
        cy.get('input[id="password"]').type('tudo errado');
        cy.get('input[id="login-button"]').click();
        cy.get('[data-test="error"]')
      .should('contain', 'Epic sadface: Username and password do not match any user in this service');
    })

    it.skip('Login valido',() => {
        cy.get('input[id="user-name"]').type('standard_user');
        cy.get('input[id="password"]').type('secret_sauce');
        cy.get('input[id="login-button"]').click();
        // verificar a lista de produtos
        cy.get('.inventory_item_name')
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
    })

    it.skip('adicionando ao carrinho',() => {
        cy.get('input[id="user-name"]').type('standard_user');
        cy.get('input[id="password"]').type('secret_sauce');
        cy.get('input[id="login-button"]').click();
        // como todos os itens tem o mesmo endereço no botão
        // "add to cart" então precisei identificar pelo id 
        cy.get('#item_1_title_link')
      .parents('.inventory_item')
      .find('.btn_primary.btn_inventory')
      .click();

      cy.get('#item_4_title_link')
      .parents('.inventory_item')
      .find('.btn_primary.btn_inventory')
      .click();

      cy.get('#item_3_title_link')
      .parents('.inventory_item')
      .find('.btn_primary.btn_inventory')
      .click();
      //verificando se a quantidade de produtos no carrinho é correta 
      cy.get('.shopping_cart_badge')
      .should('have.text', '3');

    })

    it('remover carrinho',() => {
        cy.get('input[id="user-name"]').type('standard_user');
        cy.get('input[id="password"]').type('secret_sauce');
        cy.get('input[id="login-button"]').click();
        // como todos os itens tem o mesmo endereço no botão
        // "add to cart" então precisei identificar pelo id 
        cy.get('#item_1_title_link')
      .parents('.inventory_item')
      .find('.btn_primary.btn_inventory')
      .click();

      cy.get('#item_4_title_link')
      .parents('.inventory_item')
      .find('.btn_primary.btn_inventory')
      .click();

      cy.get('#item_3_title_link')
      .parents('.inventory_item')
      .find('.btn_primary.btn_inventory')
      .click();
      //verificando se a quantidade de produtos no carrinho é correta 
      cy.get('.shopping_cart_badge')
      .should('have.text', '3');

      cy.get('.shopping_cart_link').click();
        // Verifica se a URL mudou para /cart.html
     cy.url().should('include', '/cart.html');

     cy.get('#item_4_title_link')
     .parents('.cart_item') // Encontra o elemento pai que contém o botão de remoção
     .find('.btn_secondary.cart_button') // Seleciona o botão de remoção
     .click(); // Clica no botão de remoção
     cy.wait(5000); 
     
    })

    it.skip('finalizando as compras',() => {
        cy.get('input[id="user-name"]').type('standard_user');
        cy.get('input[id="password"]').type('secret_sauce');
        cy.get('input[id="login-button"]').click();
        // como todos os itens tem o mesmo endereço no botão
        // "add to cart" então precisei identificar pelo id 
        cy.get('#item_1_title_link')
      .parents('.inventory_item')
      .find('.btn_primary.btn_inventory')
      .click();

      cy.get('#item_4_title_link')
      .parents('.inventory_item')
      .find('.btn_primary.btn_inventory')
      .click();

      cy.get('#item_3_title_link')
      .parents('.inventory_item')
      .find('.btn_primary.btn_inventory')
      .click();
      //verificando se a quantidade de produtos no carrinho é correta 
      cy.get('.shopping_cart_badge')
      .should('have.text', '3');

      cy.get('.shopping_cart_link').click();
        // Verifica se a URL mudou para /cart.html
     cy.url().should('include', '/cart.html');
     cy.get('a[class="btn_action checkout_button"]').click();
     cy.get('input[id="first-name"').type('Jose')
     cy.get('input[id="last-name"').type('Cuervo')
     cy.get('input[id="postal-code"').type('53370-198')
     cy.get('input[class="btn_primary cart_button"').click();
     //validando se estamos na pagina de checkout
     cy.get('.subheader')
     .should('have.text', 'Checkout: Overview');
    
     cy.get('a[class="btn_action cart_button"').click()
       cy.get('h2[class="complete-header"').should('have.text', 'THANK YOU FOR YOUR ORDER');
    })

 
})
