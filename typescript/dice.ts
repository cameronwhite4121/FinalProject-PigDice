/**
 * This class stores a playerName and a playerScore
 */
class Player{
    playerName:string;
    playerScore:number;
    constructor() {
        this.playerName = "";
        this.playerScore = 0;
    }
}

/**
 * Stores turn total which will be used as an accumulator, 
 * current die roll, and current player.
 */
class Game{
    turnTotal:number = 0;
    currentRoll:number = 0;
    currentPlayer:string = "";
}

// Initialize player objects.
// Default score is 0, default name is empty string
let player1:Player = new Player();
let player2:Player = new Player();

// Instantiate new game class
// Stores current total and current roll
let pigDice:Game = new Game();

/**
 * General use random integer method. Is coded in a way that
 * doesn't support a maxValue past 10 at the moment.
 * Code is laughably inefficient :(
 * @param minValue 
 * @param maxValue 
 * @returns 
 */
function generateRandomValue(minValue:number, maxValue:number):number{
    var random = Math.floor(Math.random() * 10);
    
    while (random < minValue || random > maxValue) {
        random = Math.floor(Math.random() * 10);
    }
    //TODO: use random to generate a number between min and max

    if(random >= minValue && random <= maxValue) {
        return random;
    }
    
}

/**
 * Default player is player1, alternates the player depending on the
 * cuurentPlayerName variable.
 */
function changePlayers():void{
    //swap from player to player by comparing current name to player names
    //set currentPlayerName to the next player

    // Player 1 gets to play first always
    if (pigDice.currentPlayer == "") {
        pigDice.currentPlayer = player1.playerName
    }
    // Turn swaps to player 2
    else if (pigDice.currentPlayer == player1.playerName) {
        pigDice.currentPlayer = player2.playerName;
    }
    // Turn swaps to player 1
    else { // currentPlayerName == player2.playerName
        pigDice.currentPlayer = player1.playerName;
    }

    (<HTMLElement>document.getElementById("current")).innerText = pigDice.currentPlayer;
}

window.onload = function(){
    let newGameBtn = document.getElementById("new_game") as HTMLButtonElement;
    newGameBtn.onclick = createNewGame;

    (<HTMLButtonElement>document.getElementById("roll")).onclick = rollDie;

    (<HTMLButtonElement>document.getElementById("hold")).onclick = holdDie;
}

/**
 * When the new game button is clicked, 2 player objects are created, and the turn section 
 * becomes visible thus allowing the game to be played.
 */
function createNewGame(){
    //verify each player has a name
    let player1Text:string = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2Text:string = (<HTMLInputElement>document.getElementById("player2")).value;
    //if both players don't have a name display error
    let namesValid:boolean = true;
    if(player1Text.trim() == "") {
        alert("Player 1 can't be empty");
        namesValid = false
    }
    else if(player2Text.trim() == "") {
        alert("Player 2 can't be empty");
        namesValid = false;
    }

    if(namesValid) {
        // Sets names to textbox value
        player1.playerName = player1Text;
        player2.playerName = player2Text;

        // Resets pigDice object values
        pigDice.currentRoll = 0;
        pigDice.turnTotal = 0;

        //if both players do have a name start the game!
        (<HTMLElement>document.getElementById("turn")).classList.add("open");
        (<HTMLInputElement>document.getElementById("total")).value = "0";
        //lock in player names and then change players
        (<HTMLInputElement>document.getElementById("player1")).setAttribute("disabled", "disabled");
        (<HTMLInputElement>document.getElementById("player2")).setAttribute("disabled", "disabled");
        changePlayers();
    }
}

function rollDie():void{
    let currTotal = parseInt((<HTMLInputElement>document.getElementById("total")).value);
    
    //roll the die and get a random value 1 - 6 (use generateRandomValue function)
    pigDice.currentRoll = generateRandomValue(1, 6);
    console.log("Die rolled: " + pigDice.currentRoll);

    //if the roll is 1
    //  change players
    //  set current total to 0
    if (pigDice.currentRoll == 1) {
        changePlayers();
        pigDice.turnTotal = 0;
        console.log("Current Total: " + pigDice.turnTotal);
    }
    
    //if the roll is greater than 1
    //  add roll value to current total
    else {
        pigDice.turnTotal += pigDice.currentRoll;
        console.log("Current Total:" + pigDice.turnTotal);
    }
    //set the die roll to value player rolled
    //display current total on form
    (<HTMLButtonElement>document.getElementById("die")).innerText = pigDice.currentRoll.toString();
    (<HTMLButtonElement>document.getElementById("total")).innerText = pigDice.turnTotal.toString();
}

function holdDie():void{
    //get the current turn total
    //determine who the current player is
    //add the current turn total to the player's total score

    //reset the turn total to 0

    //change players
    //changePlayers();
}