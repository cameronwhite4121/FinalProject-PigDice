/**
 * This class stores a playerName and a playerScore
 */
class Player{
    playerName:string;
    playerScore:number;
    constructor(playerName:string, playerScore:number) {
        this.playerName = playerName;
        this.playerScore = playerScore;
    }
}

function generateRandomValue(minValue:number, maxValue:number):number{
    var random = Math.floor(Math.random() * 10);
    while (random < minValue || random > maxValue) {
        random = Math.floor(Math.random() * 10);
    }
    //TODO: use random to generate a number between min and max

    return random;
}


function changePlayers():void{
    let currentPlayerName = (<HTMLElement>document.getElementById("current")).innerText;
    let player1Name = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2Name = (<HTMLInputElement>document.getElementById("player2")).value;

    //swap from player to player by comparing current name to player names
    //set currentPlayerName to the next player
}

window.onload = function(){
    let newGameBtn = document.getElementById("new_game") as HTMLButtonElement;
    newGameBtn.onclick = createNewGame;

    (<HTMLButtonElement>document.getElementById("roll")).onclick = rollDie;

    (<HTMLButtonElement>document.getElementById("hold")).onclick = holdDie;
}

function createNewGame(){
    //set player 1 and player 2 scores to 0

    //verify each player has a name
    let player1Text:string = (<HTMLInputElement>document.getElementById("player1")).value;
    let player2Text:string = (<HTMLInputElement>document.getElementById("player2")).value;
    //if both players don't have a name display error
    let namesValid:boolean = true;
    if(player1Text.trim() == "") {
        alert("Player 1 can't be empty");
    }
    else if(player2Text.trim() == "") {
        alert("Player 2 can't be empty");
    }
    else { // Names are valid
        // Sets 2 player objects with names = to textboxes, and
        // initializes scores to 0
        let player1:Player = new Player(player1Text, 0);
        let player2:Player = new Player(player2Text, 0);
    }

    //if both players do have a name start the game!
    (<HTMLElement>document.getElementById("turn")).classList.add("open");
    (<HTMLInputElement>document.getElementById("total")).value = "0";
    //lock in player names and then change players
    (<HTMLInputElement>document.getElementById("player1")).setAttribute("disabled", "disabled");
    (<HTMLInputElement>document.getElementById("player2")).setAttribute("disabled", "disabled");
    changePlayers();
}

function rollDie():void{
    let currTotal = parseInt((<HTMLInputElement>document.getElementById("total")).value);
    
    //roll the die and get a random value 1 - 6 (use generateRandomValue function)

    //if the roll is 1
    //  change players
    //  set current total to 0
    
    //if the roll is greater than 1
    //  add roll value to current total

    //set the die roll to value player rolled
    //display current total on form
}

function holdDie():void{
    //get the current turn total
    //determine who the current player is
    //add the current turn total to the player's total score

    //reset the turn total to 0

    //change players
    changePlayers();
}