var counter = 0;

document.querySelector(".refresh_btn").addEventListener("click", function () {
    var randomNumberOne = Math.floor(Math.random() * 6) + 1;

    var randomDiceImageOne = "dice" + randomNumberOne + ".png";

    var randomDiceImageSourceOne = "images/" + randomDiceImageOne;

    document.querySelector(".img1").setAttribute("src", randomDiceImageSourceOne);

    var randomNumberTwo = Math.floor(Math.random() * 6) + 1;

    var randomDiceImageTwo = "dice" + randomNumberTwo + ".png";

    var randomDiceImageSourceTwo = "images/" + randomDiceImageTwo;

    document.querySelector(".img2").setAttribute("src", randomDiceImageSourceTwo);

    if (randomNumberOne > randomNumberTwo) {
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    } else if (randomNumberTwo > randomNumberOne) {
        document.querySelector("h1").innerHTML = "Payer 2 Wins";
    } else {
        document.querySelector("h1").innerHTML = "It's a Draw!";
    } 

    counter++;
    document.querySelector(".play_time").innerHTML = "You played " + counter + " times";
});

