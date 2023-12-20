//Тоглогчийн ээлжийг хадгалах хувьсагч

var actevePlayer = 0;

//Тоглогчийн оноог хадгалах хувьсагч

var score = [0, 0];



// Ээлжийн оноо

var roundScore = 0;


// Шооны тал 


// <div class="player-score" id="score-0">43</div>
//window.document.querySelector('#score-0').textContent = dice;

//document.querySelector('#score-1').innerHTML = '<em> Yes! </em>';

//Програм эхлэхэл бэлтгэе

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var diceDom = document.querySelector(".dice");

diceDom.style.display = "none";


//Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {

    //1-6 дотор санассаргүй нэг тоог гаргаж авна 
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //Шооны зургийг веб дээр гаргаж ирнэ
    diceDom.style.display = "block";

    // буусан санамсаргүй тоонд харгалзах шооны зургийг веб дээр гаргаж ирнэ
    diceDom.src = "dice-" + diceNumber + '.png';

   // Буусан тоо нь 1 ээс ялгаатай бол идвхтэй тоглогчийн ээлжийн оноог нэмнэ
    if(diceNumber !== 1) 
    {
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + actevePlayer).textContent = roundScore;

    }else {
            // 1 буусан тул тоглогчийн ээлжийг солино
            // Хэрэв идэвхитэй тоглогч нь 0 байвал 1 болго
            // Хэрэв идэвхитэй тоглогч нь 1 байвал 0 болго
         switchToNext();
    };
});

// Hold Tovhcnii listener

document.querySelector('.btn-hold').addEventListener('click', function(){
    //Ug toglogchiin eeljnii onoog global onoond nemne
    // Eeljiin onoog ni 0 no
    //Toglogchiin eeljiig solino
//   if (actevePlayer ===0) {
//scores[0] = scores[0] + roundScore;
//   }else {
//scores[1] = scores[1] + roundScore;
  // }

score[actevePlayer] = score[actevePlayer] + roundScore;

//Ug toglogch hojgson esehiig shalgah onoo 100 gs ih eseh

if(score[actevePlayer] >= 20){

//Yalagch gesen textiig nerniih  i orond gargasna

document.getElementById("name-" + actevePlayer).textContent = "WINNER"

}

document.getElementById('score-' + actevePlayer).textContent = score[actevePlayer];

switchToNext();

});


function switchToNext(){
    roundScore = 0;
document.getElementById("current-" + actevePlayer).textContent = 0;

if (actevePlayer === 0){
    actevePlayer = 1;
}else {
    actevePlayer = 0;
}
// Улаан цгийг шилжүүлэх
document.querySelector(".player-0-panel").classList.toggle("active");
document.querySelector(".player-1-panel").classList.toggle("active");

// Шоог алга болгох
diceDom.style.display = "none";
}

//Shine togloon ehluuleh

document.querySelector('.btn-new').addEventListener('click',function(){
    alert('cleked');
})