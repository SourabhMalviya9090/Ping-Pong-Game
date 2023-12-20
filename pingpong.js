// Selecting the elements like buttons, divs and spans to target and listen events
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const winScore = document.querySelector('#upto');
const greet1 = document.querySelector('#greet1');
const greet2 = document.querySelector('#greet2');

// Selecting main H2 with id mainHeading to display winners name at the end of the Game
const winnerBoard = document.querySelector('#mainHeading');
const winnerBoardContent = winnerBoard.innerText;

// A boolean to know when the game ends
let isGameOver = false;

// Listening to Events for  button 1 that is button for Player1
btn1.addEventListener('click', function () {
    if (isGameOver == false) {
        let palyer1Score = parseInt(score1.innerText) + 1;
        if (palyer1Score == parseInt(winScore.value)) {
            score1.innerHTML = winScore.value;
            score1.style.color = 'green';
            score2.style.color = 'red';
            isGameOver = true;
            winnerBoard.innerText = "Congrats! PLAYER1 You Won!";
            winnerBoard.style.color = 'green';
            document.body.style.backgroundColor = 'violet';


        }
        else {
            score1.innerText = palyer1Score;
        }
    }
})

// Listening to Events for  button 2 that is a button for Player2
btn2.addEventListener('click', function () {
    if (isGameOver == false) {
        let palyer2Score = parseInt(score2.innerText) + 1;
        if (palyer2Score == parseInt(winScore.value)) {
            score2.innerText = winScore.value;
            score2.style.color = 'green';
            score1.style.color = 'red';
            isGameOver = true;
            winnerBoard.innerText = "Congrats! PLAYER2 You Won!";
            winnerBoard.style.color = 'blue';
            document.body.style.backgroundColor = 'pink';
        }
        else {
            score2.innerText = palyer2Score;
        }
    }
})

// Listening to Events for  button 3 that is reset button
btn3.addEventListener('click', function () {
    score1.innerText = '0';
    score2.innerText = '0';
    score1.style.color = 'purple';
    score2.style.color = 'purple';
    isGameOver = false;
    winScore.value = 7;
    winnerBoard.innerText = winnerBoardContent;
    document.body.style.backgroundColor = '#90abae';
})

