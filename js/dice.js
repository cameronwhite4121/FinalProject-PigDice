class Player {
    constructor() {
        this.playerName = "";
        this.totalScore = 0;
    }
}
class Game {
    constructor() {
        this.turnTotal = 0;
        this.currentRoll = 0;
        this.currentPlayer = "";
    }
}
let player1 = new Player();
let player2 = new Player();
let pigDice = new Game();
function generateRandomValue(minValue, maxValue) {
    var random = Math.floor(Math.random() * 10);
    while (random < minValue || random > maxValue) {
        random = Math.floor(Math.random() * 10);
    }
    if (random >= minValue && random <= maxValue) {
        return random;
    }
}
function changePlayers() {
    if (pigDice.currentPlayer == "") {
        pigDice.currentPlayer = player1.playerName;
    }
    else if (pigDice.currentPlayer == player1.playerName) {
        pigDice.currentPlayer = player2.playerName;
    }
    else {
        pigDice.currentPlayer = player1.playerName;
    }
    document.getElementById("current").innerText = pigDice.currentPlayer;
}
window.onload = function () {
    let newGameBtn = document.getElementById("new_game");
    newGameBtn.onclick = createNewGame;
    document.getElementById("roll").onclick = rollDie;
    document.getElementById("hold").onclick = holdDie;
};
function createNewGame() {
    let player1Text = document.getElementById("player1").value;
    let player2Text = document.getElementById("player2").value;
    let namesValid = true;
    if (player1Text.trim() == "") {
        alert("Player 1 can't be empty");
        namesValid = false;
    }
    else if (player2Text.trim() == "") {
        alert("Player 2 can't be empty");
        namesValid = false;
    }
    if (namesValid) {
        player1.playerName = player1Text;
        player2.playerName = player2Text;
        pigDice.currentRoll = 0;
        pigDice.turnTotal = 0;
        document.getElementById("turn").classList.add("open");
        document.getElementById("total").value = "0";
        document.getElementById("player1").setAttribute("disabled", "disabled");
        document.getElementById("player2").setAttribute("disabled", "disabled");
        changePlayers();
    }
}
function rollDie() {
    let currTotal = parseInt(document.getElementById("total").value);
    pigDice.currentRoll = generateRandomValue(1, 6);
    console.log("Die rolled: " + pigDice.currentRoll);
    if (pigDice.currentRoll == 1) {
        endTurn();
        console.log("Current Total: " + pigDice.turnTotal);
    }
    else {
        pigDice.turnTotal += pigDice.currentRoll;
        console.log("Current Total:" + pigDice.turnTotal);
        document.getElementById("die").value = pigDice.currentRoll.toString();
        document.getElementById("total").value = pigDice.turnTotal.toString();
    }
}
function holdDie() {
    if (pigDice.currentPlayer == player1.playerName) {
        player1.totalScore += pigDice.turnTotal;
        pigDice.turnTotal = 0;
        document.getElementById("score1").value = player1.totalScore.toString();
    }
    else {
        player2.totalScore += pigDice.turnTotal;
        pigDice.turnTotal = 0;
        document.getElementById("score2").value = player2.totalScore.toString();
    }
    player1.totalScore = 100;
    if (player1.totalScore >= 100) {
        alert(player1.playerName + " wins! They're the ultimate pig!");
        resetGame();
    }
    else if (player2.totalScore >= 100) {
        alert(player2.playerName + " wins! They're the ultimate pig!");
        resetGame();
    }
    else {
        endTurn();
    }
}
function resetGame() {
    player1.playerName = "";
    player1.totalScore = 0;
    player2.playerName = "";
    player2.totalScore = 0;
    pigDice.currentPlayer = "";
    pigDice.currentRoll = 0;
    document.getElementById("score1").value = player1.totalScore.toString();
    document.getElementById("score1").value = player1.totalScore.toString();
    document.getElementById("player1").value = player1.playerName;
    document.getElementById("player2").value = player2.playerName;
    endTurn();
}
function endTurn() {
    changePlayers();
    pigDice.turnTotal = 0;
    document.getElementById("die").value = "";
    document.getElementById("total").value = "";
}
