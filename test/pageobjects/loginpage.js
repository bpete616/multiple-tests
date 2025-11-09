import { expect } from '@wdio/globals'
import PageBase from './base.js';
 
class LoginPage extends PageBase {
    get usernameInput () {return $('#user-name');}
    get passwordInput () {return $('#password');}
    get loginBtn () {return $('#login-button');}
    get inventoryContainer() {return $('#inventory_container');}
    get errorMessage () {return $('h3[data-test="error"]');}
    get removeBtn () {return $('#remove-sauce-labs-backpack');}

    

    
    async login() {
       
        await super.open('https://www.saucedemo.com/');
        await this.usernameInput.waitForDisplayed();
        await this.passwordInput.waitForDisplayed();
        await this.usernameInput.setValue('standard_user');
        await this.passwordInput.setValue('secret_sauce'); 
        await this.loginBtn.click();
        await this.inventoryContainer.waitForDisplayed();
        await expect(this.inventoryContainer).toBeDisplayed();
         
        
    }


    }
    
    
   

export default new LoginPage();
