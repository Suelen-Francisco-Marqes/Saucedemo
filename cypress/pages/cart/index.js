import { elements as el } from "./elements"

class Cart {
   validarProdutoPresenteNoCarrinho(name) {
      cy.contains(name).should('be.visible')
      cy.screenshot('produto adicionado')
   }

   voltarParaLoja() {
      cy.get(el.continueShopping).click()
   }

   irParaCheckout() {
      cy.get(el.checkout).click()
   }
}

export default new Cart()