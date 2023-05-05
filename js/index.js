const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')

const btnPlay = document.querySelector('.btn-play')
const btnStop = document.querySelector('.btn-stop')
const btnAddTime = document.querySelector('.btn-add-time')
const btnRemoveTime = document.querySelector('.btn-remove-time')

const btnForest = document.querySelector('.btn-forest')
const btnRain = document.querySelector('.btn-rain')
const btnCoffeeShop = document.querySelector('.btn-coffee-shop')
const btnFireplace = document.querySelector('.btn-fireplace')

// all audio things
const forestAudio = new Audio('../assets/audios/forest.wav')
const rainAudio = new Audio('../assets/audios/rain.wav')
const coffeeShopAudio = new Audio('../assets/audios/coffee-shop.wav')
const fireplaceAudio = new Audio('../assets/audios/fireplace.wav')

btnForest.addEventListener('click', playForestAudio)
btnRain.addEventListener('click', playRainAudio)
btnCoffeeShop.addEventListener('click', playCoffeeShopAudio)
btnFireplace.addEventListener('click', playFireplaceAudio)

function playForestAudio() {
  stopAudioPlaying()
  forestAudio.play()
  forestAudio.loop = true

  btnForest.classList.add('active-sound')
  btnRain.classList.remove('active-sound')
  btnCoffeeShop.classList.remove('active-sound')
  btnFireplace.classList.remove('active-sound')
}

function playRainAudio() {
  stopAudioPlaying()
  rainAudio.play()
  rainAudio.loop = true

  btnRain.classList.add('active-sound')
  btnForest.classList.remove('active-sound')
  btnCoffeeShop.classList.remove('active-sound')
  btnFireplace.classList.remove('active-sound')
}

function playCoffeeShopAudio() {
  stopAudioPlaying()
  coffeeShopAudio.play()
  coffeeShopAudio.loop = true

  btnCoffeeShop.classList.add('active-sound')
  btnRain.classList.remove('active-sound')
  btnForest.classList.remove('active-sound')
  btnFireplace.classList.remove('active-sound')
}

function playFireplaceAudio() {
  stopAudioPlaying()
  fireplaceAudio.play()
  fireplaceAudio.loop = true

  btnFireplace.classList.add('active-sound')
  btnRain.classList.remove('active-sound')
  btnForest.classList.remove('active-sound')
  btnCoffeeShop.classList.remove('active-sound')
}

function stopAudioPlaying() {
  let audios = [forestAudio, rainAudio, coffeeShopAudio, fireplaceAudio]

  for (const audio of audios) {
    if (audio.play) {
      audio.pause()
      btnForest.classList.remove('active-sound')
      btnRain.classList.remove('active-sound')
      btnCoffeeShop.classList.remove('active-sound')
      btnFireplace.classList.remove('active-sound')
    }
  }
}

// timer and controls
btnPlay.addEventListener('click', countdown)
btnStop.addEventListener('click', resetCountdownAndSound)
btnAddTime.addEventListener('click', addMinutes)
btnRemoveTime.addEventListener('click', removeMinutes)

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

let timerTimeout

function countdown() {
  console.log('starCountdwon')
  
  timerTimeout = setTimeout(() => {
    let newSeconds = Number(secondsDisplay.textContent)
    let newMinutes = Number(minutesDisplay.textContent)

    if(newSeconds <=0 && newMinutes <=0) {
      resetCountdownAndSound()
      return
    }
    
    if(newSeconds <= 0) {
      newSeconds = 12
      newMinutes--
    }
    
    newSeconds -= 1
    updateDisplay(newMinutes, newSeconds)
    
    countdown()
  }, 1000);

}

function resetCountdownAndSound() {
  console.log('resetCountdown');
  clearTimeout(timerTimeout)
  updateDisplay(minutes, seconds)
  stopAudioPlaying()
}

function addMinutes() {
  console.log('addMinutes');
  let currentSeconds = secondsDisplay.textContent
  let currentMinutes = Number(minutesDisplay.textContent)
  let newMinutes = currentMinutes + 5
  updateDisplay(newMinutes, currentSeconds)
}

function removeMinutes() {
  console.log('removeMinutes');
  let currentSeconds = secondsDisplay.textContent
  let currentMinutes = Number(minutesDisplay.textContent)
  let newMinutes = currentMinutes - 5
  if(currentMinutes > 5) {
    newMinutes = currentMinutes - 5
    updateDisplay(newMinutes, currentSeconds)
  }
}

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}