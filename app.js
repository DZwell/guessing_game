(function() {

    var winCounter = 0;
    var maxGuesses = 3;


    var startGame = function() {
      var coinFace = Math.floor(Math.random() * 2);
      console.log(coinFace);
      return coinFace;

    }

    var rollButton = document.getElementById('flip');
    var roll = rollButton.addEventListener('click', function() {
      startGame();
    }
    var rollTxt = document.createTextNode(startGame);
    var pTag = document.createElement('p');
    pTag.appendChild(rollTxt);








    //   round.guess = document.getElementById('guess').value;
    //   if (round.guess === 'heads' && round.coinFace === 0) {
    //     var rightHeads = document.createElement('p');
    //     var rightHeadsTxt = document.createTextNode('Correct!');
    //     rightHeads.appendChild(rightHeadsTxt);
    //     var rollButton = document.getElementById('flip');

    // var round1 = new Game()
})();
