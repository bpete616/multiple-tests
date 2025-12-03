import { expect } from '@wdio/globals'
import CartPage from '../pageobjects/cart.page.js'
import LoginPage from '../pageobjects/login.page.js'
import MenuPage from '../pageobjects/menu.page.js'



describe('Menu Test Demo', () => {
        beforeEach (async () => {
           await LoginPage.loginSuccessful('standard_user', 'secret_sauce');
            
        })

    it('All Items button navigates to correct page', async () => {   
        await MenuPage.allItems();
        
    })

        it('About button should navigate to Sauce Labs', async () => {
        await MenuPage.about();
    })


        it('should logout user', async () => {
        await MenuPage.logout();

        })
       

        it('Reset button & All Items clears out cart icon & Your Cart', async () => {
        await CartPage.addToCartAndGetProduct();
        await MenuPage.reset();
     

    })

})

