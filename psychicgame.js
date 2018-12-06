$(document).ready(function() {
    
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    var WINS = 0;
    var Losses = 0;
    var GuessesLeft = 10;
    var guessesMade = [];
    var eachofLetters = null;

    document.onkeyup = function(event) {
        var game = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
        var letterChoices = letters[Math.floor(Math.random() * letters.length)];
        var answer = game[choice];
        // var mylength = <answer class="length"> </answer>
        var userGuess = event.key;
        
     function countGuessesLeft() {
         document.querySelector("#letter").innerHTML = "Your Guesses so far: " = letterUser.join(' ');

     }

     countGuessesLeft();
     var restart = function() {
         GuessesLeft = 10
         letterUser = []
         var letterChoices = letters[Math.random() * letters.length)];
     }

     When the user presses a key, it will run the following function..
     document.onkey = function(event) {
         guessesLeft--;
         var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

         letterUser.push(userGuess);
         countGuessesLeft();
         farUserGuesses();
     }
     if ((UserGuess === letterChoices && (GuessesLeft > 0)) {
         {
        WINS++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
 restart();

         else if (userGuess === computerGuess) && (GuessesLeft > 0)) {
             GuessesLeft = GuessesLeft--;
              
	} 
	else  {
		losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        alert("You LOSE! The letter to guess was " + letterToGuess +"!"); 
       reset();
	}
  };		



Collapse 
var html = 
       "<h2>Press ANY letter on the keyboard to see your fate!</h2>" +
       "<Press ANY letter on the keyboard to see your fate!</p>" +
       "<p>WINS: " + WINS + "</p>" +
       "<p>Losses: " + Losses + "</p>" +
       "<p>Guesses Left: " + Guesses Left + "</p>" +
       "<p>Guesses Made: " + Guesses Made.join(", ") + "</p>";

//                GuessesLeft = 10;
//                guessesMade = [];
//            }

//            if (userGuess != computerGuess) {
//                GuessesLeft--;
//                guessesMade.push(userGuess);
//            }

//            if (GuessesLeft === 0) {

//            GuessesLeft = 9;
//            Losses ++;
//            guessesMade = [];

           
//        }

       
//        document.querySelector("#game").innerHTML = html;

       
//        }
//    };



