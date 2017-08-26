

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
canvas.width = 960;
canvas.height = 660;
var cHeight = canvas.height;
var cWidth = canvas.width;
var cCenterX = cWidth /2;
var cCenterY = cHeight /2;
var paddleStartPositionY = cCenterY - 125/2;






function Paddle(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

function Ball(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

Paddle.prototype.render = function (){
    c.beginPath;
    c.fillStyle = 'white';
    c.fillRect(this.x, this.y, this.width, this.height)
};

Ball.prototype.render = function(){
    c.beginPath;
    c.fillStyle = 'white';
    c.fillRect (this.x, this.y, this.width, this.height);
}

var player = new Paddle(50, paddleStartPositionY, 10, 125);
var computer = new Paddle((canvas.width-50), paddleStartPositionY, 10, 125);
var gameBall = new Ball(cCenterX, cCenterY, 10, 10);


    
var render = function() {
    player.render();
    computer.render();
    gameBall.render();
}

window.onload = function (){
    render();
}