/// <reference types="cypress" />


describe('1. The customer bought the product successfully', { failOnNonZeroExit: false }, () => { 

    it('1.1 customer add to cart not click in detail product', function()
    {
      cy.visit('https://www.saucedemo.com')
      // verify page
      cy.title().should('eq','Swag Labs')

      // Input username
      cy.get("#user-name")
      .click({force:true})
      .type('standard_user')

      // Input password
      cy.get("#password")
      .click({force:true})
      .type('secret_sauce')

      // Click login
      cy.get("#login-button")
      .click()

      // verify page
      cy.title().should('eq','Swag Labs')

      // add to cart Sauce Labs Bike Light
      cy.get("#add-to-cart-sauce-labs-bike-light")
      .click()

      // verify add success
      cy.get('#remove-sauce-labs-bike-light').contains('Remove')
        
      // add to cart Sauce Labs Bolt T-Shirt
      cy.get("#add-to-cart-sauce-labs-bolt-t-shirt")
      .click()

      // verify add success
      cy.get('#remove-sauce-labs-bolt-t-shirt').contains('Remove')

      // add to cart Sauce Sauce Labs Onesie
      cy.get("#add-to-cart-sauce-labs-onesie")
      .click()

      // verify add success
      cy.get('#remove-sauce-labs-onesie').contains('Remove')
  
      // Click cart
      cy.get("#shopping_cart_container").click()

      // Verify product Sauce Labs Bike Light
      cy.get("#item_0_title_link").contains("Sauce Labs Bike Light")

      // Verify product cart Sauce Labs Bolt T-Shirt
      cy.get("#item_1_title_link").contains("Sauce Labs Bolt T-Shirt")

      // Verify product Sauce Labs Onesie
      cy.get("#item_2_title_link").contains("Sauce Labs Onesie")

      // Click checkout
      cy.get("#checkout").click()

      // Input address
      cy.get("#first-name").click({force:true})
      .type('Kanisorn')
      cy.get("#last-name").click({force:true})
      .type('Thamniyom')
      cy.get("#postal-code").click({force:true})
      .type('ดอนเมือง สรงประภา กรุงเทพ 10210')

      // Click continue
      cy.get("#continue").click()

      // Verify price
      cy.contains("Item total: $").contains("33.97")
      cy.contains("Tax: $").contains("2.72")
      cy.contains("Total: $").contains("36.69")
      
      // verify checkout complete
      cy.get("#finish").click()
      cy.contains("THANK YOU FOR YOUR ORDER")
      
    })

    it('1.2 customer add to cart and click in detail product', function()
    {
      cy.visit('https://www.saucedemo.com')
      // verify page
      cy.title().should('eq','Swag Labs')

      // Input username
      cy.get("#user-name")
      .click({force:true})
      .type('standard_user')

      // Input password
      cy.get("#password")
      .click({force:true})
      .type('secret_sauce')

      // Click login
      cy.get("#login-button")
      .click()

      // verify page
      cy.title().should('eq','Swag Labs')

      // Click in product Sauce Labs Bike Light
      cy.get("#item_0_title_link")
      .click()
      cy.contains("Sauce Labs Bike Light")

      // add to cart Sauce Labs Bike Light
      cy.get("#add-to-cart-sauce-labs-bike-light")
      .click()

      // verify add success
      cy.get('#remove-sauce-labs-bike-light').contains('Remove')

      // Back to product list
      cy.get("#back-to-products").click()
        
      // Click in product Sauce Labs Bolt T-Shirt
      cy.get("#item_1_title_link")
      .click()
      cy.contains("Sauce Labs Bolt T-Shirt")

      // add to cart Sauce Labs Bolt T-Shirt
      cy.get("#add-to-cart-sauce-labs-bolt-t-shirt")
      .click()

      // verify add success
      cy.get('#remove-sauce-labs-bolt-t-shirt').contains('Remove')

      // Back to product list
      cy.get("#back-to-products").click()

      // Click in product Sauce Labs Onesie
      cy.get("#item_2_title_link")
      .click()
      cy.contains("Sauce Labs Onesie")

      // add to cart Sauce Labs Onesie
      cy.get("#add-to-cart-sauce-labs-onesie")
      .click()

      // verify add success
      cy.get('#remove-sauce-labs-onesie').contains('Remove')
  
      // Click cart
      cy.get("#shopping_cart_container").click()

      // Verify product Sauce Labs Bike Light
      cy.get("#item_0_title_link").contains("Sauce Labs Bike Light")

      // Verify product cart Sauce Labs Bolt T-Shirt
      cy.get("#item_1_title_link").contains("Sauce Labs Bolt T-Shirt")

      // Verify product Sauce Labs Onesie
      cy.get("#item_2_title_link").contains("Sauce Labs Onesie")

      // Click checkout
      cy.get("#checkout").click()

      // Input address
      cy.get("#first-name").click({force:true})
      .type('Kanisorn')
      cy.get("#last-name").click({force:true})
      .type('Thamniyom')
      cy.get("#postal-code").click({force:true})
      .type('ดอนเมือง สรงประภา กรุงเทพ 10210')

      // Click continue
      cy.get("#continue").click()

      // Verify price
      cy.contains("Item total: $").contains("33.97")
      cy.contains("Tax: $").contains("2.72")
      cy.contains("Total: $").contains("36.69")
      
      // verify checkout complete
      cy.get("#finish").click()
      cy.contains("THANK YOU FOR YOUR ORDER")
      
    })
})
