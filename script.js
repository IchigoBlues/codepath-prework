// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const min = 1;
const max = 5;

//Global Variables
var clueHoldTime = 2000; //how long to hold each clue's light/sound
var pattern = [1, 1, 1, 1, 1, 1, 1, 1]; //The 1s are just placeholders, a random pattern is set when the game starts.
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var strikesCounter = -1;
var audio = document.getElementById("sound1");
var timeLeft = 15;
var maxTime = 15;
var int;
clearInterval(int);

function startGame(){
    //initialize game variables
  clueHoldTime = 2000;
  strikesCounter = 0;
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  resetStrikes();
  setPattern();
  playClueSequence();
  // setTimeout(startTimer, clueHoldTime);
}

function stopGame(){
    window.clearInterval(int)
    clearTimeout(int)
    document.getElementById("count").innerHTML = maxTime;
    resetStrikes()
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

//Gets a random integer between the min and max, inclusive (1, 5). Check doc for source
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

//My own function for setting the pattern
function setPattern() {
  for(let i=0;i<pattern.length;i++){
    pattern[i] = getRandomIntInclusive(min, max);
  } 
}

function increaseScore() {
  var strikes = document.getElementById("strikes");
  strikesCounter++;
  strikes.innerHTML = "Strikes: " + strikesCounter;
}

function resetStrikes() {
   var strikes = document.getElementById("strikes");
   strikes.innerHTML = "Strikes: " + 0;
}

function countDown() {
  timeLeft -= 1;
  document.getElementById("count").innerHTML = timeLeft;
  
  // if no time left, lose()
  if (timeLeft == 0) {
    clearInterval(int);
    loseGame();
  }
  
  if (gamePlaying == false) {
    window.clearInterval(int);
  }
  
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  clueHoldTime -= 100;

  let totalDelay = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    
    delay += clueHoldTime; 
    delay += cluePauseTime;
    
  }
  
  if(clueHoldTime <= 500) {
    clueHoldTime = 500;
  }
  
  setTimeout(startTimer, delay);
  
}

function startTimer() {
  timeLeft = maxTime;

  window.int = window.setInterval(countDown, 1000);
  
}


function guess(btn){
  
  var totalTurns = pattern.length-1
  
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(strikesCounter < 2) {
    if(pattern[guessCounter] == btn) {
      if(guessCounter == progress){
        if(progress == totalTurns){
          winGame();
        }else{
          progress++;
          playClueSequence();
          window.clearInterval(int);
          clearTimeout(int)
          document.getElementById("count").innerHTML = 15;

        }
      }else{
        guessCounter++;
      }
    }else{
      increaseScore();
      playClueSequence();
      window.clearInterval(int);
      clearTimeout(int)
      document.getElementById("count").innerHTML = 15;
    }
  }else{
    increaseScore();
    loseGame();
  }  
}

// Sound Synthesis Functions
const freqMap = {
  1: 200.3,
  2: 241.2,
  3: 420,
  4: 569.2
}


function playTone(btn,len){ 
  // o.frequency.value = freqMap[btn]
  // g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  startTone(btn)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    // o.frequency.value = freqMap[btn]
    // g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    if(btn == 1){
      audio = document.getElementById("creeper");
      audio.play();
    }else if (btn == 2){
      audio = document.getElementById("zombie");
      audio.play();
    }else if (btn == 3){
      audio = document.getElementById("enderman");
      audio.play();
    }else if (btn == 4){
      audio = document.getElementById("spider");
      audio.play();
    }else if (btn == 5){
      audio = document.getElementById("skeleton");
      audio.play();
    }
    tonePlaying = true
  }
}

function stopTone(){
  //g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  audio.currentTime = 0;
  audio.pause();
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function loseGame(){
  window.clearInterval(int);
  stopGame();
  alert("Game Over. You lost.");
  
  timeLeft = maxTime;
  document.getElementById("count").innerHTML = timeLeft;
}

function winGame(){
  window.clearInterval(int);
  stopGame();
  alert("Game Over. You won!");
  timeLeft = maxTime;
  document.getElementById("count").innerHTML = timeLeft; 
}