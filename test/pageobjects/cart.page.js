import { $$, expect } from '@wdio/globals'
import PageBase from './sauce.page.js'



class CartPage extends PageBase {


    get cartIcon () {return $('#shopping_cart_container');}
    get yourCartInventory () {return $('#cart_contents_container');}
    get removeBtn () {return $('#remove-sauce-labs-backpack');}
    get productName () {return $('.inventory_item_name');}
    get inventoryContainer() {return $('#inventory_container');}
    get menuBtn () {return $('#react-burger-menu-btn');}
    get appLogo () {return $('.app_logo');}
    get indexBadge () {return $('Sho')}


async cart () {

    await this.cartIcon.waitForDisplayed();
    await this.cartIcon.click();
    await this.yourCartInventory.waitForDisplayed();
}

 async addToCartAndGetProduct (index= 0) {

    const button = await $$('//button[text()="Add to cart"]');
    await button[index].click();
    await this.cart();
    await this.productName.waitForDisplayed();
    await expect(this.productName).toHaveText('Sauce Labs Backpack');

}

async remove () {
    await this.removeBtn.waitForDisplayed();
    await this.removeBtn.click();
    await expect(this.yourCartInventory).not.toBeDisplayed();
}


async continueButton() {
    const ContinueBtn = await $('//button[text()="Continue Shopping"]');
    await ContinueBtn.waitForDisplayed();
    await ContinueBtn.click();
    await this.inventoryContainer.waitForDisplayed();
    await this.cart();
    await expect(this.productName).toHaveText('Sauce Labs Backpack')
}


async continue () {
    await this.cart();
    const ContinueBtn = await $('//button[text()="Continue Shopping"]');
    await ContinueBtn.waitForDisplayed();
    await ContinueBtn.click();
    await this.appLogo.waitForDisplayed();
    await expect(this.appLogo).toHaveText('Swag Labs');

}


}

export default new CartPage();