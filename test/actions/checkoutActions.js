const checkoutObjects = require("../pageobjects/checkoutObject");

class CheckoutActions{

    country = "Bangladesh";
    name = "Hridoy";
    mobileNumber  = "01920080999";
    zipCode = "1219";
    address = "Banani";
    city = "Dhaka";
    state = "Bangladesh"

    async addItemTOBusket(){
        await checkoutObjects.firstItemAddToBusketButton.click();
    }

    async clickOnBusketButton(){
        await checkoutObjects.busketButton.click();
        await browser.pause(2000)
    }

    async clickOnCheckOutButton(){
        await checkoutObjects.checkoutButton.click();
        await browser.pause(2000);
    }

    async clickOnAddAddressButton(){
        await checkoutObjects.addAddressButton.click();
    }

    async enterCountryName(){
        await checkoutObjects.countryInputField.setValue(this.country);
    }

    async enterName(){
        await checkoutObjects.nameInputField.setValue(this.name);
    }

    async enterMobileNumber(){
        await checkoutObjects.mobileNumberInputField.setValue(this.mobileNumber);
    }

    async enterZipCode(){
        await checkoutObjects.zipCodeInputField.setValue(this.zipCode);
    }

    async enterAdress(){
        await checkoutObjects.addressInputField.setValue(this.address);
    }

    async enterCity(){
        await checkoutObjects.cityInputField.setValue(this.city);
    }

    async enterState(){
        await checkoutObjects.stateInputField.setValue(this.state);
    }

    async clickOnAddressSubmitButton(){
        await checkoutObjects.submitButton.click();
    }

    async checkoutThenAddAdress(){
        await this.addItemTOBusket();
        await this.clickOnBusketButton();
        await this.clickOnCheckOutButton();
        await this.clickOnAddAddressButton();
        await this.enterCountryName();
        await this.enterName();
        await this.enterMobileNumber();
        await this.enterZipCode();
        await this.enterAdress();
        await this.enterCity();
        await this.enterState();
        await this.clickOnAddressSubmitButton();
    }



}
module.exports = new CheckoutActions();