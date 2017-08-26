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

    function Paddle(x, y, width, height, speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
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

//        this.move = function(speed){
//            if(y + speed < 0){
//                this.y = 0
//            }else if(y + speed > 535){
//                this.y = 535
//            }else{
//                this.y += speed;
//            }
//        };
    };

    Ball.prototype.render = function(){
        c.beginPath;
        c.fillStyle = 'white';
        c.fillRect (this.x, this.y, this.width, this.height);
    }

    var player = new Paddle(50, paddleStartPositionY, 10, 130, 10);
    var computer = new Paddle((canvas.width-50), paddleStartPositionY, 10, 125, 10);
    var gameBall = new Ball(cCenterX, cCenterY, 10, 10);

    function myEventHandler(event){
        if(event.keyCode == 84){
            if(player.y >= 7.5){
                player.y -= player.speed;
                console.log(player.y);
            }else{
                player.y -= 0;
            }
        }else if (event.keyCode == 71){
            if(player.y < 527.5){
                player.y += player.speed;
                console.log(player.y);
            }else{
                player.y += 0;
            }
        }else{
            alert("Press the T for UP and G for DOWN to move your paddle!")
        }
    };
    

    var render = function() {
        player.render();
        computer.render();
        gameBall.render();
    }



    var step = function(){
        c.clearRect(0, 0, 960, 660);
        animate(step);
        render();
    };

    var animate = window.requestAnimationFrame ||
        function(step) { 
            window.setTimeout(step, 1000/60) 
        };


    window.onload = function (){
        step();
        render();
        window.addEventListener("keydown", myEventHandler, false);
    };
    
})();
