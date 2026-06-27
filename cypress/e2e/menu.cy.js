import Menu from '../pages/menu'
import Login from "../pages/login"


describe('Menu', () =>{

    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCredenciaisValidas()
    })

    it('Abrir o menu lateral', () => {
        Menu.clicarMenulateral()
    })

    it('Exibir todos os itens do menu lateral', () => {
        Menu.clicarMenulateral()
        Menu.clicarEmTodosOsItens()
        
    })

    it('Retornar para a listagem de produtos', () =>{
        Menu.clicarNoProduto()
        Menu.clicarMenulateral()
        Menu.ExibirTodosItensDoMenu()
    })

    it('Acessar a página Sobre', () =>{
        Menu.clicarMenulateral()
        Menu.clicarEmSobre()
    })

    it('Realizar logout do site', () =>{
        Menu.clicarMenulateral()
        Menu.clicarEmSair()
    })
    

})