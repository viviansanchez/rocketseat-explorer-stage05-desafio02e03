export function Sounds ({ btnForest, btnRain, btnCoffeeShop, btnFireplace }) {
  const forestAudio = new Audio('./assets/audios/forest.wav')
  const rainAudio = new Audio('./assets/audios/rain.wav')
  const coffeeShopAudio = new Audio('./assets/audios/coffee-shop.wav')
  const fireplaceAudio = new Audio('./assets/audios/fireplace.wav')
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

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

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    playForestAudio,
    playRainAudio,
    playCoffeeShopAudio,
    playFireplaceAudio,
    stopAudioPlaying,
    timeEnd
  }
}