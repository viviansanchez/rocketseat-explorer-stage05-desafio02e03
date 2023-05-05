import {
  btnPlay,
  btnStop,
  btnAddTime,
  btnRemoveTime,
  btnForest,
  btnRain,
  btnCoffeeShop,
  btnFireplace
} from './elements.js'

export function Events (sounds, timerAndControls) {
  btnForest.addEventListener('click', sounds.playForestAudio)
  btnRain.addEventListener('click', sounds.playRainAudio)
  btnCoffeeShop.addEventListener('click', sounds.playCoffeeShopAudio)
  btnFireplace.addEventListener('click', sounds.playFireplaceAudio)

  btnPlay.addEventListener('click', timerAndControls.countdown)
  btnStop.addEventListener('click', timerAndControls.resetCountdownAndSound)
  btnAddTime.addEventListener('click', timerAndControls.addMinutes)
  btnRemoveTime.addEventListener('click', timerAndControls.removeMinutes)
}

