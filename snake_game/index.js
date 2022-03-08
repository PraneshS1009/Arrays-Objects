console.log("Working");



var box = document.querySelector(`.snakebox`);
// console.log(box);
var snake = document.querySelector(`.snake`);
var textmsg = document.querySelector('.textmsg')
var newgame = document.querySelector(`.newgame`);
var info = document.querySelector('.info');
var food = document.querySelector('.food');
console.log(snake);

var x=Math.floor(Math.random()*700),y=Math.floor(Math.random()*400);
var xfood=Math.floor(Math.random()*700),yfood=Math.floor(Math.random()*400);
var flagup=0,flagdown=0,flagleft=0,flagright=0;
var grid = 3;
var z = 0;
snake.setAttribute('style',`--x: ${x}px; --y: ${y}px;`);
food.setAttribute('style',`--xfood: ${xfood}px; --yfood: ${yfood}px;`);
function myFunction(e){
    snake.setAttribute('style',`--x: ${x}px; --y: ${y}px;`);
    info.textContent=``;
    switch(e.key){
        case 'ArrowUp':
            if(flagup==0){
                y=y-10;
                z= 270;
                flagdown = 1;
                flagright = 0;
                flagleft = 0;
            }else{
                info.textContent=`Snake cannot able to move in reverse`;
            }
            console.log("Up");
            if(y<0){
                endMyFunction();
            }else{ 
                console.log(y);
            }
            break;        
        case 'ArrowDown':
            if(flagdown==0){
                y=y+10;
                z= 90;
                flagup = 1;
                flagright = 0;
                flagleft = 0;
            }else{
                info.textContent=`Snake cannot able to move in reverse`;
            }
            console.log("Down");
            if(y>=488){
                endMyFunction();
            }else{ 
                console.log(y);
            }
            break;        
        case 'ArrowLeft':
            if(flagleft==0){
                x=x-10;
                z= 180;
                flagup = 0;
                flagright = 1;
                flagdown = 0;
                console.log(x);
            }else{
                info.textContent=`Snake cannot able to move in reverse`;
            }
            console.log("Left");
            if(x<0){
                endMyFunction();
            }else{ 
                console.log(x);
            }
            break;    
        case 'ArrowRight':
            if(flagright==0){
                x=x+10;
                z= 360;
                flagup = 0;
                flagleft = 1;
                flagdown = 0;
            }else{
                info.textContent=`Snake cannot able to move in reverse`;
            }
            console.log("Right");
            if(x>=765){
                endMyFunction();
            }else{ 
                console.log(x);
            }
            break;
        default :
            info.textContent=`Please use arrow Keys. Dont use any other keys`;
    }
    
    snake.setAttribute('style',`--x: ${x}px; --y: ${y}px; --z: ${z}deg;`);
    console.log(x-xfood , y-yfood);
    if((x-xfood <= 5 && x-xfood >=-5)&&(y-yfood <= 5 && y-yfood >=-5)){
        console.log("Finded");
        xfood=Math.floor(Math.random()*700),yfood=Math.floor(Math.random()*400);
        food.setAttribute('style',`--xfood: ${xfood}px; --yfood: ${yfood}px;`);
        // var body3 = document.createElement("div");
        // body3.classList.add('grid');
        // snake.appendChild(body3);
    }
}

function endMyFunction(){
    flagdown=1;
    flagleft=1;
    flagright=1;
    flagup=1;
    textmsg.textContent = `Game Over`;
    newgame.setAttribute('style', `visibility : visible;`);
}
function newGame(){
    flagdown=0;
    flagleft=0;
    flagright=0;
    flagup=0;
    x=Math.floor(Math.random()*70);
    y=Math.floor(Math.random()*40);
    textmsg.textContent = ``;
    newgame.setAttribute('style', `visibility : hidden;`);
}

window.addEventListener('keydown', myFunction);
