import Login from "../pages/login"
import inventory from '../pages/inventory'

describe('Filtros', () => {
    beforeEach(() => {
        Login.visitarPagina()
        Login.preencherCredenciaisValidas()

    })

    it('Filtrar por nome A to Z', () => {
        inventory.selecionarFiltro('az')
        inventory.validarOrdemAlfabeticaAZ()
    })

    it('Filtrar por nome Z to A', () => {
        inventory.selecionarFiltro('za')
        inventory.validarOrdemAlfabeticaZA()
    })

    it('Filtrar por preço baixo para alto', () => {
        inventory.selecionarFiltro('lohi')
        inventory.validarOrdemPrecoCrescente()
    })

    it('Filtrar por preço alto para baixo', () => {
        inventory.selecionarFiltro('hilo')
        inventory.validarOrdemPrecoDecrescente()
    })
})