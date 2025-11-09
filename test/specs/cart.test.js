import { expect } from '@wdio/globals'
import CartPage from '../pageobjects/cartpage.js'
import LoginPage from '../pageobjects/loginpage.js'




describe('yourCart Test Demo', () => {
    it.skip('Your Cart displays product item', async () => {
        await LoginPage.login();
        await CartPage.addToCartAndGetProduct();
       
    
    })


    it.skip('Your cart shows no item after removal', async () => {
        await LoginPage.login();
        await CartPage.addToCartAndGetProduct();
        await CartPage.remove();
        
       
    })

    it('Continue shopping navigates back to Products', async () => {
        await LoginPage.login();
        await CartPage.continue();
    })


    it('Product should remain in cart, after hitting continue', async () =>{
        await LoginPage.login();
        await CartPage.addToCartAndGetProduct();
        await CartPage.continueButton();
    })

    

})
    














