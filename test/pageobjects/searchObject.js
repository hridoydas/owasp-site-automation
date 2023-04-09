class SearchObjects{

    get searchIcon(){
        return $("//mat-icon[contains(.,'search')]");
    }

    get searchInputField(){
        return $("//input[@id='mat-input-0']");
    }

    get itemCard(){
        return $("(//div[@class='mat-tooltip-trigger product'])[3]");
    }
}

module.exports = new SearchObjects();