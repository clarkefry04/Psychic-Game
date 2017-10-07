var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking wins, losses and ties - they begin at 0.
var wins = 0;
var losses = 0;
var guesses = 9;
var guessedLetters = [];
	
document.addEventListener('DOMContentLoaded', function() {

    var html = "<p>Guess what letter I'm thinking of:</p>" + 
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Remaining: " + guesses + "</p>" + 
        "<p>Guessed Letter: " + guessedLetters.join(', ') + "</p>";

        document.getElementById("results").innerHTML = html;

// When the user presses a key, it will run the following function
document.onkeypress = function(event) {
    var userGuess = event.key; //variable to capture user's guess
    guessedLetters.push(userGuess); //Should capture letters entered

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)]; // Computer randomly chooses a letter and logs it to the console
    console.log(computerChoice)


    if(userGuess === computerChoice){
        wins++;
        guesses = 10;
        guessedLetters = [];
    }else{
        guesses--;
    }

    if(guesses === 0){
        losses++;
        guesses = 10;
        guessedLetters = [];
    }    


    var html = "<p>Guess what letter I'm thinking of:</p>" + 
    	"<p>Wins: " + wins + "</p>" +
    	"<p>Losses: " + losses + "</p>" +
    	"<p>Guesses Remaining: " + guesses + "</p>" + 
    	"<p>Guessed Letter: " + guessedLetters.join(', ') + "</p>"; //show guess
    

    document.getElementById("results").innerHTML = html;

}

});




