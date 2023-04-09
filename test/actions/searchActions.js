const searchObjects = require('../pageobjects/searchObject');
const loginObjects = require('../pageobjects/loginObject');
const chaiExpect = require("chai").expect;

class searchActions{

    async closeWelcomeMessageModal(){
        if (await loginObjects.welcomeMessageCloseButton.isDisplayed()){
            await loginObjects.welcomeMessageCloseButton.click();
        }
        
        else{
            console.log("No welcome message!")
        }
        
    }

    async clickOnSearchIcon(){
        await searchObjects.searchIcon.click();
    }

    async enterItemName(){
        await searchObjects.searchInputField.setValue("apple");
    }

    async pressEnter(){
        await browser.keys("Enter");
        await browser.pause(2000);
    }

    async verifyItemCount(){
        if (await searchObjects.itemCard.isDisplayed()){
            throw new Error('should not show more than 2 items');
        }
        else{
            console.log("Two items are found")
        }
    }

    async verifySearchedItem(){
        for (let i = 1; i<3; i++){
            let dyPath = "(//div[@class='mat-tooltip-trigger product'])" + "["+ i + "]"
            await browser.pause(1000);
            // console.log("dynamic xpath : "+ dyPath);
            // console.log("the text: "+  await $(await dyPath).getText());
            
            if (chaiExpect(await $(await dyPath).getText()).to.include("Apple")){
                console.log("Apple found");
            }

            else if(chaiExpect(await $(await dyPath).getText()).to.include("Banana")){
                throw new Error('should not get banana');
            }
            
        }
    }

    async searchFunction(){
        await this.closeWelcomeMessageModal();
        await this.clickOnSearchIcon();
        await this.enterItemName();
        await this.pressEnter();
        await this.verifyItemCount();
        await this.verifySearchedItem();
    }
}

module.exports = new searchActions();