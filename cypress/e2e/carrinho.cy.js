import Login from "../pages/login"
import Inventory from "../pages/inventory"
import Header from "../pages/header"
import Cart from "../pages/cart"

describe('carrinho', () =>{

    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCredenciaisValidas()
    })


    it('Adicionar produto ao carrinho com sucesso', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')
        
        Header.validarQuantidadeCarrinho(1)
        Header.navegarParaCarrinho()

        Cart.validarProdutoPresenteNoCarrinho('Sauce Labs Backpack')
    })

    it('Remover produto do carrinho com sucesso', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')
        Inventory.removerProduto('Sauce Labs Backpack')

        Header.validarQueCarrinhoNaoPossuiItens()     
    })

    it('Verificar quantidade de múltiplos itens no carrinho', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')
        Inventory.adicionarProduto('Sauce Labs Bike Light')

        Header.validarQueCarrinhoPossuiItens()
    })

    it.only('Clicar em para voltar a loja', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')
        
        Header.navegarParaCarrinho()

        Cart.voltarParaLoja()

        Inventory.validarAcessoAPagina()
    })

    it.only('Ir para o checkout', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')

        Header.navegarParaCarrinho()

        Cart.irParaCheckout()
    })
})