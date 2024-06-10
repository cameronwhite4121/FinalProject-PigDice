class Player {
    constructor() {
        this.playerName = "";
        this.playerScore = 0;
    }
}
function generateRandomValue(minValue, maxValue) {
    var random = Math.floor(Math.random() * 10);
    while (random < minValue || random > maxValue) {
        random = Math.floor(Math.random() * 10);
    }
    return random;
}
function changePlayers(player1, player2) {
    let currentPlayerName = document.getElementById("current").innerText;
    let player1Name = player1.playername;
    let player2Name = player2.player1Name;
    if (currentPlayerName == "") {
        currentPlayerName = player1Name;
    }
    else if (currentPlayerName == player1Name) {
        currentPlayerName = player2Name;
    }
    else {
        currentPlayerName = player1Name;
    }
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
    let player1 = new Player();
    let player2 = new Player();
    if (namesValid) {
        player1.playerName = player1Text;
        player2.playerName = player2Text;
        document.getElementById("turn").classList.add("open");
        document.getElementById("total").value = "0";
        document.getElementById("player1").setAttribute("disabled", "disabled");
        document.getElementById("player2").setAttribute("disabled", "disabled");
        changePlayers(player1, player2);
    }
}
function rollDie() {
    let currTotal = parseInt(document.getElementById("total").value);
}
function holdDie() {
}
