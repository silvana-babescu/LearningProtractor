let homepage = function(){

    let firstNumber = element(by.model('first'));

    let secondNumber = element(by.model('second'));

    let buttonGo = element(by.css('[ng-click="doAddition()"]'));

    this.sendFirstNumber = function(first){
        firstNumber.sendKeys(first);
    };

    this.sendSecondNumber = function(second){
        secondNumber.sendKeys(second);
    };

    this.clickGoButton = function(){
        buttonGo.click();
    };
    this.get = function(url){
        browser.get(url);
    };

    this.testResult = function(expectedResult){
        let output = element(by.cssContainingText('.ng-binding',expectedResult));
        expect(output.getText()).toEqual(expectedResult);
    }
   };

   module.exports = new homepage();