function rollTheDice()
{
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage1; // images/dice1.png
var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomImageSource);

var player1Wins = "🚩Player 1 Winner!"
var player2Wins = "Player 2 Winner!🚩"
var draw = "Draw!"


if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").textContent = player1Wins
}
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").textContent = player2Wins
}
else
{
  document.querySelector("h1").textContent = draw
}


    
}