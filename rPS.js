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

let pScorem = document.querySelector('#pScore')
let cScorem = document.getElementById('cScore')
        
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

//browswer Gui Rock Paper Scissors Game
let r = ''
let cC = ''
let pC = ''


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
      pC = 'paper'
      attach = true 
} 

function playerPaper(){
      let a = document.createElement('p')
       a.textContent = 'You play "Paper"',

      playerscreen.appendChild(paperImg);
      playerscreen.appendChild(a)
      pC = 'paper'
       attach = true 
} 

function playerScissors(){
    let a = document.createElement('p')
    a.textContent = 'You play "Scissors"',
     
    playerscreen.appendChild(scissorsImg);
    playerscreen.appendChild(a)
    pC = 'scissors'
    attach = true; 
} 

function computerRock(){
    let a2 = document.createElement('p')
    a2.textContent = 'Computer plays "Rock"' 
              
    compScreen.appendChild(mRockImg)
    compScreen.appendChild(a2)
    cC = 'rock'
    attach2 = true
} 

function computerPaper(){
     let a2 = document.createElement('p')
      a2.textContent = 'Computer plays "Paper"' 
              
     compScreen.appendChild(mPaperImg)
     compScreen.appendChild(a2)  
     cC = 'paper'
     attach2 = true 
} 

function computerScissors(){
  let a2 = document.createElement('p')
  a2.textContent = 'Computer plays "Scissors"'
             
  compScreen.appendChild(mScissorsImg);
  compScreen.appendChild(a2); 
  cC = 'scissors'
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
          pC = 'rock'
          return 'rock'
        } 
       if(e.id == 'paper'){
         playerPaper()
         pC = 'paper'
         return 'paper'
       } 
      if(e.id == "scissors"){
        pC = 'scissors'
        playerScissors()
        return 'scissors'
      }

    })
  })
} 


function cGui(){
  btns.forEach(e =>{
     e.addEventListener('click', ()=>{

      console.log(pC)
       
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

  
function gui2(){

  let cScore = 0
  let pScore = 0
  let aP = ''
  let aC = []

  pGui()
  cGui()
    
  btns.forEach(e =>{
    e.addEventListener('click', ()=>{
      
      if (cC = pC ){
        header.innerHTML = "<h3>Its a tie</h3>"
      }

      if (r == 'rock' && e.id== 'scissors' || 
          r == 'scissors' && e.id== 'paper' ||
          r == 'paper' && e.id == 'rock'){

            header.innerHTML = "<h3>Computer Wins</h3>"
            cScore += 1

            aC = `Computer Score ${cScore.toString()}`
            cScorem.textContent = aC
          } 
      
      if (e.id == 'rock' && r == 'scissors' || 
          e.id == 'scissors' && r == 'paper' ||
          e.id == 'paper' && r == 'rock') {

            header.innerHTML = '<h3>Player Wins</h3>'
            pScore += 1

            aP = `Player Score: ${pScore.toString()}`
            pScorem.textContent = aP
          }

      
      })
    })

       
} 

gui2()