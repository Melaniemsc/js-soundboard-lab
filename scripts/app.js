/*JS Soundboard Task
=====
You will be given starter code containing all the `sounds` required for this lab.
You will also be provided HTML and CSS for this lab. Feel free to update this however you like!
## Introduction
Your task is to make a Daft Punk soundboard using HTML, CSS, JavaScript and the HTML5 audio tag!
## Exercise
#### Requirements
 Each button should play the correct sound when clicked
 When you click **Randomize** your app should play a random daft punk sound.
 Visually pleasing design! :)
Level Up :rocket::
 When you click **Randomize**, it should visually indicate the sound that’s being played.
 When your mouse cursor hovers away from the **Randomize** button, the visual indicator should be removed.
 Extra challenge (super level up): Add another button to your soundboard called Play  Song*. This button should play each sound in the correct order until its played all of them “work it harder make it better do it faster makes us stronger.. etc”. Looping won’t work for this as you need time between each sound. Have a look at https://developer.mozilla.org/en-US/docs/Web/API/setInterval for this one.
#### Starter code
You have been given a folder with all the sound files you will need to complete the exercise*/


const soundButton = document.querySelectorAll('div > *') 
const audioPlayer = document.querySelector('#audio')


soundButton.forEach((btn) => {
    btn.addEventListener('click', function() {
        audioPlayer.src =`./sounds/${btn.id}.wav`
        audioPlayer.play()
    });
  });


const randomButton = document.querySelector('#randomizer')
function randomizerPlay() {
  const randomIdx = Math.floor(Math.random() * soundButton.length)
  soundButton[randomIdx].style.backgroundColor= "white";
  
  audioPlayer.src = `./sounds/${soundButton[randomIdx].id}.wav`
  
  audioPlayer.play()
  
  randomButton.addEventListener('click', ()=>{
    soundButton[randomIdx].style.backgroundColor= "black"
  })
  randomButton.addEventListener('mouseout', ()=>{
    soundButton[randomIdx].style.backgroundColor= "black"
  })
}
randomButton.addEventListener('click', randomizerPlay)


const playSongButton = document.createElement('button');
playSongButton.textContent = 'Play Song!';
document.body.appendChild(playSongButton);
playSongButton.setAttribute("id", 'song')

const soundOrder = ["work_it","harder","make_it","better","do_it","faster","makes_us","stronger","more_than","ever", "hour", "after", "our", "work_is", "never","over"
]


let currentIndex = 0;
let interval;

function playNextSound() {
  if (currentIndex < soundOrder.length) {
    const soundName = soundOrder[currentIndex];
    const currentButton = document.getElementById(soundName);
    currentButton.style.backgroundColor = "red";
    currentButton.style.color = "black";
    audioPlayer.src = `./sounds/${soundName}.wav`;
    audioPlayer.play();
    currentIndex++;
  } else {
    clearInterval(interval);
    
  }
}

function playAllSounds() {
  currentIndex = 0;
  interval = setInterval(playNextSound, 500); // Adjust the interval as needed
}

playSongButton.addEventListener('click', playAllSounds);
