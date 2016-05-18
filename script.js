
var words = ["tutorial", "glucose", "lament", "line", "frousier", 
"syncopation", "doubtful", "specious", "rumbler", "indefinitely", 
"tourist", "vacant", "veneer", "disappoint", "glossary", 
"friction", "illusion", "giberish", "melancholy", "yawn", 
"carnage", "spherical", "bustier", "granular", "extinguish", 
"gallery", "herbivore", "buoy", "comical", "soldarity", 
"terrain", "sequin", "maritime", "primate", "erudite", 
"calculator", "boiling", "renaissance", "light", "dissolve", 
"squeegee", "dishwasher", "pumpkin", "polygon", "illuminate", 
"microcoscope", "warehouse", "millennia", "rural", "moustache",
"pirate", "dessert", "sleuth", "risotto", "magnesium", 
"kitten", "unicorn", "diamond", "medieval", "sluggish",
"rugged", "denim", "flowers", "flabbergast", "burlesque", 
"famous", "marshmallow", "comical", "distinct", "horseshoe",
"raisin", "gargoyle", "bacon", "onomatopoeia", "mythical", 
"nincompoop", "engineer", "ticklish", "blimp", "carnival", 
"tornado", "blizzard", "geology", "padlock", "nimble",
"cyanide", "rookie", "reservoir", "solicit", "effervescent",
"drizzle", "masterful", "cherub", "cherokee", "swatch", 
"corrupt", "masquerade", "epidermis", "squash", "princess"]


var randomIndex = words[Math.floor(Math.random()*words.length-1)]; //selects a random word from the array
var wordChars = randomIndex.split(""); //makes each selected word into an array of characters
var playerGuess = []; //will push user input to this array

function selectWord(msg){
	document.querySelector(".wordDiv").textContent = msg;
}

selectWord(wordChars)


function playerGuess(){
$(document).on("keyup", function(event){
	var characterCode = event.which; // determine the character code the user pressed
	var letterInput = String.fromCharCode(characterCode).toLowerCase() // converting character code to string
	console.log("user entered:", letterInput);
 	for (var i = 0; i < wordChars.length; i++) {
		if (letterInput === wordChars[i]){ // is the usr input included in the word?
			console.log("right")
		} else {
			console.log("wrong")
		}
	};
 })
};

function createBoard(){
	for (i = 0; i < wordChars.length; i++){
		$(document).$OuterDiv = $("<div></div>").addClass("board").append($("#wordDiv"))
	};
};


// alternate option fo accessing each letter
// for (var i = 0; i < randomIndex.length; i++) {
//     console.log(randomIndex.charAt(i));
// }



 $("#myButton").on("click", function(){
	location.reload();
});



 // X get input from keyboard
//give it a value
//grey out corresponding letter
//make word appear, but hidden w/ lines or boxes
//make typed value connect w/ array of characters
//make typed value appear on page OR give hangman parts OR alert "not a letter"
//
//


  
  