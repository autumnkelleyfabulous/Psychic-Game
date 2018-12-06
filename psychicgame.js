$(document).ready(function() {
    
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    var WINS = 0;
    var Losses = 0;
    var GuessesLeft = 10;
    var guessesMade = [];
    

    document.onkeyup = function(event) {
        var game = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
        var choice = letterChoices[Math.floor(Math.random() * 26)];
        var answer = gane[choice];
        // var mylength = <answer class="length"> </answer>
        var userGuess = event.key;
        

       if (options.indexOf(userGuess) > -1) {

           if (userGuess === computerGuess) {
               WINS++;
               GuessesLeft = 10;
               guessesMade = [];
           }

           if (userGuess != computerGuess) {
               GuessesLeft--;
               guessesMade.push(userGuess);
           }

           if (GuessesLeft === 0) {

           GuessesLeft = 9;
           Losses ++;
           guessesMade = [];

           
       }

       var html = 
       "<h1>Can YOU guess which letter the computer is thinking</h1>" +
       "<Press ANY letter on the keyboard to see your fate!</p>" +
       "<p>WINS: " + wins + "</p>" +
       "<p>Losses: " + losses + "</p>" +
       "<p>Guesses Left: " + numGuesses + "</p>" +
       "<p>Guesses Made: " + guessesMade.join(", ") + "</p>";

       document.querySelector("#game").innerHTML = html;

       
       }
   };



