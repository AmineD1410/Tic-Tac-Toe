var modal = document.getElementById("myModal");
function closeModal() {
    modal.setAttribute('style', 'display:none; z-index: 0;');
    const playerOne = document.getElementById('player1').value;
    const playerTwo = document.getElementById('player2').value;
    document.getElementById('player1Name').textContent=playerOne;
    document.getElementById('player2Name').textContent=playerTwo;
    const cells = document.querySelectorAll(".gameBox");
const statusText = document.querySelector("#result");
const restartBtn = document.querySelector("#restart");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 'X';
let running = false;
let currentPlayerName='TTTTT';
initializeGame();

function initializeGame(){
    if(currentPlayer=='X') {currentPlayerName=playerOne}
    else if(currentPlayer=='O') {currentPlayerName=playerTwo}
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayerName}'s turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    if(currentPlayer=='X') {currentPlayerName=playerOne}
    else if(currentPlayer=='O') {currentPlayerName=playerTwo}
    statusText.textContent = `${currentPlayerName}'s turn`;
}
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        if(currentPlayer=='X') {currentPlayerName=playerOne}
        else if(currentPlayer=='O') {currentPlayerName=playerTwo}
        statusText.textContent = `${currentPlayerName} wins!`;
        statusText.setAttribute('style', 'transform:scale(1.5)');
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    if(currentPlayer=='X') {currentPlayerName=playerOne}
    else if(currentPlayer=='O') {currentPlayerName=playerTwo}
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.setAttribute('style', 'transform:scale(1.0)');
    statusText.textContent = `${currentPlayerName}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
    }
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closeModal);


