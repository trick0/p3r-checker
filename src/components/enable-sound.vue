<template>
  <button v-if="!sound" @click="enableSound">Enable Sound</button>
</template>

<script>
  export default {
    computed: {
      sound() {
        return this.$store.state.soundEnabled
      }
    },
    methods: {
      enableSound() {
        this.$store.commit('enableSound')
      }
    }
  }
</script>

<style>
  button {
    bottom: 40px;
    left: 40px;
    position: fixed;
  }
</style>
