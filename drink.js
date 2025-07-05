var countPlayers = 0;
var emptyInputs = 0;
var players = [];
const adultModeButton = document.querySelector(".btn-18-plus");
let isAdultMode = false;

class Player {
  constructor(playerName, playerPoints) {
    this.playerName = playerName;
    this.playerPoints = playerPoints;
  }
}

//Choosing number of players
function game(x) {
  $("body").css("overflow", "auto");
  clickAudio();
  $("body").css(
    "background",
    "linear-gradient(-45deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  );
  $(".intro").css("display", "none");
  $(".set-names").css("display", "block");
  countPlayers = x;

  for (i = 1; i < x + 1; i++) {
    let newInput = document.createElement("input");
    newInput.setAttribute("id", i);
    newInput.setAttribute("placeholder", "Hráč " + i);
    $(".players").append(newInput);
  }
}
//Start game button click
function startGame() {
  clickAudio();
  inputsReset();
  emptyInputs = 0;
  for (j = 0; j < countPlayers; j++) {
    var getInputId = document.getElementById(j + 1);
    if (!getInputId.value) {
      inputsReset();
    } else {
      var playerNames = document.createElement("p");
      playerNames.setAttribute("id", "playerNumber-" + j);
      players.push(new Player(getInputId.value, 0));
      playerNames.innerText =
        players[j].playerName + " : " + players[j].playerPoints + "b";
      $("#playerLayout").append(playerNames);
    }
  }
  if (emptyInputs > 0) {
    $(".alert").css("display", "block");
  } else if (emptyInputs == 0) {
    $(".intro").css("display", "none");
    $(".set-names").css("display", "none");
    $(".gameplay").css("display", "block");
    document.getElementById("playerTurn").innerText = players[0].playerName;
    $("body").css("overflow", "hidden");
  }
}

//Remove all created inputs
function inputsReset() {
  let cont = document.getElementById("playerLayout");
  while (cont.firstChild) {
    cont.removeChild(cont.firstChild);
  }
  players = [];
  emptyInputs++;
}

adultModeButton.addEventListener("click", () => {
  clickAudio();
  isAdultMode = !isAdultMode;
  if (isAdultMode) {
    adultModeButton.innerText = "18+ mód zapnutý";
    adultModeButton.style.backgroundColor = "rgb(26, 140, 26)";
  } else {
    adultModeButton.innerText = "18+ mód vypnutý";
    adultModeButton.style.backgroundColor = "rgba(252, 61, 61, 1)";
  }
  console.log(isAdultMode);
});
