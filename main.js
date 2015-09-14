var moveArray = [[],[]];

var Move = function(number, pointsGained, pointsLost){
  this.numberPicked = number;
  this.pointsGained = pointsGained || 0;
  this.pointsLost = pointsLost || 0;
};

var playerChoice = alert();
