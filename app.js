//Тоглогчийн ээлжийг хадгалах хувьсагч

var actevePlayer = 1;

//Тоглогчийн оноог хадгалах хувьсагч

var score = [0, 0];



// Ээлжийн оноо

var roundScore = 0;


// Шооны тал 


// <div class="player-score" id="score-0">43</div>
//window.document.querySelector('#score-0').textContent = dice;

//document.querySelector('#score-1').innerHTML = '<em> Yes! </em>';

//Програм эхлэхэл бэлтгэе

document.getElementById("score-0").textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var diceDom = document.querySelector(".dice");

diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener('click', function (){
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";
    diceDom.src = 'dice-' + diceNumber + '.png';
})




