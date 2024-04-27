/*-------------------------------- Constants --------------------------------*/

const choices = ['rock', 'paper', 'scissors']

/*-------------------------------- Variables --------------------------------*/

let playerChoice
let computerChoice
let winner

/*------------------------ Cached Element References ------------------------*/

const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')

const resultDisplay = document.querySelector('#result-display')

/*-------------------------------- Functions --------------------------------*/

const setPlayerChoice = (choice) => {
  playerChoice = choice
}

const setComputerChoice = () => {
  const randomIdx = Math.floor(Math.random() * choices.length)
  computerChoice = choices[randomIdx]
}

const compareChoices = () => {
  // if player rock and computer is paper, computer wins.. etc
  // ? draw first
  if (playerChoice === computerChoice) {
    winner = "It's a draw."
  // ? player wins
  } else if (
    playerChoice === 'rock' && computerChoice === 'scissors' ||
    playerChoice === 'scissors' && computerChoice === 'paper' ||
    playerChoice === 'paper' && computerChoice === 'rock'
  ) {
    winner = `Player chose ${playerChoice}, computer chose ${computerChoice}. Player is the winner!`
  } else {
    winner = `Player chose ${playerChoice}, computer chose ${computerChoice}. Computer is the winner!`
  }
}

const render = () => {
  resultDisplay.innerText = winner
}

const play = (choice) => {
  // console.log(choice)
  // console.log(event.target.id)
  // ! STEPS
  // ! 1) Set the playerChoice. Make sure you console.log the persons choice. Set the player choice to be what the person clicked on.
  // ! 2) Set the computer choice
  // ! 3) compare the choices to see who won! (or if its a tie)
  setPlayerChoice(choice)
  setComputerChoice()
  compareChoices()
  console.log("Player choice: ", playerChoice, "Computer choice: ", computerChoice, "Winner: ", winner)
  // console.log("Computer choice: ", computerChoice)
  // console.log(winner)
  render()
}

/*----------------------------- Event Listeners -----------------------------*/

rockButton.addEventListener('click', () => play('rock'))
paperButton.addEventListener('click', () => play('paper'))
scissorsButton.addEventListener('click', () => play('scissors'))












const button = document.querySelector('button')
const audioPlayer = document.querySelector('audio')

function play() {
  console.log('Hello world!')
  // ! Set the src on the audio element
  audioPlayer.src = './sounds/mystery.wav'
  // ! Play the audio element
  audioPlayer.play()
}

button.addEventListener('click', play)



























/*------------------- Constants ---------------------------*/
const sounds = ["work_it", "make_it", "do_it", "makes_us", "harder", "better", "faster", "stronger", "more_than", "hour", "our", "never", "ever", "after", "work_is", "over"
];

const foundId = () => {
sounds.forEach(sound =>{
    const button = buttons[id] = document.querySelector(`#${id}`)
})}
const audioPlayer = 

// console.log(buttons);




/*------------------------- Functions ----------------------------*/
function play() {
    audioPlayer.src= ./sounds/'${id}.wav'
    audioPlayer.play
}


/*---------------------- Event Listeners ------------------------*/
buttonIds.addEventListener('click',play)




