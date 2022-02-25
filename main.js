//random number selection
//users input && click go
//if user is correct -> Great
//if random number < -> down
//if random number > -> up
//reset -> reset
// 5 trial == button disable
// if out of range -> say between 1-100 + no chance decrease
// if same number - say retry , no chance decrease

let computerNumber = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history =[]


playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus", function(){userInput.value=""});


function pickRandomNumber(){
    computerNumber = Math.floor(Math.random()*100)+1;
    console.log(computerNumber)
}
pickRandomNumber()
function play(){
    let userValue = userInput.value;
    if(userValue<1 || userValue >100){
        resultArea.textContent="Choose Between 1 ~ 100"
        return;
    }
    if(history.includes(userValue) == true){
        resultArea.textContent="Please Input Different Number"
        return;
    }    
    chances--
    chanceArea.textContent=`Remaining Chances ${chances}`;


    if(userValue < computerNumber){
        resultArea.textContent = "UP"
    }
    else if(userValue > computerNumber){
        resultArea.textContent = "Down"
    }
    else{
        resultArea.textContent = "Correct"
        gameOver=true;
    }

    history.push(userValue)


    if (chances <1){
        gameOver = true;
    }
    if (gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    //user input resets
    userInput.value = "";
    pickRandomNumber();
    resultArea.textContent = "Pick your number";
    gameOver = false;
    playButton.disabled = false;
    chances = 5
    chanceArea.innerHTML = `Remaining Chances ${chances}`;
    userValue =[]
}

pickRandomNumber();