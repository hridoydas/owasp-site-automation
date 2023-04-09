class CheckoutObjects{

    get firstItemAddToBusketButton(){
        return $("(//button[contains(.,'Add to Basket')])[1]");
    }

    get busketButton(){
        return $("//button[@aria-label='Show the shopping cart']");
    }

    get checkoutButton(){
        return $("//button[@id='checkoutButton']");
    }

    get addAddressButton(){
        return $("//mat-icon[contains(.,'add')]");
    }

    get countryInputField(){
        return $("//input[contains(@placeholder, 'country')]")
    }

    get nameInputField(){
        return $("//input[contains(@placeholder, 'name')]");
    }

    get mobileNumberInputField(){
        return $("//input[contains(@placeholder, 'number')]");
    }

    get zipCodeInputField(){
        return $("//input[contains(@placeholder, 'ZIP code')]");
    }

    get addressInputField(){
        return $("//textarea[@id='address']");
    }

    get cityInputField(){
        return $("//input[contains(@placeholder, 'city')]");
    }

    get stateInputField(){
        return $("//input[contains(@placeholder, 'state')]");
    }

    get submitButton(){
        return $("//span[contains(.,'Submit')]")
    }
}

module.exports = new CheckoutObjects();