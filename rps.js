const compChoices = ['rock', 'paper', 'scissors']
const rockBtn = document.querySelector('#rock')
const scissorsBtn = document.querySelector('#scissors')
const paperBtn = document.querySelector('#paper')
const playBtn = document.querySelector('#playBtn')
const btns = document.querySelectorAll('.btns')

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

function guiRPC() {

    btns.forEach(e =>{
        e.addEventListener('click', () =>{
            let i = e.id
            console.log(rPs(e.id))
            console.log(i)
            if(e.id === 'rock'){
                rockDiv.style.backgroundColor ='yellow'
            }
        })
    })
}

guiRPC()