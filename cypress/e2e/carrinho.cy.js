import Login from "../pages/login"
import Inventory from "../pages/inventory"
import Header from "../pages/header"
import Cart from "../pages/cart"
import { DATA } from "../support/data"

describe('carrinho', () =>{

    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCredenciaisValidas()

        Inventory.adicionarProduto(DATA.produto)
    })


    it('Adicionar produto ao carrinho com sucesso', () => {        
        Header.validarQuantidadeCarrinho(1)
        Header.navegarParaCarrinho()

        Cart.validarProdutoPresenteNoCarrinho(DATA.produto)
    })

    it('Remover produto do carrinho com sucesso', () => {
        Inventory.removerProduto(DATA.produto)

        Header.validarQueCarrinhoNaoPossuiItens()     
    })

    it('Verificar quantidade de múltiplos itens no carrinho', () => {
        Inventory.adicionarProduto(DATA.segundoProduto)

        Header.validarQueCarrinhoPossuiItens()
    })

    it('Clicar em para voltar a loja', () => {        
        Header.navegarParaCarrinho()

        Cart.voltarParaLoja()

        Inventory.validarAcessoAPagina()
    })

    it('Ir para o checkout', () => {
        Header.navegarParaCarrinho()

        Cart.irParaCheckout()
    })
})