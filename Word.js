var myData = require('./Letter.js')

var wordConstructor = function (word) {
    this.wordArray = word.split("");
    this.createArray = function (arr) {
        var myarray = [];
        for (i = 0; i < arr.length; i++) {
            myarray.push(new myData.letterConstructor(arr[i]))
        }
        return myarray;
    }
    this.letterObjArray = this.createArray(this.wordArray);
    this.renderWord = function (arr, char) {
        var myWord = ''
        for (i = 0; i < arr.length; i++) {
            arr[i].checkChar(char)
            myWord = myWord + arr[i].renderChar();

        }
        return myWord;
    }
}

module.exports = {
    wordConstructor: wordConstructor
};

