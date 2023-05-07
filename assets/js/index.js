import { TimerAndControls } from './timer-and-controls.js'
import { Sounds } from './sounds.js'
import { Events } from './events.js'

import {
  minutesDisplay,
  secondsDisplay,
  btnForest,
  btnRain,
  btnCoffeeShop,
  btnFireplace
} from './elements.js'

const sounds = Sounds({btnForest, btnRain, btnCoffeeShop, btnFireplace})
const timerAndControls = TimerAndControls({minutesDisplay, secondsDisplay, stopAudioPlaying: sounds.stopAudioPlaying})

Events(sounds, timerAndControls)

//toggle dark-mode
// const html = document.documentElement
// const btnSun = document.querySelector('#sun')
// const btnMoon = document.querySelector('#moon')
// const toggleContainer = document.querySelector('.toggle-mode-container')

// toggleContainer.addEventListener('click', toggleMode)
// function toggleMode() {
//   html.classList.toggle('dark-mode')
//   btnSun.classList.toggle('hide')
//   btnMoon.classList.toggle('hide')
// }


