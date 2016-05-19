
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
var Guesses = []; //will push user input to this array
var livesCounter = 10

window.onload = initGame();

function initGame(){
	createBoard();
	playerGuess();
	setMessage("You have " + livesCounter + " lives left.")
}
 console.log(wordChars);

function setMessage(msg){
	document.querySelector(".messageDiv").textContent = msg;
}

function setGuesses(){
	document.querySelector(".guessDiv").textContent = Guesses;
}


function playerGuess(){
$(document).on("keyup", function(event){
	var characterCode = event.which; // determine the character code the user pressed
	var letterInput = String.fromCharCode(characterCode).toLowerCase(); // converting character code to string
 	for (var i = 0; i < wordChars.length; i++) {
		if (letterInput === wordChars[i]){ // is the usr input included in the word?
			$("#pos" + i).addClass("show");//if correct letter is typed, it shows up in corresct place(s)
		} else {
			console.log("no")
			// var hangmanLimbs = document.querySelector("#hangman")
			// hangmanLimbs.createElement("div")
			// hangmanLimbs.appendChild;
			};
		};
	setGuesses();
	Guesses.push(letterInput);
	});
};





function createBoard(){
	
	for (i = 0; i < wordChars.length; i++){
		addCell(wordChars[i], i); // iterates through word and calls addCell function
	};
};

function addCell(letter, i){
 var row = document.querySelectorAll("tr"); // selects row within table
 var newCell = document.createElement("td"); // creates a td cell within table that's the length of the word
 newCell.setAttribute("id", 'pos'+i);
 newCell.innerHTML = letter;
 row[0].appendChild(newCell);
}



 $("#myButton").on("click", function(){
	location.reload(); //resets game
});


// 1. Start w/ word invisible but WITH underlines
// 2. IF letter guessed right, make it appear (currently appears blue)
// 3. ELSE IF letter guessed wrong, make a hangman div appear and increment counter
// 4. make guessed letters appear only once in the "you have guessed section"
// 5. end game, set message


  
  