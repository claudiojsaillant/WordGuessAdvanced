var wordData = require('./Word.js');
var inquirer = require('inquirer');

var myWord;
var gameObject = {
    actualString: '',
    currentWord: '',
    wordsUsed: [],
    chances: 10,
    canUse: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    randomWord: function () {
        var wordArray = ['jurassic park', 'disco']
        this.currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
        return this.currentWord
    },
    askUser: function () {
        inquirer.prompt([
            {
                type: "input",
                message: "Guess a letter!",
                name: "answer"
            }
        ]).then(function (user) {

            if (user.answer != undefined && user.answer.length === 1 && gameObject.canUse.includes(user.answer)) {
                if(gameObject.wordsUsed.includes(user.answer)){
                    console.log('Make sure you havent use this word!');
                    return gameObject.askUser();
                }
                gameObject.wordsUsed.push(user.answer);
                newString = myWord.renderWord(myWord.letterObjArray, user.answer);
                if (newString === gameObject.currentWord) {
                    console.log('You won! The word is: ' + gameObject.currentWord);
                    return game();
                }
                if (gameObject.actualString === newString) {
                    gameObject.chances--;
                    if (gameObject.chances <= 0) {
                        console.log('You lost');
                        return game();
                    }
                    console.log('Chances: ', gameObject.chances);
                    console.log(newString.split("").join(' '))

                }
                else {
                    console.log('You guessed a word!');
                    console.log(newString.split("").join(' '))
                }
                gameObject.askUser();
                gameObject.actualString = newString
            } 
            else if(user.answer === 'quit'){
                console.log("Thanks for playing")
                return "";
            }
            else {
                console.log('Make sure your input is just a character.')
                gameObject.askUser();
            }
        })
    }
}

function game() {

    myWord = new wordData.wordConstructor(gameObject.randomWord());
    gameObject.actualString = myWord.renderWord(myWord.letterObjArray, ' ');
    console.log(gameObject.actualString.split("").join(' '));
    gameObject.chances = 10;
    gameObject.wordsUsed = [];
    gameObject.askUser();

}

game();




