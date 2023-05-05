export function Sounds ({ btnForest, btnRain, btnCoffeeShop, btnFireplace }) {
  const forestAudio = new Audio('./assets/audios/forest.wav')
  const rainAudio = new Audio('./assets/audios/rain.wav')
  const coffeeShopAudio = new Audio('./assets/audios/coffee-shop.wav')
  const fireplaceAudio = new Audio('./assets/audios/fireplace.wav')

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

  return {
    playForestAudio,
    playRainAudio,
    playCoffeeShopAudio,
    playFireplaceAudio,
    stopAudioPlaying
  }
}