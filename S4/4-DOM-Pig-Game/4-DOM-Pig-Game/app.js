/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, isPlaying;
init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (isPlaying){
        document.querySelector('.dice').style.display = 'block';
        var dice = Math.floor(Math.random() * 6) + 1;
        if (dice !== 1){
            document.querySelector('.dice').src = 'dice-' + dice + '.png';
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            nextTurn();
        }

    } 
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (isPlaying){
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100){
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');  
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); 
            document.getElementById('name-' + activePlayer).textContent = 'Winner';
            isPlaying = false;
        } else {
            nextTurn();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', function(){
    init();
});

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    isPlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
}

function nextTurn(){
    roundScore = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-' + activePlayer).textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    activePlayer = activePlayer === 0 ? 1: 0;
}