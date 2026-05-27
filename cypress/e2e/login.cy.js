import Login from '../pages/login'
import inventory  from '../pages/inventory'
import login from '../pages/login'

describe('Login', () => {

beforeEach(() => {
    Login.visitarPagina()
})

    it('Reaslizar login com sucesso', () => {
        Login.preencherCredenciaisValidas()

        inventory.validarAcessoAPagina()
    })

    it('Realizar login invalido', () => {
        login.preencherCredenciaisInvalidas()

        
        login.validarErroCredenciaisInvalidas()
    })
})