var randomNumber1 = Math.floor(Math.random() * 6) + 1;//1-6

var randomDiceImage = "dice"+ randomNumber1 + ".png";//dice1.png-dice.png

var randomImageSource = "images/" + randomDiceImage;//images/dice1.png-images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);



if (randomNumber1 > randomNumber2) {
//   console.log('1');
  document.querySelector("h1").innerHTML=" 🚩player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
//   console.log('2');
  document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else {
  document.querySelector("h1").innerHTML="🚩Draw🚩";
}
// if (randomNumber1 > randomNumber2) {
//   document.getElementByClassName(".Win").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.getElementByClassName(".Win").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.getElementByClassName(".Win").innerHTML = "Draw!";
// }
