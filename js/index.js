var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var imgPath1 = "../img/dice" + randomNumber1 + ".png";
document.querySelector(".dice1").setAttribute("src", imgPath1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var imgPath2 = "../img/dice" + randomNumber2 + ".png";
document.querySelector(".dice2").setAttribute("src", imgPath2);

if (randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins ! 🚩";
else if (randomNumber1 < randomNumber2)
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins ! 🚩";
else
    document.querySelector("h1").innerHTML = "🚩 Draw ! 🚩";
