var timeUp = false;
var level = 0;
var levels = [
{minScore: 20, color: "purple", timer: 5000},
{minscore: 40, color: "green", timer: 3000}
]

var timer = function () {
  timeUp = false;
  var now = Date.now();
  var end = now + 30000;
  var didYouWin = true;
  while(now < end){
    now = Date.now();
  }
  //if timer reaches zero
  didYouWin = false;
  timeUp = true; 
  alert('Time Up!');
  endLevel(didYouWin); //pass it loss condition
};

var endLevel = function (didYouWin) {
  //render something depending on win state
  //clear screen
  if(didYouWin){
    alert('You Win! Get ready for the next level!');
    var nextLevel = level++;
    startup();;
  }else{
    alert('You Lose! Back to Level 1');
    level = 0;
    startup();
  }
};


var initLevel = function (ctx, level) {
  //timer();
  var finalCountDown = addRect(ctx, level.color, level.timer);
  setInterval(finalCountDown,33);
};