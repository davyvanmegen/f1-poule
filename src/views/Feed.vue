<template>
  <h3>Welkom {{ displayName }}</h3>
</template>

<script>
import { auth } from '../firebase/init.js'
export default {
  data () {
    return {
      displayName: 'kaas'
    }
  },
  mounted() {
    if (auth.currentUser) {
      // set local 'displayName' to user's displayName
      this.displayName = auth.currentUser.displayName
    }
  }
}
</script>
  
<style>

</style>