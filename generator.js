// Code that generators the random lorem ipsum text

// Create a new lorem ipsum generator variable
const loremIpsum = new GenerateNewText();

// Constructor function creating the GenerateNewText object
function GenerateNewText() {
  // Add property to the object
  this.words = ["technology", "apple", "samsung", "nokia", "computer", "macbook", "ios", "android", "iphone", "galaxy", "airpods", "apple watch", "magic mouse", "google", "amazon", "aws", "wordpress", "node", "angular", "framework", "css", "html", "javascript", "sass", "treehouse", "code academy", "coding"];
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
  // Convert array into string
  sentence = sentence.join(" ") + ". ";
  sentence = sentence.replace(sentence.charAt(0), sentence.charAt(0).toUpperCase());
  return sentence;
}

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

GenerateNewText.prototype.getAllParagraphs = function() {
  let allParagraphs = [];
  // Make total number of paragraphs between 3 and 5
  let allParagraphsLength = Math.floor(Math.random() * 3) + 3
  while (allParagraphs.length < allParagraphsLength) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  // allParagraphs = allParagraphs.join("\n\n");
  // return allParagraphs;
  return paragraphHTML;
}

loremIpsum.getAllParagraphs();

module.exports.loremIpsum = loremIpsum;
