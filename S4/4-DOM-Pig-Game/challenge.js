/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, activePlayer, roundScore, lastDice, isPlaying;
init();

document.querySelector('.btn-new').addEventListener('click', function(){
    init();
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (isPlaying){
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 200){
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');  
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); 
            document.getElementById('name-' + activePlayer).textContent = 'Winner';
            isPlaying = false;
        } else {
            nextTurn();
        }
    }
});

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (isPlaying){
        document.querySelectorAll('.dice').forEach(function (item, index, elements) {
            item.style.display = 'block';
        })
        var dice0 = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;
        console.log(dice0 + ',' + dice1)
        var isTwoTimesSixInARow = (lastDice !== null) && (lastDice[0] === 6 || lastDice[1] === 6) && (dice0 === 6 || dice1 === 6);
        console.log(isTwoTimesSixInARow);
        lastDice = [dice0, dice1];
        if (isTwoTimesSixInARow){
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            nextTurn();
        } else if (dice0 !== 1 && dice1 !== 1){
            document.querySelector('#dice-0').src = 'dice-' + dice0 + '.png';
            document.querySelector('#dice-1').src = 'dice-' + dice1 + '.png';
            roundScore += dice0 + dice1;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            nextTurn();
        }

    } 
});

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    lastDice = null;
    isPlaying = true;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelectorAll('.dice').forEach(function (item, index, elements) {
        item.style.display = 'none';
    })
};


function nextTurn(){
    roundScore = 0;
    lastDice = null;
    document.querySelectorAll('.dice').forEach(function (item, index, elements) {
        item.style.display = 'none';
    })
    document.getElementById('current-' + activePlayer).textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    activePlayer = activePlayer === 0 ? 1: 0;
};