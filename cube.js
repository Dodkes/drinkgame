//CANVAS VARIABLES
var myCanvas = document.getElementById('cube') //canvas get
var ctx = myCanvas.getContext('2d') // canvas pen
ctx.fillStyle = 'black' // canvas pen color
const circle = 2 * Math.PI
var cubeSpeed = 0
var cubeNumber
var cubeUsable = true

cube.addEventListener('click', ()=>{
    if(cubeUsable == true){
        clearGamePlace() //clears game place when cube is working-> cards, tasks etc.
        cubeUse()
        cubeUsable = false // FIXNUT NA FALSE !!!!!!!!!!!!!!!!!!!!!!!!!
    }
})

function cubeUse(){
    clearCanvas() //clears the canvas (cube)
    switch (Math.floor(Math.random()*6 + 1)){
        case 1:
            draw(myCanvas.width/2, myCanvas.height/2, 20, 0, circle)
            cubeNumber = 1
            break
       case 2:
            draw(myCanvas.width/4, myCanvas.height/1.3, 20, 0, circle)
            draw(myCanvas.width/1.3, myCanvas.height/4, 20, 0, circle)
            cubeNumber = 2
            break
        case 3:
            draw(myCanvas.width/4, myCanvas.height/1.3, 20, 0, circle); // left top
            draw(myCanvas.width/2, myCanvas.height/2, 20, 0, circle); // middle
            draw(myCanvas.width/1.3, myCanvas.height/4, 20, 0, circle); // right top
            cubeNumber = 3
            break
        case 4:
            draw(myCanvas.width/1.3, myCanvas.height/4, 20, 0, circle); // right top
            draw(myCanvas.width/4, myCanvas.height/4, 20, 0, circle); // left top
            draw(myCanvas.width/4, myCanvas.height/1.3, 20, 0, circle) // left bottom
            draw(myCanvas.width/1.3, myCanvas.height/1.3, 20, 0, circle) // right bottom
            cubeNumber = 4
            break
        case 5:
            draw(myCanvas.width/1.3, myCanvas.height/4, 20, 0, circle); // right top
            draw(myCanvas.width/4, myCanvas.height/4, 20, 0, circle); // left top
            draw(myCanvas.width/4, myCanvas.height/1.3, 20, 0, circle) // left bottom
            draw(myCanvas.width/1.3, myCanvas.height/1.3, 20, 0, circle) // right bottom
            draw(myCanvas.width/2, myCanvas.height/2, 20, 0, circle); // middle
            cubeNumber = 5
            break
        case 6:
            draw(myCanvas.width/1.3, myCanvas.height/4, 20, 0, circle); // right top
            draw(myCanvas.width/4, myCanvas.height/4, 20, 0, circle); // left top
            draw(myCanvas.width/4, myCanvas.height/1.3, 20, 0, circle) // left bottom
            draw(myCanvas.width/1.3, myCanvas.height/1.3, 20, 0, circle) // right bottom
            draw(myCanvas.width/1.3, myCanvas.height/2, 20, 0, circle) // right middle
            draw(myCanvas.width/4, myCanvas.height/2, 20, 0, circle) // left middle
            cubeNumber = 6
            break
    }
    if(cubeSpeed < 500){
        cubeSpeed += 100;
        setTimeout(cubeUse, cubeSpeed);
    } else {
        cubeSpeed = 0;
        gameplayFunction() //Runs gameplay.js script when cube finishes randomning
    }
}

function draw(x, y, r, sAngle, eAngle){
    ctx.beginPath(); // path musi byt zresetovana, inak vsetky vytvorene arc metody sa budu spajat
    ctx.arc(x, y, r, sAngle, eAngle); // vzorec
    ctx.fill()
}

function clearCanvas(){
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)
}

function clearGamePlace(){
        $('[card]').css('display', 'none')
        $('#task-1').css('display', 'none')
        $('#preparation-box').css('display', 'none')
}