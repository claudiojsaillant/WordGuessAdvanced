function letterConstructor(character) {
    this.character = character
    this.isGuessed = false
    this.renderChar = () => {
        if (this.isGuessed) {
            return this.character;
        }
        else {
            return '_'
        }
    }
    this.checkChar = (char) => {
        if (char === this.character) {
            this.isGuessed = true
        }
    }

}

module.exports = {
    letterConstructor: letterConstructor
  };
