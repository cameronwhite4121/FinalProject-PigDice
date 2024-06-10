class Player {
    constructor(playerName, playerScore) {
        this.playerName = playerName;
        this.playerScore = playerScore;
    }
}
function generateRandomValue(minValue, maxValue) {
    var random = Math.floor(Math.random() * 10);
    while (random < minValue || random > maxValue) {
        random = Math.floor(Math.random() * 10);
    }
    return random;
}
function changePlayers() {
    let currentPlayerName = document.getElementById("current").innerText;
    let player1Name = document.getElementById("player1").value;
    let player2Name = document.getElementById("player2").value;
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
    }
    else if (player2Text.trim() == "") {
        alert("Player 2 can't be empty");
    }
    else {
        let player1 = new Player(player1Text, 0);
        let player2 = new Player(player2Text, 0);
    }
    document.getElementById("turn").classList.add("open");
    document.getElementById("total").value = "0";
    document.getElementById("player1").setAttribute("disabled", "disabled");
    document.getElementById("player2").setAttribute("disabled", "disabled");
    changePlayers();
}
function rollDie() {
    let currTotal = parseInt(document.getElementById("total").value);
}
function holdDie() {
    changePlayers();
}
