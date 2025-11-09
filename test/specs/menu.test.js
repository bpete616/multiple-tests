import { expect } from '@wdio/globals'
import CartPage from '../pageobjects/cartpage.js'
import LoginPage from '../pageobjects/loginpage.js'
import MenuPage from '../pageobjects/menupage.js'



describe('Menu Test Demo', () => {
    it('All Items button navigates to correct page', async () => {   
        await LoginPage.login();
        await MenuPage.allItems();
        
    })

        it('About button should navigate to Sauce Labs', async () => {
        await LoginPage.login();
        await MenuPage.about();
    })


        it('should logout user', async () => {
        await LoginPage.login();
        await MenuPage.logout();

        })
       
    

        it('Reset button & All Items clears out cart icon & Your Cart', async () => {
        await LoginPage.login();
        await CartPage.addToCartAndGetProduct();
        await MenuPage.reset();
     

    })

})

