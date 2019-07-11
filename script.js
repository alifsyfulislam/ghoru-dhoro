var goatIcon = document.querySelector('.domestic_3');
var goatIcon2 = document.querySelector('.domestic_5');
var cowIcon = document.querySelector('.domestic_2');
var oxIcon = document.querySelector('.domestic_4');
var camelIcon = document.querySelector('.domestic_1');
var result = document.querySelector('#result');
var scoreVal = document.querySelector('#score');


var slide1 = document.querySelector('.slide_1');
var slide2 = document.querySelector('.slide_2');

let counter = 10;

var score = 0;
let width = 300;
var gposX = 30;
var cposX = 200;
var caposX = 50;
var oaposX = 0;
var ggaposX = 0;


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
        if (score>= 10 && counter < 0){
            clearInterval(goatMove);
            clearInterval(goatMove2);
            clearInterval(cowMove);
            clearInterval(oxMove);
            clearInterval(camelMove);
            clearInterval(interval);
            slide1.className = slide1.className.replace('show', 'hidden');
            slide2.className = slide2.className.replace('hidden', 'show');
            document.querySelector('.total_score').innerHTML = "Win Score: "+ score;
        }
        else if(score < 10 && counter < 0){
            clearInterval(goatMove);
            clearInterval(goatMove2);
            clearInterval(cowMove);
            clearInterval(oxMove);
            clearInterval(camelMove);
            clearInterval(interval);
            slide1.className = slide1.className.replace('show', 'hidden');
            slide2.className = slide2.className.replace('hidden', 'show');
            document.querySelector('.total_score').innerHTML = "Dull Score: "+ score;
        }
        else{
            result.innerText = counter;
        }
},1000);



goatIcon.addEventListener('click',scoreUpdate);
goatIcon2.addEventListener('click',scoreUpdate);
cowIcon.addEventListener('click',scoreUpdate2);
oxIcon.addEventListener('click',scoreUpdate2);
camelIcon.addEventListener('click',scoreUpdate3);




function scoreUpdate(){
    score +=1;
    scoreVal.innerText = score;
}


function scoreUpdate2(){
    score +=3;
    scoreVal.innerText = score;
}


function scoreUpdate3(){
    score +=5;
    scoreVal.innerText = score;
}



