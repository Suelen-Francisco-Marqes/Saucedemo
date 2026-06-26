import Login from '../pages/login'
import Checkout from '../pages/checkout'
import Inventory from '../pages/inventory'
import Header from '../pages/header'
import Cart from '../pages/cart'
import { DATA } from '../support/data'

describe('Checkout - Preenchimento e Validação de Formulário', () => {

    beforeEach(() => {
        Login.acessarPaginaDeLogin()
        Login.preencherCredenciaisValidas()

        Inventory.adicionarProdutoAoCarrinho(DATA.produto)

        Header.navegarParaCarrinho()

        Cart.iniciarCheckout()
    })

    it('Finalizar a compra com sucesso ao preencher informações válidas', () => {
        Checkout.preencherInformacoesDeEntrega()
        Checkout.avancarParaResumo()
        Checkout.finalizarCompra()
        Checkout.validarConfirmacaoDePedido()
    })

    it('Exibir erro ao tentar avançar com o primeiro nome em branco', () => {
        Checkout.submeterFormularioSemPrimeiroNome()
        Checkout.avancarParaResumo()
        Checkout.validarMensagemDeErroPrimeiroNomeObrigatorio()
    })

    it('Exibir erro ao tentar avançar com o sobrenome em branco', () => {
        Checkout.submeterFormularioSemSobrenome()
        Checkout.avancarParaResumo()
        Checkout.validarMensagemDeErroSobrenomeObrigatorio()
    })

    it('Exibir erro ao tentar avançar com o CEP em branco', () => {
        Checkout.submeterFormularioSemCep()
        Checkout.avancarParaResumo()
        Checkout.validarMensagemDeErroCepObrigatorio()
    })

})