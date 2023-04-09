const loginActions = require('../actions/loginActions');
const checkoutActions = require('../actions/checkoutActions')

describe('OWASP JUICE SHOP AUTOMATION STARTED======>', () => {
    
    it("Should successfully login with valid user", async()=>{
        await loginActions.login();
    })

    it("Should successfully add to busket and  add address", async()=>{
        await checkoutActions.checkoutThenAddAdress();
    })

});