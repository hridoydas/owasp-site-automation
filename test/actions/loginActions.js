const loginObjects = require('../pageobjects/loginObject');

class LoginActions{

    async closeWelcomeMessageModal(){
        await loginObjects.welcomeMessageCloseButton.click();
    }

    async clickOnAccountButton(){
        await loginObjects.accountButton.click();
    }

    async clickOnLoginButtonFromDropdown(){
        await loginObjects.loginButtonFromDropdown.click();
    }

    async enterLoginEmail(){
        await loginObjects.emailInputField.setValue("hridoy.das@yopmail.com");
    }

    async enterLoginPassword(){
        await loginObjects.passwordInputField.setValue("Test@@00");
    }

    async clickOnLoginButton(){
        await loginObjects.loginButton.click();
    }

    // async enterLoginEmail(){
    //     await loginObjects.loginEmail.setValue(excelParse.excelDataSet[0].user_email); 
    // }

    async login(){
        await this.closeWelcomeMessageModal();
        await this.clickOnAccountButton();
        await this.clickOnLoginButtonFromDropdown();
        await this.enterLoginEmail();
        await this.enterLoginPassword();
        await this.clickOnLoginButton();
    }
}

module.exports = new LoginActions();
