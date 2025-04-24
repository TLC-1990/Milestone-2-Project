/*Start Message*/
document.getElementById("gameboard").style.display = "none";

function startGame() {
    document.getElementById("gameboard").style.display = "block";
    document.getElementById("startScreen").style.display = "none";
}

document.getElementById('startBtn').addEventListener('click', startGame);


/*Countdown Timer*/
function startTimer() {
    document.getElementById("time")
    document.getElementById("timerStartBtn").addEventListener('click', startTimer)
}