(function() {

  var winCounter = 0;

  var Game = function(maxGuesses) {
    this.maxGuesses = maxGuesses;
    this.guess = document.getElementById('guess').value;
  };
  //flips coin
  Game.prototype.coinFlip = function() {
  console.log('this button works');
    return Math.floor(Math.random() * 2);
  };

  document.getElementById('flip').addEventListener('click', Game.coinFlip);

  var round1 = new Game(3);
  console.log(round1.maxGuesses);
  if (round1.guess === 'heads' && round1.coinFlip === 0) {
    var rightHeads = document.createElement('p');
    rightHeads.innerHTML = 'Correct!';
    var content = getElementById('content');
    content.appendChild(rightHeads);
    winCounter += 1;
    console.log('if: ' + round1.maxGuesses);
  } else {
    var wrongHeads = document.createElement('p');
    var wrongHeadsTxt = document.createTextNode('Wrong! Try again');
    wrongHeads.appendChild(wrongHeadsTxt);
    round1.maxGuesses --;
    console.log('else ' + round1.maxGuesses);
  };


















// }
// document.createTextNode(startGame);
// var pTag = document.createElement('p');
// pTag.appendChild(rollTxt);
//   if (round.guess === 'heads' && round.coinFace === 0) {
//     var rollButton = document.getElementById('flip');

})();
