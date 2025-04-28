/*Start Message
document.getElementById("gameboard").style.display = "none";

function startGame() {
    document.getElementById("gameboard").style.display = "block";
    document.getElementById("start-screen").style.display = "none";
}

document.getElementById('start-button').addEventListener('click', startGame);*/


/*Countdown Timer

var seconds = 60;
var time;

function myFunction() {
    if (seconds < 60) {
        document.getElementById("time").innerHTML = seconds;
    }
    if (seconds > 0) {
        seconds--;
    } else {
        clearInterval(time);
        alert("Time's Up!");
    }
}
document.getElementById("timerStartBtn").onclick = function () {
    if (!time) {
        time = window.setInterval(function () {
            myFunction();
        }, 1000);
    }
}

document.getElementById("timer").innerHTML = "1:00";*/