function Ball(x,y, paddle1, paddle2) {
  this.x = 0;
  this.y = 0;
}

Ball.prototype.randomDirection = function() {
  this.x = math.random()*this.x*Math.PI;
  this.y = math.random()*this.y*Math.PI;

};

Ball.prototype.move = function(){
  this.x += Ball.x;
  this.y += Ball.y;
};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};
