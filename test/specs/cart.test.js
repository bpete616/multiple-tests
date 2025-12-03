import { expect } from '@wdio/globals'
import CartPage from '../pageobjects/cart.page.js'
import LoginPage from '../pageobjects/login.page.js'




describe('yourCart Test Demo', () => {
        beforeEach ( async () => {
            await LoginPage.loginSuccessful('standard_user', 'secret_sauce');

        })

    it('Your Cart displays product item', async () => {
        await CartPage.addToCartAndGetProduct();
       
    
    })


    it('Your cart shows no item after removal', async () => {
        await CartPage.remove();
        
       
    })

    it('Continue shopping navigates back to Products', async () => {
        await CartPage.continue();
    })


    it('Product should remain in cart, after hitting continue', async () =>{
        await CartPage.addToCartAndGetProduct();
        await CartPage.continueButton();
    })

    

})
    














