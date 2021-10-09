const easyTask = document.getElementById('task-1')
var timer = 5;
var playerOrder = 1
//Choose 1 of 3 playing categories
function gameplayFunction(){
	orderPlayer()
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
	$('[card]').css('display', 'none') //hide cards
	$('#task-1').css('display', 'inline-block') //show first category question
	easyTask.innerText = questions[Math.floor(Math.random() * questions.length + 1)]
	console.log(questions) //SLUZI IBA NA TEST AKE CISLO PADNE AK JE UNDEFINED
}

function secondCategory(){
	$('#task-1').css('display', 'none') //show first category question
	$('[card]').css('display', 'inline-block') //show cards
}

function thirdCategory(){
	if(timer >= 0){
		document.getElementById('preparation-text').innerText = timer
		timer--
		setTimeout(thirdCategory, 1000)
	}else {
		$('#preparation-box').css('display', 'none')
		timer = 5;
		challenge()
	}
}

function challenge(){ //tu budu challgenes -> ulohy zadavat do database.js scriptu
}

function orderPlayer(){
	if(playerOrder < countPlayers) {
		document.getElementById('playerTurn').innerText = playerName[playerOrder]
		playerOrder++
	}
	if(playerOrder == countPlayers){
		playerOrder = 0
	}
}
