var goatIcon = document.querySelector('.domestic_3');
var goatIcon2 = document.querySelector('.domestic_5');
var cowIcon = document.querySelector('.domestic_2');
var oxIcon = document.querySelector('.domestic_4');
var camelIcon = document.querySelector('.domestic_1');
var result = document.querySelector('#result');
var scoreVal = document.querySelector('#score');
var selectorDiv = document.querySelector('.selector_div');
var content = document.querySelector('.content_box');
var content2 = document.querySelector('.content_box2');

var slide1 = document.querySelector('.slide_1');
var slide2 = document.querySelector('.slide_2');

let counter = 15;

var score = 0;
let width = 300;
var gposX = -100;
var cposX = 5;
var caposX = 200;
var oaposX = 100;
var ggaposX = -100;

selectorDiv.addEventListener('click', checkIT);

function checkIT(){
    selectorDiv.classList.add('hidden');
    content.className = content.className.replace('hidden', 'show');
    var goatMove = setInterval(function () {
        goatIcon.style.left = gposX+"px";
        gposX+= 10;
        if(gposX > width){//50
            gposX = -100;
        }
    },60);

    var goatMove2 = setInterval(function () {
        goatIcon2.style.left = ggaposX+"px";
        ggaposX+= 15;
        if(ggaposX > width){//50
            ggaposX = -250;
        }
    },55);

    var cowMove = setInterval(function () {
        cowIcon.style.left = cposX+"px";
        cposX+= 10;
        if(cposX > width){//50
            cposX = -225;
        }
    },40);

    var oxMove = setInterval(function () {
        oxIcon.style.left = oaposX+"px";
        oaposX+= 15;
        if(oaposX > width){//50
            oaposX = -1000;
        }
    },35);


    var camelMove = setInterval(function () {
        camelIcon.style.left = caposX+"px";
        caposX+= 15;
        if(caposX > width){//50
            caposX = -500;
        }
    },60);





    interval = setInterval(function () {
        counter--;
        if (score>= 50 && counter < 0){
            clearInterval(goatMove);
            clearInterval(goatMove2);
            clearInterval(cowMove);
            clearInterval(oxMove);
            clearInterval(camelMove);
            clearInterval(interval);
            slide1.className = slide1.className.replace('show', 'hidden');
            slide2.className = slide2.className.replace('hidden', 'show');
            // document.querySelector('.total_score').innerHTML = "Win Score: "+ score;
            content2.innerHTML = "Your Score: "+scoreVal.innerHTML;
        }
        else if(score < 50 && counter < 0){
            clearInterval(goatMove);
            clearInterval(goatMove2);
            clearInterval(cowMove);
            clearInterval(oxMove);
            clearInterval(camelMove);
            clearInterval(interval);
            slide1.className = slide1.className.replace('show', 'hidden');
            slide2.className = slide2.className.replace('hidden', 'show');
            // document.querySelector('.total_score').innerHTML = "Lose Score: "+ score;
            content2.innerHTML = "আবার চেষ্টা করুন!";
        }
        else{
            result.innerText = counter;
        }
    },1000);
    goatIcon.addEventListener('click',scoreUpdate);
    goatIcon2.addEventListener('click',scoreUpdate1);
    cowIcon.addEventListener('click',scoreUpdate2);
    oxIcon.addEventListener('click',scoreUpdate3);
    camelIcon.addEventListener('click',scoreUpdate4);
}





function scoreUpdate(){
    score +=1;
    scoreVal.innerText = score<10? "0"+score:score;
    goatIcon.classList.add('effect_dylan');
    setTimeout( function(){
        goatIcon.className = goatIcon.className.replace('effect_dylan', '');
    },505);
}

function scoreUpdate1(){
    score +=1;
    scoreVal.innerText = score<10? "0"+score:score;
    goatIcon2.classList.add('effect_dylan');
    setTimeout( function(){
        goatIcon2.className = goatIcon2.className.replace('effect_dylan', '');
    },505);
}


function scoreUpdate2(){
    score +=3;
    scoreVal.innerText = score<10? "0"+score:score;
    cowIcon.classList.add('effect_dylan');
    setTimeout( function(){
        cowIcon.className = cowIcon.className.replace('effect_dylan', '');
    },505);
}

function scoreUpdate3(){
    score +=3;
    scoreVal.innerText = score<10? "0"+score:score;
    oxIcon.classList.add('effect_dylan');
    setTimeout( function(){
        oxIcon.className = oxIcon.className.replace('effect_dylan', '');
    },505);
}


function scoreUpdate4(){
    score +=5;
    scoreVal.innerText = score<10? "0"+score : score;
    camelIcon.classList.add('effect_dylan');
    setTimeout( function(){
        camelIcon.className = camelIcon.className.replace('effect_dylan', '');
    },505);
}




//reset
var restart = document.querySelector('.restart img');
restart.addEventListener("click",playAgain);
function playAgain(){
    content.innerHTML = "ঈদ মোবারক!";
    setTimeout(function(){
        content.innerHTML = "ধর ধর ধর!";
    },4e3);
    result.innerText = 15;
    scoreVal.innerText = "00";
    counter = 15;
    score = 0;
    interval = 0;
    slide2.className = slide1.className.replace('show', 'hidden');
    slide1.className = slide2.className.replace('hidden', 'show');
    checkIT();
}


setTimeout(function(){
    content.innerHTML = "ধর ধর ধর!";
},4e3);
