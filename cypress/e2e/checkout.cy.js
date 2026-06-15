import Login from '../pages/login'
import Checkout from "../pages/checkout"
import Inventory from "../pages/inventory"
import Header from "../pages/header"
import Cart from "../pages/cart"


describe('checkout', () =>{

    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCredenciaisValidas()
    })

    it('Finalidar compra', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')
        
        Header.navegarParaCarrinho()
        
        Cart.irParaCheckout()

        Checkout.preencherInformacoesValidas()   
        Checkout.continuar()
        Checkout.finalizarCompra()               
        Checkout.validarSucesso()               
    })

    it.only('Nome vazio', () => {
        Inventory.adicionarProduto('Sauce Labs Backpack')
        
        Header.navegarParaCarrinho()
        
        Cart.irParaCheckout()

        Checkout.primeiroNomeVazio()
        Checkout.continuar()
        Checkout.validarNomeCheckout()
    })

})
