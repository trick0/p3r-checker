<template>
  <div class="home">
    <Ps5Checker :provider="'p3'"/>

    <EnableSound />
  </div>
</template>

<script>
// @ is an alias to /src
import Ps5Checker from '@/components/ps5-checker.vue'
import EnableSound from '@/components/enable-sound.vue'

export default {
  name: 'Home',
  components: {
    Ps5Checker,
    EnableSound
  }
}
</script>
