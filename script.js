
var words = ["tutorial", "glucose", "lament", "line", "frousier", 
"syncopation", "doubtful", "specious", "rumbler", "indefinitely", 
"tourist", "vacant", "veneer", "disappoint", "glossary", 
"friction", "illusion", "gibberish", "melancholy", "yawn", 
"carnage", "spherical", "bustier", "granular", "extinguish", 
"gallery", "herbivore", "buoy", "comical", "solidarity", 
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
var guesses = []; //will push user input to this array
var livesCounter = 7
var won = false;
var winCounter = 0
var lossCounter = 0
var winScore;
var loseScore;
var storageWin = localStorage.setItem("winScore", winCounter);
var strageLose = localStorage.setItem("loseScore", lossCounter);

$(document).ready(function(){
	initGame();
})

function initGame(){
	createBoard();
	playerGuess();
	setMessage("You have " + livesCounter + " lives left.")
	increaseScore();
	decreaseScore();
	console.log(wordChars);
}

function setMessage(msg){
	document.querySelector(".messageDiv").textContent = msg;
}

function setGuesses(){
	document.querySelector(".guessDiv2").textContent = guesses;
}

function createBoard(){
	for (i = 0; i < wordChars.length; i++){
		addCell(wordChars[i], i); // iterates through word and calls addCell function
	};
};

function addCell(letter, i){
 var row = document.querySelectorAll("tr"); // selects row within table
 var newCell = document.createElement("td"); // creates a td cell within table that's the length of the word
 newCell.setAttribute("id", 'pos'+i);
 newCell.setAttribute("class", "box")
 newCell.innerHTML = letter;
 row[0].appendChild(newCell);
}

function playerGuess(){
	$(document).on("keyup", function(event){
		if(livesCounter > 0 ) {
			var characterCode = event.which; // determine the character code the user pressed
			var letterInput = String.fromCharCode(characterCode).toLowerCase(); // converting character code to string
		 	if (guesses.indexOf(letterInput) === -1) { // if letterInput has already been guessed
		 		for (var i = 0; i < wordChars.length; i++) {
					if (letterInput === wordChars[i]){ // is the usr input included in the word?
						$("#pos" + i).addClass("correct");//if correct letter is typed, it shows up in corresct place(s)
					}
				};
				if (wordChars.indexOf(letterInput) === -1) { // if letter input is not inside wordChars
					livesCounter--;	// decrement lives
					setMessage("You have " + livesCounter + " lives left.")
					hangman();
					decreaseScore();
				}
				guesses.push(letterInput); // pushes guessed letters to div; need to figure out how to put them there only once + on keypress, not after.
				setGuesses();
				winGame();
				increaseScore();
		 	}
		}
	});
};

function hangman(){ // adds hangman divs upon livesCounter countdown; determines of player has lost
	if (livesCounter == 6){
		document.getElementById("head").className ="addHead"
	} else if (livesCounter == 5){
		document.getElementById("body").className ="addBody"
	} else if (livesCounter == 4){
		document.getElementById("rArm").className ="addRArm"
	} else if (livesCounter == 3){
		document.getElementById("lArm").className ="addLArm"
	} else if (livesCounter == 2){
		document.getElementById("rLeg").className ="addRLeg"
	} else if (livesCounter == 1){
		document.getElementById("lLeg").className ="addLLeg"
	} else if (livesCounter == 0){
		document.getElementById("face").className ="addSFace"
		setMessage("Game over :(")
		lossCounter ++
	};
};

function winGame(){ // compares guessed letters to letters in wordChars to determine if player has won
	var checkWin = document.querySelector(".guessDiv2");
	var corrects = document.getElementsByClassName("correct");
	if(wordChars.length === corrects.length) {
		livesCounter = 0;
		setMessage("You won!");
		winCounter ++
	};
};

function increaseScore(){
	document.getElementById("wins").textContent = winCounter + " win(s)"; // grabs wins div on scoreboard and sets the the win score based on winCounter
	//update localStorage score if need to
	if (winCounter >= localStorage.getItem('winScore')){
		localStorage.setItem('winScore', winCounter);
	}
};

function decreaseScore(){
	document.getElementById("losses").textContent = lossCounter + " loss(es)"; // grabs losses div on scoreboard and sets the the loss score based on lossCounter
	//update localStorage score if need to
	if (lossCounter >= localStorage.getItem('loseScore')){
	localStorage.setItem('loseScore', lossCounter);
	}
};

function setWinScore(){
	if (localStorage.getItem('winScore') === null){
		localStorage.setItem('winScore', 0);
	};
};

function setLossScore(){
	if (localStorage.getItem('loseScore') === null){
		localStorage.setItem('loseScore', 0);
	};
};

 $("#resetButton").on("click", function(){
	location.reload(); //resets game
});


  
  