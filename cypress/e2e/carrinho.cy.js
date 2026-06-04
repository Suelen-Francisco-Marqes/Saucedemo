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
        const qtdItensAdicionados = 1
        Inventory.adicionarProduto('Sauce Labs Backpack')

        Header.validarQueCarrinhoPossuiItens(qtdItensAdicionados)
        header.navegarParaCarrinho()

        Cart.validarProdutoPresenteNoCarrinho('Sauce Labs Backpack')
    })

    it('Remover produto do carrinho com sucesso', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')

        Inventory.removerProduto('Sauce Labs Backpack')

        header.validarQueCarrinhoNaoPossuiItens()
      
    })
})