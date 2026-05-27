import Login from "../pages/login"
import Inventory from "../pages/inventory"
import Header from "../pages/header"
import Cart from "../pages/cart"
import header from "../pages/header"

describe('carrinho', () =>{

    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCredenciaisValidas()
    })


    it('Adicionar produto ao carrinho com sucesso', () => {

        Inventory.adicionarProduto('Sauce Labs Backpack')

        cy.screenshot('produto adicionado')
        
        const qtdItensAdicionados = 1
        Inventory.adicionarProduto('Sauce Labs Backpack')

        Header.validarQueCarrinhoPossuiItens(qtdItensAdicionados)
        header.navegarParaCarrinho()

        Cart.validarProdutoPresenteNoCarrinho('Sauce Labs Backpack')
    })

    it('Remover produto do carrinho com sucesso', () => {


        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.get('.shopping_cart_badge').should('be.visible')

        cy.get('[data-test="remove-sauce-labs-backpack"]').click()

        cy.screenshot('produto removido')
    })
})