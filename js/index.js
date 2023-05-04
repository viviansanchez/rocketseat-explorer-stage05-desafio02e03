const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

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
  checkAndStopAudioPlaying()
  forestAudio.play()
  forestAudio.loop = true

  btnForest.classList.add('active-sound')
  btnRain.classList.remove('active-sound')
  btnCoffeeShop.classList.remove('active-sound')
  btnFireplace.classList.remove('active-sound')
}

function playRainAudio() {
  checkAndStopAudioPlaying()
  rainAudio.play()
  rainAudio.loop = true

  btnRain.classList.add('active-sound')
  btnForest.classList.remove('active-sound')
  btnCoffeeShop.classList.remove('active-sound')
  btnFireplace.classList.remove('active-sound')
}

function playCoffeeShopAudio() {
  checkAndStopAudioPlaying()
  coffeeShopAudio.play()
  coffeeShopAudio.loop = true

  btnCoffeeShop.classList.add('active-sound')
  btnRain.classList.remove('active-sound')
  btnForest.classList.remove('active-sound')
  btnFireplace.classList.remove('active-sound')
}

function playFireplaceAudio() {
  checkAndStopAudioPlaying()
  fireplaceAudio.play()
  fireplaceAudio.loop = true

  btnFireplace.classList.add('active-sound')
  btnRain.classList.remove('active-sound')
  btnForest.classList.remove('active-sound')
  btnCoffeeShop.classList.remove('active-sound')
}

function checkAndStopAudioPlaying() {
  let audios = [forestAudio, rainAudio, coffeeShopAudio, fireplaceAudio]

  for (const audio of audios) {
    if (audio.play) {
      audio.pause()
    }
  }
}
