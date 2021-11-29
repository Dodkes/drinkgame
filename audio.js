const audio = document.getElementById('audioId')
audio.src = 'audio/cube-1.wav'

function audioStop(){
    audio.pause()
    audio.currentTime = 0
}

function challengeCountDownAudio(){
    audioStop()
    audio.src = 'audio/countdown.wav'
    audio.play()
}

function taskAudio(){
    audioStop()
    audio.src = 'audio/task.wav'
	audio.play()
}

function duelAudio(){
    audioStop()
	audio.src = "audio/duel.wav"
	audio.play()
}

function cubeAudio(){
    audioStop()
    audio.src = 'audio/cube-1.wav'
    audio.play()
}

function challengeFailAudio(){
    audioStop()
    audio.src = 'audio/challengeOOT.wav'
    audio.play()
}

function challengeCorrectAudio(){
    audioStop()
    audio.src = 'audio/challengeCorrect.wav'
    audio.play()
}

function drinkAudio(){
    audioStop()
    audio.src = 'audio/vypi.wav'
    audio.play()
}

function clickAudio(){
    audioStop()
    audio.src = 'audio/clickAudio.wav'
    audio.play()
}