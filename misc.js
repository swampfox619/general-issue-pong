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
    var keysDown = {};
    
//    Event Listeners
    
    window.addEventListener("keydown", function(event){
        keysDown[event.keyCode] = true;
    });
    
    window.addEventListener("keyup", function(event){
        delete keysDown[event.keyCode];
    });

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
    
    Paddle.prototype.move = function (x, y){
        this.y += y;
        var yMax = canvas.height - this.height;
        if(this.y < 0){
            this.y = 0;
        }else if(this.y > yMax){
            this.y = yMax;
        }
    };
    
    function Player(){
        this.paddle = new Paddle(50, 267.5, 10, 130, 10);
    }
    
    function Computer(){
        this.paddle = new Paddle(910, 267, 10, 130, 10);
    }
    
    Player.prototype.render = function() {
        this.paddle.render();
    }
    
    Player.prototype.update = function() {
        for(var key in keysDown){
            var value = Number(key);
//            Down Arrow = 38, Up Arrow = 40
            if(value == 38) {
                this.paddle.move(0, -10)
            }else if(value == 40){
                this.paddle.move(0, 10)
            }else{
                alert("Press the UP ARROW for UP and the DOWN ARROW for DOWN to move your Paddle!")
            }
        }    
    };
    
    Computer.prototype.render = function() {
        this.paddle.render();
    }
    
    Computer.prototype.update = function(gameBall){
        var paddleCenter = this.paddle.y + (this.paddle.height/2);
        if(gameBall.y > paddleCenter){
            this.paddle.move(0, 5);
        }else if(gameBall.y < paddleCenter){
            this.paddle.move(0, -5);
        }else{    
        }
    };
    
//    Ball
    
    function Ball(x, y){
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.x_speed = 5; //Can accomdate speeds of 1,2,5,10,15
        this.y_speed = 1; //Can accomodate speeds of 1, 2, 5, 10, 15
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
    };

//    Variables
    
    var player = new Player();
    var computer = new Computer();
    var ball = new Ball(cCenterX, 500);
            
    var step = function(){
        update();
        render();
        animate(step);
    };

    var update = function(){
        player.update();
        computer.update(ball);
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
    };
    
})();