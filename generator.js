// Code that generators the random lorum ipsum text

// Create a new lorem ipsum generator variable
const loremIpsum = new GenerateNewText();

// Constructor function creating the GenerateNewText object prototype
function GenerateNewText() {
  // Add new properties to the prototype
  this.words = ["technology", "Apple", "Samsung", "Nokia", "computer", "MacBook", "iOS", "Android", "iPhone", "Galaxy", "AirPods", "Apple Watch", "Magic Mouse", "Google", "Amazon", "AWS", "WordPress", "Node.js", "Angular.js", "Framework", "CSS", "HTML", "JavaScript", "SASS", "Treehouse", "Code Academy", "Coding"];
}

// Method that generates a random word
GenerateNewText.prototype.getRandomWord = function() {
  let randomWord = this.words[Math.floor(Math.random() * this.words.length)]
	return randomWord;
}

// Method that generates a sentence
GenerateNewText.prototype.getSentence = function() {
  let sentence = [];
  // Make the length of the sentence between 8 and 12 words long
  let sentenceLength = Math.floor(Math.random() * 5) + 8
  while (sentence.length < sentenceLength) {
    sentence.push(this.getRandomWord());
  }
  return sentence;
}

console.log(loremIpsum.getSentence().length);
