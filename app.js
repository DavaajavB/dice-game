//Тоглогчийн ээлжийг хадгалах хувьсагч

var actevePlayer = 1;

//Тоглогчийн оноог хадгалах хувьсагч

var score = [0, 0];



// Ээлжийн оноо

var roundScore = 0;


// Шооны тал 
var dice = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>
//window.document.querySelector('#score-0').textContent = dice;

//document.querySelector('#score-1').innerHTML = '<em> Yes! </em>';

//Програм эхлэхэл бэлтгэе
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;


document.querySelector(".dice").style.display = "none";

console.log('Шоо '+ dice);



