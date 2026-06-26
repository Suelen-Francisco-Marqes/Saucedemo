import Login from '../pages/login'
import Checkout from "../pages/checkout"
import Inventory from "../pages/inventory"
import Header from "../pages/header"
import Cart from "../pages/cart"
import { DATA } from '../support/data'

describe('Checkout - Preenchimento e Validação de Formulário', () => {

    beforeEach(() => {
        Login.acessarPaginaDeLogin()
        Login.preencherCredenciaisValidas()

        Inventory.adicionarProduto(DATA.produto)
        
        Header.navegarParaCarrinho()

        Cart.irParaCheckout()
    })

    it('Finalidar compra', () => {
        Checkout.preencherInformacoesValidas()   
        Checkout.continuar()
        Checkout.finalizarCompra()               
        Checkout.validarSucesso()               
    })

    it('Nome vazio', () => {        
        Checkout.primeiroNomeVazio()
        Checkout.continuar()
        Checkout.validarNomeCheckout()
    })

    it('Sobrenome vazio', () => {     
        Checkout.segundoNomeVazio()
        Checkout.continuar()
        Checkout.validarSegundoNomeCheckout()
    })

    it('Validar checkout vazio', () => {
        Checkout.validarCepCheckout()
        Checkout.continuar()
        Checkout.validacaoCep()
    })

})
