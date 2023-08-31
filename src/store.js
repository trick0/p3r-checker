import Vuex from 'vuex'
import { Howl } from 'howler'

const store = new Vuex.Store({
  state: {
    soundEnabled: false,
    sound: null
  },
  mutations: {
    enableSound(state) {
      state.soundEnabled = true

      state.sound = new Howl({
        src: [require('./assets/success.mp3')],
        onloaderror: () => {
          console.error('error loading audio file')
        }
      })
    }
  }
})

export default store
