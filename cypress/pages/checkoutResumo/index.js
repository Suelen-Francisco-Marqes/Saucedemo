import { DATA } from "../../support/data"
import { elements as el } from "./elements"

class CheckoutResumo {
    visitarPagina(){
        cy.visit('/')
    }

    validarNomeProduto() {
        cy.get(el.nomeProduto).should('contain.text', DATA.produto)
    }

    
    validarQuantidadeProduto() {
        cy.get(el.quantidadeProduto).should('contain.text', '1')
    }

    validarTotal() {
        cy.get(el.itemTotal).invoke('text').then((itemText) => {
            cy.get(el.tax).invoke('text').then((taxText) => { 
                const item = parseFloat(itemText.replace('Item total: $', ''))
                const tax = parseFloat(taxText.replace('Tax: $', ''))
                const total = (item + tax).toFixed(2)

                cy.get(el.total).should('contain.text', `$${total}`)
            })
        })
    }

    cancelar() {
        cy.get(el.cancelar).click()
    }

    finalizarCompra() {
        cy.get(el.finish).click()
    }
}


export default new CheckoutResumo()