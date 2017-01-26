var board = new Board();


$('#start').on('click', function(){
  board.start();
  activatePaddle2();
  var game = setInterval(updateState, 3000);
  renderGame();
});

function updateState(){
  ball.move();
}

$(document).on('keydown', function(e){
});

function activatePaddle2() {
}

function renderGame(){
}

function renderScore(){
}

function renderBall(){

}

function renderPaddle(){
}
