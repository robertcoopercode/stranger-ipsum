// Code that generators the random lorum ipsum text

// Create a new lorem ipsum generator variable
const loremIpsum = new GenerateNewText();

// Constructor function creating the GenerateNewText object prototype
function GenerateNewText() {
  // Add new properties to the prototype
  this.words = ["lorem", "ipsum", "robert", "created", "this", "apple", "airpods", "apple watch", "ios", "samsung"];
}

GenerateNewText.prototype.getRandomWord = function() {
  let randomWord = this.words[Math.floor(Math.random() * this.words.length)]
	return randomWord;
}

console.log(loremIpsum.getRandomWord());
