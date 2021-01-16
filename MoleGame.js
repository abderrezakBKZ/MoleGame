let grid = document.getElementsByClassName ('grid')
let square = document.querySelectorAll (".square")
let mole = document.querySelectorAll (".mole")
let timeLeft = document.getElementById("time-left")
let score = document.getElementById("score")

let result = 0
let currentTime = timeLeft.textContent 
function randomSquare () {
    square.forEach(className => {
        className.classList.remove ('mole')
    })
     randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')
     if (currentTime === 0)
     {
         randomPosition.classList.remove ('mole')
     }
    //la position du mode
    hitPosition = randomPosition.id
}

square.forEach (id => {
    id.addEventListener ('mouseup', () =>{
        if (id.id === hitPosition && currentTime >0)
        {
            result+=1
            score.textContent = result
        }
    })
})


function countDown ()
{
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime === 0)
    {
        clearInterval (timerId)
        alert ('GAME OVER ! your score is : '+ result)
        
        
    }
    
}
let timerId = setInterval (countDown, 1000)


function moveMole () {
     let timerId 
     
    timerId =setInterval (randomSquare,1000)
}
moveMole ()







