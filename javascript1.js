function diceroll() {
    // Roll dice for Player 1
    var a1 = Math.floor(Math.random() * 6) + 1;
    var diceImage1 = document.querySelectorAll(".dice img")[0];
    diceImage1.src = "dice" + a1 + ".png";

    // Roll dice for Player 2
    var a2 = Math.floor(Math.random() * 6) + 1;
    var diceImage2 = document.querySelectorAll(".dice img")[1];
    diceImage2.src = "dice" + a2 + ".png";
}

window.onload = function() {
    diceroll();
};

