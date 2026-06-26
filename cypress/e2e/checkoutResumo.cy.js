import Login from '../pages/login'
import Checkout from "../pages/checkout"
import Inventory from "../pages/inventory"
import Header from "../pages/header"
import Cart from "../pages/cart"
import CheckoutResumo from '../pages/checkoutResumo'
import { DATA } from '../support/data'
import inventory from '../pages/inventory'


describe('CheckoutResumo', () => {

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

    it('Validar produto no resumo', () => {
        CheckoutResumo.validarNomeProduto()
    })

    it('validarQuantidadeProduto', () => {
        CheckoutResumo.validarNomeProduto()
    })

    it('Validar o total', () => {
        CheckoutResumo.validarTotal()
    })

    it('Cancelar resumo volta para o inventário', () => {
        CheckoutResumo.cancelar()

        Inventory.validarAcessoAPagina()
    })

    it('Finalizar compra com sucesso', () => {
        CheckoutResumo.finalizarCompra()
        Checkout.validarSucesso()  // ← reutiliza o que já existe!
    })
})