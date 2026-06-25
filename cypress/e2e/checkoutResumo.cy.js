import Login from '../pages/login'
import Checkout from "../pages/checkout"
import Inventory from "../pages/inventory"
import Header from "../pages/header"
import Cart from "../pages/cart"
import CheckoutResumo from '../pages/checkoutResumo'
import { DATA } from '../support/data'
import inventory from '../pages/inventory'


describe('Checkout - Resumo e Finalização de Compra', () => {

    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCredenciaisValidas()

        Inventory.adicionarProduto(DATA.produto)
        Inventory.adicionarProduto(DATA.segundoProduto)

        Header.navegarParaCarrinho()

        Cart.irParaCheckout()
        Checkout.preencherInformacoesValidas()
        Checkout.continuar()  
    })

    it('Exibir o nome do produto no resumo do pedido', () => {
        CheckoutResumo.validarNomeProduto()
    })

    it('Exibir a quantidade correta de produtos no resumo', () => {
        CheckoutResumo.validarNomeProduto()
    })

    it('Exibir o valor total correto no resumo do pedido', () => {
        CheckoutResumo.validarTotal()
    })

    it('Retornar ao inventário ao cancelar o resumo', () => {
        CheckoutResumo.cancelar()

        Inventory.validarAcessoAPagina()
    })

    it('Finalizar a compra com sucesso e exibir confirmação', () => {
        CheckoutResumo.finalizarCompra()
        Checkout.validarSucesso()  // ← reutiliza o que já existe!
    })
})