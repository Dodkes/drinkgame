const easyTask = document.getElementById('task-1')
const challengeText = document.getElementById('challenge-text')
var cardsText = document.getElementById('cards-text')
var timer = 5
var playerOrder = 0
var switchCase = 1
var challengeBar = 100
var timeFunction
var oponent
//Choose 1 of 3 playing categories
function gameplayFunction(){
	$('#cards-container').css('display', 'none') //display none pre kategoriu s kartami
	var random = Math.floor(Math.random() *3 + 1)
	switch(random){
		case 1:
		firstCategory() //Sentences, questions
			break
		case 2:
		secondCategory() //3 Cards with options
			break
		case 3:
		thirdCategory() //10 seconds challenge
		$('#preparation-box').css('display', 'block')
			break
	}
}

function firstCategory(){
	$('.task-icon-container').css('display', 'block')
	resetPlayerOrderVariable()
	players[playerOrder].playerPoints += cubeNumber //TOTO PRIDAT DO FIRST CATEGORY -> RESP TAM KDE SA MAJU PRIDAT BODY
	orderPlayer()
	switchPlayer()
	cubeUsable = true
	$('#challenge-container').css('display', 'none')
	$('[card]').css('display', 'none') //hide cards
	$('#task-1').css('display', 'inline-block') //show first category question
	easyTask.innerText = questions[Math.floor(Math.random() * questions.length)]
	drinkAudio()
}

function secondCategory(){
	resetPlayerOrderVariable()
	$('#challenge-container').css('display', 'none')
	$('#task-1').css('display', 'none')
	$('[card]').css('display', 'inline-block') //show cards
}

function thirdCategory(){
	resetPlayerOrderVariable()
	$('#challenge-container').css('display', 'none')
	if(timer >= 0){
		document.getElementById('preparation-text').innerText = timer
		timer--
		challengeCountDownAudio()
		setTimeout(thirdCategory, 1000)
	} else {
		timer = 5;
		challenge()
	}
}

function challenge() { //tu budu challgenes -> ulohy zadavat do database.js scriptu
	$('#preparation-box').css('display', 'none')
	challengeText.innerText = challengeTasks[Math.floor(Math.random() * challengeTasks.length)]
	$('#challenge-container').css('display', 'block')
	challengeTimer()
}

function challengeTimer() {
if(challengeBar >= 0){
	challengeBar--
	$('.progress-bar').css('width', challengeBar + '%')
	timeFunction = setTimeout(challengeTimer, 100)
} else {
	orderPlayer()
	switchPlayer()
	challengeBar = 100
	$('#challenge-container').css('display', 'none')
	easyTask.innerText = 'Čas vypršal !'
	cubeUsable = true
	$('#task-1').css('display', 'inline-block')
	challengeFailAudio()
	}
}
//SWITCH TOP NAMES
function orderPlayer(){
	resetPlayerOrderVariable()
	easyTask.style.color = 'white'
	if(playerOrder < countPlayers) {
		updateDisplay()
		playerOrder++ 
	}
	resetPlayerOrderVariable()
}

function updateDisplay(){
	var rewrite = document.getElementById('playerNumber-' + playerOrder)
	rewrite.innerText = players[playerOrder].playerName + ' : ' + players[playerOrder].playerPoints + 'b'
}

//SWITCH LEFT DIV
function switchPlayer(){
	if (switchCase < countPlayers) {
		document.getElementById('playerTurn').innerText = players[switchCase].playerName
		switchCase++
		if(switchCase == countPlayers) {
			switchCase = 0
		}
	}
}

function task(){
	$('[winner-button-1]').css('display', 'none')
	$('[winner-button-2]').css('display', 'none')
	players[playerOrder].playerPoints += cubeNumber
	orderPlayer()
	switchPlayer()
	cardSelectDisplay()
	$('.fa-exclamation').css('display', 'block')
	cardsText.innerText = tasks[Math.floor(Math.random() * tasks.length)]
	cubeUsable = true
	taskAudio()
}

function fact(){
	$('[winner-button-1]').css('display', 'none')
	$('[winner-button-2]').css('display', 'none')
	players[playerOrder].playerPoints += cubeNumber
	orderPlayer()
	switchPlayer()
	cardSelectDisplay()
	$('.fa-theater-masks').css('display', 'block')
	cardsText.innerText = facts[Math.floor(Math.random() * facts.length)]
	cubeUsable = true
}

function cardSelectDisplay(){
	$('.exclamation').css('display', 'none')
	$('.interpreting').css('display', 'none')
	$('.mask').css('display', 'none')
	$('[card]').css('display', 'none')
	$('#cards-container').css('display', 'block') //display none pouzit pre aby zmizlit kartove ulohy
}

//Challenge in-time button-------------------------------------------
$('.challenge-complete-button').click(()=>{
	clearTimeout(timeFunction)
	players[playerOrder].playerPoints += cubeNumber
	orderPlayer()
	switchPlayer()
	challengeBar = 100
	cubeUsable = true
	$('#challenge-container').css('display', 'none')
	easyTask.innerText = 'Challenge splnená v čase !'
	easyTask.style.color = 'lightgreen'
	$('#task-1').css('display', 'inline-block')
	challengeCorrectAudio()
})

function resetPlayerOrderVariable(){
	if(playerOrder == countPlayers){ //countPlayers - 1
		playerOrder = 0
	}
}

//CARDS-------------------------------------------
function duelGame(){
	cardSelectDisplay() // function for hiding all cards only
	$('.fa-american-sign-language-interpreting').css('display', 'block')
	oponent = Math.floor(Math.random() * players.length)
	while (oponent == playerOrder) {
	oponent = Math.floor(Math.random() * players.length)
	}
	$('[winner-button-1]').css('display', 'inline-block')
	$('[winner-button-2]').css('display', 'inline-block')
	$('[winner-button-1]').text(players[playerOrder].playerName)
	$('[winner-button-2]').text(players[oponent].playerName)
	cardsText.innerText = duel[Math.floor(Math.random() * duel.length)] + ' s hráčom ' + players[oponent].playerName
	duelAudio()
}

//First winner
$('[winner-button-1]').click(()=>{
	players[playerOrder].playerPoints += cubeNumber
	players[oponent].playerPoints -= cubeNumber
	updateDisplay()
	updateOponentDisplay()
	switchPlayer()
	orderPlayer()
	cubeUsable = true
	$('#cards-container').css('display', 'none')
})
//Second winner
$('[winner-button-2]').click(()=>{
	players[playerOrder].playerPoints -= cubeNumber
	players[oponent].playerPoints += cubeNumber
	updateDisplay()
	updateOponentDisplay()
	switchPlayer()
	orderPlayer()
	cubeUsable = true
	$('#cards-container').css('display', 'none')
})

function updateOponentDisplay(){
	var rewriteOponent = document.getElementById('playerNumber-' + oponent)
	rewriteOponent.innerText = players[oponent].playerName + ' : ' + players[oponent].playerPoints + 'b'
}