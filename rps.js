const compChoices = ['rock', 'paper', 'scissors']
const rockBtn = document.querySelector('#rock')
const scissorsBtn = document.querySelector('#scissors')
const paperBtn = document.querySelector('#paper')
const playBtn = document.querySelector('#playBtn')
const btns = document.querySelectorAll('.btns')

const compScreen = document.querySelector('.computerDiv')
const playerscreen = document.querySelector('.playerDiv')

const cPaperDiv = document.querySelector('.cPaperDiv')
const cRockDiv = document.querySelector('.cRockDiv')
const cScisorsDiv = document.querySelector('.cScissorsDiv')

const scissorsDiv = document.querySelector('.scissorsDiv')
const paperDiv = document.querySelector('.paperDiv')
const rockDiv = document.querySelector('.rockDiv')

function computerChoose() {
    const it = Math.floor(Math.random()*3)
        return( compChoices[it] )
}

function playerChoose(p) {
    let f = p.toLocaleLowerCase()

    if(f === 'rock') { return('rock') }
    else if(f === 'paper') { return('paper')}
    else if(f === 'scissors') { return('scissors')}
    else{ return('Invalid Input')}
}

//A single Round Of RPS
function rPs(p) {
    c = computerChoose()
    playerChoose(p)

    if(c === 'rock' && p ==='paper' || c === 'paper' && 
        p === 'scissors' || c === 'scissors' && p ==='rock' ) {
        return('Player Wins')
    } 

    if(c === 'paper' && p ==='rock' || c === 'scissors' && 
        p === 'paper' || c === 'rock' && p ==='scissors' ) {
        return('Computer Wins')
    }

    if(p === c) {
        return('Its A Tie')
    }

    if(p ==='Invalid Input') {
        return('Input Is Boogus')
    }
}

//Multiple Rounds Of RPC
function mRPC() {
 let pScore = 0
 let cScore = 0
    for(let i = 0; i < 5; i++){
        let r = rPs()

        if(r.startsWith('Computer')) {
            cScore += 1
        }

        if(r.startsWith('Player')) {
            pScore += 1
        }

        console.log(r)
    }
   
 if(pScore == cScore){
    console.log('Its A Draw')
 } else if(pScore > cScore) 
    {
    console.log('Player Wins Multiple')
 } else {
    console.log('Computer Wins Multiple')
 }
 console.log(`playerScore: ${pScore}, computerScore: ${cScore}`)
}


//browswe Gui Rock Paper Scissors Game
function guiRPC() {

  let cAppended = false;
  let appended = false;

    btns.forEach(e =>{
        e.addEventListener('click', () =>{
          let p = document.createElement('p')
          let cP = document.createElement('p')
           p.classList.add('a') 
            let i = e.id
            let cC = computerChoose()
            let pC = playerChoose(e.id)
            console.log(i)
            console.log(cC)
            
            if(cC === 'paper') {
              if(cAppended === true){
                compScreen.children[3].remove()
              }
              cP.textContent = 'Computer Chose Rock'
              compScreen.appendChild(cP)
              cAppended = true
              

              cPaperDiv.style.backgroundColor = 'yellow'
              cRockDiv.style.backgroundColor = 'transparent'
              cScisorsDiv.style.backgroundColor = 'transparent'


            }
            if(cC === 'rock') {
              if(cAppended === true){
                compScreen.children[3].remove()
              }
              cP.textContent = 'Computer Chose Rock'
              compScreen.appendChild(cP)
              cAppended = true

              cPaperDiv.style.backgroundColor = 'transparent'
              cRockDiv.style.backgroundColor = 'yellow'
              cScisorsDiv.style.backgroundColor = 'transparent'

            }
            if(cC === 'scissors') {
              if(cAppended === true){
                compScreen.children[3].remove()
              }
              cP.textContent = 'Computer Chose Scissors'
              compScreen.appendChild(cP)
              cAppended = true

              cPaperDiv.style.backgroundColor = 'transparent'
              cRockDiv.style.backgroundColor = 'transparent'
              cScisorsDiv.style.backgroundColor = 'yellow'
            }
            
            if(e.id === 'rock'){
              if(appended === true) {
                playerscreen.children[3].remove()
              } 
               p.textContent = 'Player Chose rock'
               playerscreen.appendChild(p)
               appended = true
            
                rockDiv.style.backgroundColor ='yellow'
                paperDiv.style.backgroundColor 
                  ='transparent'
                scissorsDiv.style.backgroundColor 
                  ='transparent'
            }
                  
            if(e.id === 'paper'){
              if(appended === true) {
                playerscreen.children[3].remove()
              }
              p.textContent = 'Player Chose paper'
              playerscreen.appendChild(p)
              appended = true
              
                rockDiv.style.backgroundColor ='transparent'
                paperDiv.style.backgroundColor 
                  ='yellow'
                scissorsDiv.style.backgroundColor 
                  ='transparent'
            }
             if(e.id === 'scissors'){
               if(appended === true) {
                 playerscreen.children[3].remove()
              }
              p.textContent = 'Player Chose Scissors'
              playerscreen.appendChild(p)
              appended = true
              
                rockDiv.style.backgroundColor ='transparent'
                paperDiv.style.backgroundColor 
                  ='transparent'
                scissorsDiv.style.backgroundColor 
                  ='yellow'
            }
        })
    })
}

guiRPC()