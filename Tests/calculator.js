let homepage = require('../Pages/homepage');

describe('Demo Calculator tests',function(){

    it('Should add 2 numbers',function(){
        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.sendFirstNumber('2');

        homepage.sendSecondNumber('7');

        homepage.clickGoButton();

        homepage.testResult('9');

        browser.sleep(2000);
    });

});