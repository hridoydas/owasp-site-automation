const searchActions = require('../actions/searchActions');

describe('OWASP JUICE SHOP AUTOMATION STARTED======>', () => {
    
    it("Should successfully item and verify", async()=>{
        await searchActions.searchFunction();
    })

});