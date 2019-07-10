var goatIcon = document.querySelector('.domestic_3');
var cowIcon = document.querySelector('.domestic_2');
var camelIcon = document.querySelector('.domestic_1');

let width = 300;
var gposX = 0;
var cposX = 0;
var caposX = 0;


var goatMove = setInterval(function () {
    goatIcon.style.left = gposX+"px";
    gposX+= 5;
    if(gposX > width){//50
        gposX = -100;
    }
},20)

var cowMove = setInterval(function () {
    cowIcon.style.left = cposX+"px";
    cposX+= 5;
    if(cposX > width){//50
        cposX = -225;
    }
},25)


var camelMove = setInterval(function () {
    camelIcon.style.left = caposX+"px";
    caposX+= 5;
    if(caposX > width){//50
        caposX = -450;
    }
},50)