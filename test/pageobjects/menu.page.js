import { browser, expect } from "@wdio/globals";
import PageBase from './sauce.page.js'



class MenuPage extends PageBase {
    
    get inventoryContainer () {return $('#inventory_container');}  
    get cartIcon () {return $('#shopping_cart_container');}
    get yourCartInventory () {return $('#cart_contents_container');}
    get appLogo () {return $('.app_logo');}
    get allItemsBtn () {return $('#inventory_sidebar_link');}
    get aboutBtn () {return $('#about_sidebar_link');}
    get logoutBtn () {return $('#logout_sidebar_link');}
    get resetBtn () {return $('#reset_sidebar_link');}
    get logoutLogo () {return $('.login_logo');}
    get sauceLab () {return $('#__next');}
    get menuBtn () {return $('#react-burger-menu-btn');}

async allItems() {
    await this.cartIcon.waitForDisplayed();
    await this.cartIcon.click();
    await this.menuBtn.waitForDisplayed();
    await this.menuBtn.click();
    await this.allItemsBtn.waitForDisplayed();
    await this.allItemsBtn.click();
    await this.appLogo.waitForDisplayed();
    await expect(this.appLogo).toHaveText('Swag Labs');

}

async menu () {

    await this.menuBtn.waitForDisplayed();
    await this.menuBtn.click();

}

async about () {
    await this.menu();
    await this.aboutBtn.waitForDisplayed();
    await this.aboutBtn.click();
    await browser.switchWindow('https://saucelabs.com/')
    await expect(this.sauceLab).toBeDisplayed();
}

async logout () {
    await this.menu();
    await this.logoutBtn.waitForDisplayed();
    await this.logoutBtn.click();
    await this.logoutLogo.waitForDisplayed();
    await expect(this.logoutLogo).toHaveText('Swag Labs');

}

async reset () {
    await this.menu();
    await this.resetBtn.waitForDisplayed();
    await this.resetBtn.click();
    await this.allItemsBtn.click();
    await this.inventoryContainer.waitForDisplayed();
    await this.cartIcon.waitForDisplayed();
    await this.cartIcon.click();
    await expect(this.yourCartInventory).toBeDisplayed();
    
}

}

export default new MenuPage();