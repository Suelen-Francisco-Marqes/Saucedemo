import Menu from '../pages/menu'
import Login from "../pages/login"


describe('Menu', () =>{

    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCredenciaisValidas()
    })

    it('deve abrir o menu lateral', () => {
        Menu.clicarMenulateral()
    })

    it('eve exibir todos os itens do menu lateral', () => {
        Menu.clicarMenulateral()
        Menu.clicarEmTodosOsItens()
        
    })

    it('deve retornar para a listagem de produtos', () =>{
        Menu.clicarNoProduto()
        Menu.clicarMenulateral()
        Menu.ExibirTodosItensDoMenu()
    })

    it('deve acessar a página Sobre', () =>{
        Menu.clicarMenulateral()
        Menu.clicarEmSobre()
    })

    it('deve realizar logout do site', () =>{
        Menu.clicarMenulateral()
        Menu.clicarEmSair()
    })
    

})