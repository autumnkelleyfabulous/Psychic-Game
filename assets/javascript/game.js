

   var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
   var wins = 0;
   var losses = 0;
   var guessesLeft = 10;
   var guessesMade = [];
   var userGuess = null;
   var letterChoices = letters[Math.floor(Math.random() * letters.length)];
   
   document.onkeyup = function (event) {
       console.log('COMPUTER GUESS: ' + letterChoices);
       // var game = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
       var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
       console.log('USER GUESS: ' + userGuess);
   
       // USER GUESS WRONG
       if (guessesMade.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
           guessesMade[guessesMade.length] = userGuess
           guessesLeft--;
           document.getElementById("guessesMade").innerHTML = "Guesses Made: " + guessesMade
           document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
           console.log('GUESSES LEFT: ' + guessesLeft);
       }
   
   
       // USER GUESS = letterChoice
   
       if (userGuess === letterChoices) {
           alert("You Win!")
           wins++;
           guessesLeft = 10
           guessesMade = [];
           console.log(wins)
           document.getElementById("wins").innerHTML = "Wins: " + wins
           letterChoices = letters[Math.floor(Math.random() * letters.length)];
       }
   
       if (guessesLeft == 0) {
   
           alert("YOU LOST!")
           losses++
           guessesLeft = 10
           guessesMade = [];
           console.log(losses)
           document.getElementById("losses").innerHTML = "Losses: " + losses
           letterChoices = letters[Math.floor(Math.random() * letters.length)];
   
       }
   }
   
   
   
   Collapse 