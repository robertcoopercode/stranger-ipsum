// Code that generators the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function 
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the words property
function GenerateNewText() {
  // Add property to the object
  this.words = ["technology", "apple", "samsung", "nokia", "computer", "macbook", "ios", "android", "iphone", "galaxy", "airpods", "apple watch", "magic mouse", "google", "amazon", "aws", "wordpress", "nodejs", "angular", "framework", "css", "html", "javascript", "sass", "treehouse", "code academy", "coding", "grunt", "react", "gulp", "coffeescript", "typescript", "conferences", "bootcamp", "developer", "front end", "back end", "full stack", "coffee", "office", "remote", "automation", "artificial intelligence", "agile", "scale", "buzzwords", "tech", "facebook"];
}

// Method to the GenerateNewText constructor function that generates a random word
GenerateNewText.prototype.getRandomWord = function() {
  let randomWord = this.words[Math.floor(Math.random() * this.words.length)]
	return randomWord;
}

// Method to the GenerateNewText constructor function that generates a sentence from random words
GenerateNewText.prototype.getSentence = function() {
  let sentence = [];
  // Make the length of the sentence between 8 and 12 words long
  let sentenceLength = Math.floor(Math.random() * 5) + 8
  while (sentence.length < sentenceLength) {
    sentence.push(this.getRandomWord());
  }
  // Convert array into string
  sentence = sentence.join(" ") + ". ";
  sentence = sentence.replace(sentence.charAt(0), sentence.charAt(0).toUpperCase());
  return sentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = [];
  // Make the length of the paragraph between 5 and 8 sentences long
  let paragraphLength = Math.floor(Math.random() * 4) + 5
  while (paragraph.length < paragraphLength) {
    paragraph.push(this.getSentence());
  }
  // Convert array into string
  paragraph = paragraph.join("").replace(/.$/,"");
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports.loremIpsum = loremIpsum;
