import {
  btnPlay,
  btnStop,
  btnAddTime,
  btnRemoveTime,
  btnForest,
  btnRain,
  btnCoffeeShop,
  btnFireplace, 
  html,
  btnSun,
  btnMoon,
  toggleContainer
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

  toggleContainer.addEventListener('click', toggleMode)
  
  function toggleMode() {
    html.classList.toggle('dark-mode')
    btnSun.classList.toggle('hide')
    btnMoon.classList.toggle('hide')
  }

}

