console.log("Working");



var box = document.querySelector(`.snakebox`);
// console.log(box);
var snake = document.querySelector(`.snake`);
var textmsg = document.querySelector('.textmsg')
var newgame = document.querySelector(`.newgame`);
console.log(snake);

var x1 = Math.floor(Math.random()*750);
var y1 = Math.floor(Math.random()*450);
var x=Math.floor(Math.random()*700),y=Math.floor(Math.random()*400);
var flagup=0,flagdown=0,flagleft=0,flagright=0;
var deg = 0;
snake.setAttribute('style',`--x: ${x}px; --y: ${y}px;`);

function myFunction(e){
    switch(e.key){
        case 'ArrowUp':
            if(flagup==0){
                y=y-10;
                flagdown = 1;
                flagright = 0;
                flagleft = 0;
            }
            console.log("Up");
            if(y<0){
                endMyFunction();
            }else{ 
                flagy=0;
                console.log(y);
            }
            break;        
        case 'ArrowDown':
            if(flagdown==0){
                y=y+10;
                flagup = 1;
                flagright = 0;
                flagleft = 0;
            }
            console.log("Down");
            if(y>=488){
                endMyFunction();
            }else{ 
                flagy=0;
                console.log(y);
            }
            break;        
        case 'ArrowLeft':
            if(flagleft==0){
                x=x-10;
                flagup = 0;
                flagright = 1;
                flagdown = 0;
                console.log(x);
            }
            console.log("Left");
            if(x<0){
                endMyFunction();
            }else{ 
                flagx=0;
                console.log(x);
            }
            break;    
        case 'ArrowRight':
            if(flagright==0){
                x=x+10;
                flagup = 0;
                flagleft = 1;
                flagdown = 0;
            }
            console.log("Right");
            if(x>=765){
                endMyFunction();
            }else{ 
                flagx=0;
                console.log(x);
            }
            break;
        default :
            console.log("Enter arrow Key");
    }

    snake.setAttribute('style',`--x: ${x}px; --y: ${y}px;`);
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
