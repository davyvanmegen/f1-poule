<template>
<Navigation />
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import { getAuth, onAuthStateChanged, signout} from "firebase/auth"

export default {
  name: 'App',
  components: {
    Navigation
  },
  mounted() {

  },
  data() {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    handleSignOut() {

    }
  }
}
</script>


<style>

</style>
