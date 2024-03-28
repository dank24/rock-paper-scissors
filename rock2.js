const compChoices = ['rock', 'paper', 'scissors']

const rockBtn = document.querySelector('#rock')
const scissorsBtn = document.querySelector('#scissors')
const paperBtn = document.querySelector('#paper')

const playBtn = document.querySelector('#playBtn')
const btns = document.querySelectorAll('.btns')

const compScreen = document.querySelector('#cBody')
const playerscreen = document.querySelector('#pBody')

const header = document.querySelector('#header')

const scissorsDiv = document.querySelector('.scissorsDiv')
const paperDiv = document.querySelector('.paperDiv')
const rockDiv = document.querySelector('.rockDiv')

const rockImg = document.querySelector('#rockImg')
const scissorsImg = document.querySelector('#scissorsImg')
const paperImg = document.querySelector('#paperImg')

let mRockImg = rockImg.cloneNode(true)
let mPaperImg = paperImg.cloneNode(true )
let mScissorsImg = scissorsImg.cloneNode(true)
        
let attach = false
let attach2 = false
   

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


function removeChildren(){
     if(attach2 == true){
        compScreen.children[1].remove() 
        compScreen.children[0].remove()
      }
              
    if(attach == true) {
      playerscreen.children[1].remove()
      playerscreen.children[0].remove()
      attach = false
     }
} 

function playerRock(){
     let a = document.createElement('p')
     a.textContent = 'You play "Rock"',

      playerscreen.appendChild(rockImg);
      playerscreen.appendChild(a)
      attach = true 
} 

function playerPaper(){
      let a = document.createElement('p')
       a.textContent = 'You play "Paper"',

      playerscreen.appendChild(paperImg);
      playerscreen.appendChild(a)
       attach = true 
} 

function playerScissors(){
    let a = document.createElement('p')
    a.textContent = 'You play "Scissors"',
     
    playerscreen.appendChild(scissorsImg);
    playerscreen.appendChild(a)
    attach = true; 
} 

function computerRock(){
    let a2 = document.createElement('p')
    a2.textContent = 'Computer plays "Rock"' 
              
    compScreen.appendChild(mRockImg)
    compScreen.appendChild(a2)
    attach2 = true
} 

function computerPaper(){
     let a2 = document.createElement('p')
      a2.textContent = 'Computer plays "Paper"' 
              
     compScreen.appendChild(mPaperImg)
     compScreen.appendChild(a2)  
     attach2 = true 
} 

function computerScissors(){
  let a2 = document.createElement('p')
  a2.textContent = 'Computer plays"Scissors"'
             
  compScreen.appendChild(mScissorsImg);
  compScreen.appendChild(a2); 
  attach2 = true 
} 

function pGui(){
  btns.forEach(e =>{
    e.addEventListener('click', ()=>{
                    
    if(attach == true) {
      playerscreen.innerHTML = ''
     }

      if(e.id == "rock"){
          playerRock()
          return 'rock'
        } 
       if(e.id == 'paper'){
         playerPaper()
         return 'paper'
       } 
      if(e.id == "scissors"){
        playerScissors()
        return 'scissors'
      } 
    })
  })
} 

let r = ''

function cGui(){
  btns.forEach(e =>{
     e.addEventListener('click', ()=>{
       
     let c = computerChoose()
     r = c
     
     if(attach2 == true){
        compScreen.innerHTML = ''
      }
      
     if(c == 'rock'){
        computerRock(); 
        return 'rock' 
      } 
      if(c == 'paper'){
        computerPaper(); 
        return 'paper'
      } 
      if(c == 'scissors'){
        computerScissors(); 
        return 'scissors'
      } 
     })
  })

} 

function drawGUI(){
  
    btns.forEach(e =>{
      
    e.addEventListener('click', ()=>{
      if(r && e.id == 'rock' ){
        if(attach2 || attach == true){
          playerscreen.innerHTML = ''
          compScreen.innerHTML = ''
       } 
          playerRock()
          computerRock()
        console.log(a)
        console.log(b)
      } 
      if(r && e.id == 'paper' ){
        if(attach2 || attach == true){
          playerscreen.innerHTML = ''
          compScreen.innerHTML = ''
        } 
          playerPaper(); 
          computerPaper()
          console.log(a)
          console.log(b)
      } 
      if(r && e.id == 'scissors' ){
        if(attach2 || attach == true){
          playerscreen.innerHTML = ''
          compScreen.innerHTML = ''
        } 
          playerScissors(); 
          Computersc(); 
          console.log(a)
          console.log(b)
      }   
     
      }
    })
   ) 
  }
  
function gui2(){
    pGui()  
    cGui()
    
    btns.forEach(e =>{
      e.addEventListener('click', ()=>{
         if(r == 'rock' && e.id== 'scissors' || 
           r == 'scissors' && e.id== 'paper' ||
           r == 'paper' && e.id == 'rock'){
           header.innerHTML = "<h3>Computer Wins</h3>"} else { header.innerHTML = "<h3>Player Wins</h3>"
             }
    
        })
      })
       
} 

gui2()