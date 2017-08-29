(function(){

    var canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");
    canvas.width = 960;
    canvas.height = 660;
    var cHeight = canvas.height;
    var cWidth = canvas.width;
    var cCenterX = cWidth /2;
    var cCenterY = cHeight /2;
    var paddleStartPositionY = cCenterY - 125/2;
    var speed = 10;


//    Paddle and Players
    
    function Paddle(x, y, width, height, speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    Paddle.prototype.render = function (){
        c.fillStyle = 'white';
        c.fillRect(this.x, this.y, this.width, this.height)
    };
    
    function Player(){
        this.paddle = new Paddle(50, 267.5, 10, 130, 10);
    }
    
    function Computer(){
        this.paddle = new Paddle(910, 267.5, 10, 130, 10);
    }
    
    Player.prototype.render = function() {
        this.paddle.render();
    }
    
    Player.prototype.update = function() {    
        this.paddle.render();
    };
    
    Computer.prototype.render = function() {
        this.paddle.render();
    }
    
//    Ball
    
    function Ball(x, y){
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.x_speed = -2; //Can accomdate speeds of 1,2,5,10,15
        this.y_speed = 0; //Can accomodate speeds of 1, 2, 5, 10, 15
    };
    
    Ball.prototype.render = function(){
        c.beginPath;
        c.fillStyle = 'white';
        c.fillRect (this.x, this.y, this.width, this.height);  
    };
    
    Ball.prototype.update = function(paddle1, paddle2) {
        this.x += this.x_speed;
        this.y += this.y_speed;
            
        if(this.y == 0 || this.y == 660){                                    //hitting top and bottom walls
            this.y_speed = -this.y_speed;
        }
        if(this.x == 60){
            if(paddle1.y <= this.y && this.y <= (paddle1.height + paddle1.y)){
                this.x_speed = -this.x_speed;
            }
        }
        if(this.x == 900){
            if(paddle2.y <= this.y && this.y <= (paddle2.height + paddle2.y)){
                this.x_speed = -this.x_speed;
            }
        }
        console.log(this.x)
    };

//    Variables
    
    var player = new Player();
    var computer = new Computer();
    var ball = new Ball(cCenterX, 500);
        

    function myEventHandler(event){
            if(event.keyCode == 84){
                if(player.paddle.y >= 7.5){
                    player.paddle.y -= 10;
                    console.log(player.paddle.y);
                }else{
                    player.paddle.y -= 0;
                }
            }else if (event.keyCode == 71){
                if(player.paddle.y < 527.5){
                    player.paddle.y += 10;
                    console.log(player.paddle.y);
                }else{
                    player.paddle.y += 0;
                }
            }else{
                alert("Press the T for UP and G for DOWN to move your paddle!")
            }
        };
    
    
    var step = function(){
        update();
        render();
        animate(step);
    };

    var update = function(){
        player.update();
        ball.update(player.paddle, computer.paddle);    
    };
    
    var render = function() {
        c.fillStyle = "black";
        c.fillRect(0,0, canvas.width, canvas.height)
        player.render();
        computer.render();
        ball.render();
    }
    
    var animate = window.requestAnimationFrame ||
        function(step) { 
            window.setTimeout(step, 1000/60) 
        };


    window.onload = function (){
        animate(step);
        window.addEventListener("keydown", myEventHandler, false);
    };
    
})();