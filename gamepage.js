// random value generated
player_name = localStorage.getItem("player_name")
var y = Math.floor(Math.random() * 10 + 1);
var guess = 1
function submit() {
    var x = document.getElementById("guessField").value;
if(x == y) {
    alert("CONGRATULATIONS!!!" + player_name + "YOU GUESSED IT RIGHT IN" + guess + "GUESS");
}
else if(x > y) {
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else {
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
}
}
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     


function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}