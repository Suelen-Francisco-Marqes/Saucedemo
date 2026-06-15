import { elements as el  } from "./elements"

class Header {
   validarQuantidadeCarrinho (quantidade){
      cy.get(el.cartBadge)
        .should('be.visible')
        .and('have.text', quantidade,toString())
   }

   navegarParaCarrinho() {
      cy.get(el.cartContainer).click()
   }

   validarQueCarrinhoNaoPossuiItens() {
      cy.get(el.cartBadge)
         .should('not.exist')

      cy.screenshot('produto removido')
   }

   validarQueCarrinhoPossuiItens() {
      cy.get(el.cartBadge)
         .should('exist')
         .and('not.be.empty')
   }

}

export default new Header