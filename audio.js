const audio = document.getElementById('audioId')
var mute = false
audio.src = 'audio/cube-1.wav'

function audioStop(){
    audio.pause()
    audio.currentTime = 0
}

function challengeCountDownAudio(){
    if (mute == false){
        audioStop()
        audio.src = 'audio/countdown.wav'
        audio.play()
    }
}

function taskAudio(){
    if (mute == false){
        audioStop()
        audio.src = 'audio/task.wav'
        audio.play()
    }
}

function duelAudio(){
    if (mute == false){
        audioStop()
        audio.src = "audio/duel.wav"
        audio.play()
    }
}

function cubeAudio(){
    if (mute == false){
        audioStop()
        audio.src = 'audio/cube-1.wav'
        audio.play()
    }
}

function challengeFailAudio(){
    if (mute == false){
        audioStop()
        audio.src = 'audio/challengeOOT.wav'
        audio.play()
    }
}

function challengeCorrectAudio(){
    if (mute == false){
        audioStop()
        audio.src = 'audio/challengeCorrect.wav'
        audio.play()
    }
}

function drinkAudio(){
    if (mute == false){
        audioStop()
        audio.src = 'audio/vypi.wav'
        audio.play()
    }
}

function clickAudio(){
    if (mute == false){
        audioStop()
        audio.src = 'audio/clickAudio.wav'
        audio.play()
    }
}

function muteFunction(){
    if (mute == false){
        mute = true
        $('#mute-button').css('display', 'none')
        $('#unmute-button').css('display', 'block')
    } else if (mute == true){
        mute = false
        $('#mute-button').css('display', 'block')
        $('#unmute-button').css('display', 'none')
    }
}
