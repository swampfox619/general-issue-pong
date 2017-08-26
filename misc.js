//playerOnePaddle.update = function(){
//    window.addEventListener('mousemove',
//        function(event){
//            this.PaddleY = event.y;
//        })
//}

//var mouse = {
//    x: undefined,
//    y: undefined
//}
//
//window.addEventListener('mousemove', 
//    function(event){
//        mouse.x = event.x;
//        mouse.y = event.y;
//        console.log(mouse);
//})


//var x = 200;
//var y = 200;
//var dx = 5;
//var dy = 5;
//
//
////function ball(){
////    this.radius = 10;
////    c.beginPath();
////    c.arc(x, y, radius, 0, Math.PI * 2, false);
////    c.strokeStyle = 'white';
////    c.lineWidth = 15;
////    c.stroke();
////    
////    this.update = function(){
////        if(x + radius > canvas.width || x - radius < 0){
////            dx = -dx;
////        }
////        
////        if( y + radius > canvas.height || y - radius < 0){
////            dy = -dy;
////        }
////
////        x += dx;
////        y += dy;    
////    }
////    this.update();
////}
//
//
//
//function animate() {
//    requestAnimationFrame(animate);
//    c.clearRect(0, 0, 960, 660)
//    ball();
//    playerOnePaddle.draw();
//    playerTwoPaddle.draw();
//    centerLine.draw();
//    
//}
//
//animate();