const compChoices = ['rock', 'paper', 'scissors']

const rockBtn = document.querySelector('#rock')
const scissorsBtn = document.querySelector('#scissors')
const paperBtn = document.querySelector('#paper')

const playBtn = document.querySelector('#playBtn')
const btns = document.querySelectorAll('.btns')

const compScreen = document.querySelector('#cBody')
const playerscreen = document.querySelector('#pBody')

const scissorsDiv = document.querySelector('.scissorsDiv')
const paperDiv = document.querySelector('.paperDiv')
const rockDiv = document.querySelector('.rockDiv')

const rockImg = document.querySelector('#rockImg')
const scissorsImg = document.querySelector('#scissorsImg')
const paperImg = document.querySelector('#paperImg')

function computerChoose() {
    const it = Math.floor(Math.random()*3)
        return( compChoices[it] )
}

function playerChoose(p) {
    let f = p.toLowerCase()

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
function gui() {
  let attach = false
  let attach2 = false 
  
    btns.forEach(e =>{
        e.addEventListener('click', () =>{
          let c = computerChoose() 
          
          let mRockImg = rockImg.cloneNode(true)
          let mPaperImg = paperImg.cloneNode(true )
          let mScissorsImg = scissorsImg.cloneNode(true)
          
            if(attach2 == true){
                compScreen.children[1].remove() 
                compScreen.children[0].remove()
              }
              
                 if(attach == true) {
                    playerscreen.children[1].remove()
                    playerscreen.children[0].remove()
                    attach = false
                }
          
            if(e.id == 'rock') {
                let a = document.createElement('p')
                a.textContent = 'Player Chose Rock',

                playerscreen.appendChild(mRockImg);
                playerscreen.appendChild(a)
                attach = true 

            }

            if(e.id === 'paper') {
                let a = document.createElement('p')
                a.textContent = 'Player Chose Paper',

                playerscreen.appendChild(mPaperImg);
                playerscreen.appendChild(a)
                attach = true 
            }

            if(e.id === 'scissors') {
                let a = document.createElement('p')
                a.textContent = 'Player Chose Scissors',

                playerscreen.appendChild(mScissorsImg);
                playerscreen.appendChild(a)
                attach = true; 
            }
            
            if(c == 'rock'){
              let a2 = document.createElement('p')
              a2.textContent = "Computer plays 'Rock'"
              
              compScreen.appendChild(mRockImg)
              compScreen.appendChild(a2)
              attach2 = true
            } 
            
            if(c == 'paper'){
              let a2 = document.createElement('p')
              a2.textContent = "Computer plays 'Paper'"
              
              compScreen.appendChild(mPaperImg)
              compScreen.appendChild(a2)  
              attach2 = true 
            } 
            
            if(c == 'scissors'){
              
             let a2 = document.createElement('p')
              a2.textContent = "Computer plays 'Scissors'"
             
              compScreen.appendChild(mScissorsImg);
              compScreen.appendChild(a2); 
              attach2 = true 
            } 
            
            if(c === e.id){
              let a3 = document.createElement('p')
              let a4 = document.createElement('p')
              a3.textContent = `you play ${e.id} `
              
             playerscreen.appendChild(a3)
             compScreen.appendChild(a4)
             
             attach = true
             attach2 = true 
            } 
        })
    })
}

gui()