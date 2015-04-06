
  (function() {
    var greeting = prompt('Do you want to play? Type yes or no.');
      console.log('User responded ' + greeting + ' to prompt');
    var winCounter = 0;
    var maxGuesses = 3;

    var Game = function(guess,retry, coinFace) {
      this.guess = '';
      this.retry = true;
      this.coinFace = Math.floor(Math.random() * 2);
        console.log('Inside of Game constructor ' + this.coinFace);
      };


    var startGame = function(round) {
      round.guess = prompt('Heads or tails?');
        console.log('User entered ' + round.guess);
      while(round.retry && maxGuesses > 0) {
        console.log('beinning of while');
      if(round.guess.toLowerCase() === 'heads' && round.coinFace === 0) {
        var rightGuess = document.createElement('p');
        var rightGuessText = document.createTextNode('It\'s heads. You guessed right!');
        rightGuess.appendChild(rightGuessText);
        var position = document.getElementsByTagName('form')[0];
        position.appendChild(rightGuess);
        round.retry = false;
        winCounter += 1;
      } else if(round.guess.toLowerCase() === 'tails' && round.coinFace === 1) {
        var rightGuess2 = document.createElement('p');
        var rightGuessText2 = document.createTextNode('It\'s tails. You guessed right!');
        rightGuess2.appendChild(rightGuessText2);
        var position = document.getElementsByTagName('form')[1];
        position.appendChild(rightGuess2);

        round.retry = false;
        winCounter += 1;
      } else {
          maxGuesses -= 1;
            console.log(maxGuesses + ' wrong answer else statement ');
          if(round.coinFace === 0) {
          var wrongGuess = document.createElement('p');
          var wrongGuessText = document.createTextNode('Wrong answer! The answer was heads. Try again');
          wrongGuess.appendChild(wrongGuessText);
          var position = document.getElementsByTagName('form')[2];
          position.appendChild(wrongGuess);
        } else {
            var wrongGuess2 = document.createElement('p');
            var wrongGuessText2 = document.createTextNode('Wrong answer! The answer was tails. Try again.');
            wrongGuess2.appendChild(wrongGuessText2);
            var position = document.getElementsByTagName('form')[3];
            position.appendChild(wrongGuess2);
          }
          console.log('End of while loop, restart game');
         startGame(round1);
          }
         } maxGuesses = 3;
        }

    var round1 = new Game();
    if(greeting/*.toLowerCase() */=== 'yes') {
      startGame(round1);

    var roundAlert = document.createElement('p');
    var roundAlertText = document.createTextNode('Round two!');
    roundAlert.appendChild(roundAlertText);
    var position = document.getElementsByTagName('form')[4];
    position.appendChild(roundAlert);
    var round2 = new Game();
    startGame(round2);

    var roundAlert2 = document.createElement('p');
    var roundAlertText2 = document.createTextNode('Round three!');
    roundAlert2.appendChild(roundAlertText2);
    var position = document.getElementsByTagName('form')[5];
    position.appendChild(roundAlert2);
    var round3 = new Game();
    startGame(round3);

   var congrats = document.createElement('p');
   var nextTimeText = document.createTextNode('Congrats, you got ' + winCounter + ' out of 3!');
   congrats.appendChild(congratsText);
   var position = document.getElementsByTagName('form')[6];
   position.appendChild(congrats);
    } else {
   var nextTime = document.createElement('p');
   var nextTimeText = document.createTextNode('Maybe next time');
   nextTime.appendChild(nextTimeText);
   var position = document.getElementsByTagName('form')[7];
   position.appendChild(nextTime);
  }

})();

