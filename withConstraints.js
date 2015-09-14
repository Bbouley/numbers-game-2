var playerNums = [1,2,3,4,5,6,7,8,9,10];
var computerNums = [1,2,3,4,5,6,7,8,9,10];

var playerMoves = [];
var computerMoves = [];

var playerPoints = 0;
var computerPoints = 0;

var computerArrayTotal = null;
var playerArrayTotal = null;

var win = false;

var playerNum = 0;
var computerNum = 0;
var turnCounter = 0;
// // console.log(computerNum);

function arrayTotal(array){
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    if(typeof array[i] === 'number'){
      total += array[i];
    }
  }
  return total;
}

function removeNums(playerNum, computerNum){
  var playerIndex = playerNums.indexOf(playerNum);
  playerMoves.push(playerNums[playerIndex]);
  playerNums.splice(playerIndex, 1, 'removed');
  console.log('player numbers :' + playerNums);
  var computerIndex = computerNums.indexOf(computerNum);
  computerNums.splice(computerIndex, 1, 'removed');
  console.log('computer numbers : ' +computerNums);
}

function score(playerNum, computerNum){
  if(playerNum < computerNum-1){
    playerPoints += 1;
  } else if (computerNum < playerNum-1){
    computerPoints += 1;
  } else if (playerNum === computerNum-1){
    computerPoints +=2;
  } else if (computerNum === playerNum-1){
    playerPoints +=2;
  }
  console.log('Player Points : ' +playerPoints);
  console.log('Computer Points : ' + computerPoints);
  turnCounter += 1;
  playerNum = null;
  if(playerPoints >= 5 || computerPoints >= 5){
    win = true;
    var playerMoves = [];
    var computerMoves = [];
    return 'Game Over';
  }
}

function nextMove(){
  playerNum = parseInt(prompt('Your Number?'));
  while (playerMoves.indexOf(playerNum) >= 0){
    playerNum = parseInt(prompt('already picked, try again'));
  }
  if(turnCounter === 0){
    computerNum = Math.floor((Math.random()*4)+3);
  } else if (computerArrayTotal <= playerArrayTotal){
    computerNum = findBestLowNum(computerNums, playerNums);
  } else if (playerArrayTotal < computerArrayTotal){
    computerNum = findBestHighNum(computerNums, playerNums);
  }
}

function playGame(){
  nextMove();
  console.log('playerArrayTotal : ' + playerArrayTotal);
  console.log('computerArraytotal : ' + computerArrayTotal);
  console.log('computer number : '  + computerNum);
  console.log('playerNum : '  + playerNum);
  removeNums(playerNum, computerNum);
  playerArrayTotal = arrayTotal(playerNums);
  computerArrayTotal = arrayTotal(computerNums);
  score(playerNum, computerNum);
}

function findBestLowNum(computerArray, playerArray){
  var number = 1;
  for (var i = 0; i < computerArray.length; i++) {
    if( i!== 0 && computerArray[i] > number && playerArray.indexOf(i) === -1){
      number = computerArray[i];
    } else if (computerArray[number-1] === 'removed'){
      for (var j = 0; j < computerArray.length; j++) {
        if(computerArray[i] > number){
          number = computerArray[i];
          return number;
        }
      }
    }
  }
  return number;
}

function findBestHighNum(computerArray, playerArray){
  var number = 1;
  for (var i = computerArray.length-1; i >=0; i--) {
    if(computerMoves.indexOf(1) === -1 && playerMoves.indexOf(1) >= 0 ){
      number = 1;
      return number;
    } else if(computerArray[i] > number && playerArray.indexOf(i) !== -1 && i !== 0){
      number = computerArray[i];
    } else if (computerArray[i] >= number){
      number = computerArray[i];
    }
  }
    return number;
}


while(win === false){
  playGame();
}




