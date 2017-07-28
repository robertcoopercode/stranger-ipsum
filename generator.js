// Code that generators the random lorum ipsum text

// Create a new lorem ipsum generator variable
const loremIpsum = new GenerateNewText();

// Constructor function creating the GenerateNewText object prototype
function GenerateNewText() {
  // Add new properties to the prototype
  this.words = ["lorem", "ipsum", "robert", "created", "this", "apple", "airpods", "apple watch", "ios", "samsung"];
}

// Method that generates a random word
GenerateNewText.prototype.getRandomWord = function() {
  let randomWord = this.words[Math.floor(Math.random() * this.words.length)]
	return randomWord;
}

// Method that generates a sentence
GenerateNewText.prototype.getSentence = function() {
  let sentence = [];
  while (sentence.length < 10) {
    sentence.push(this.getRandomWord());
  }
  return sentence;
}

console.log(loremIpsum.getSentence());
