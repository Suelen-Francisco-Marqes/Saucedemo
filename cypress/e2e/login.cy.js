import Login from '../pages/login'
import inventory  from '../pages/inventory'


describe('Login', () => {

beforeEach(() => {
    Login.visitarPagina()
})

    it('Realizar login com sucesso', () => {
        Login.preencherCredenciaisValidas()
        inventory.validarAcessoAPagina()
    })

    it('Realizar login invalido', () => {
        Login.preencherCredenciaisInvalidas()      
        Login.validarErroCredenciaisInvalidas()
    })

    it('Realizar login com usuário bloqueado', () => {
        Login.UsuarioBloqueado()
        Login.validarMensagemBloqueado()
    })

    it('Usuário em branco', () => {
        Login.validarPreenchimentoUsuario()      
        Login.validarErroPreenchimentoUsuario()
    })

    it('Senha em branco', () => {
        Login.validarPreenchimentoSenha()      
        Login.validarErroPreenchimentoSenha()
    })

})