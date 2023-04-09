class LoginObjects{
    
    get welcomeMessageCloseButton(){
        return $("//button[contains(.,'Dismiss')]");
    }
    
    get accountButton(){
        return $("//button[@id='navbarAccount']");
    }
    
    get loginButtonFromDropdown(){
        return $("//button[@id='navbarLoginButton']");
    }

    get emailInputField(){
        return $("//input[@id='email']");
    }

    get passwordInputField(){
        return $("//input[@id='password']")
    }

    get loginButton(){
        return $("//button[@id='loginButton']")
    }
}

module.exports = new LoginObjects();