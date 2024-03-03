<template>
  <Navigation :isLoggedIn="isLoggedIn"></Navigation>
  <div class="container margin-top">
      <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import { auth } from './firebase/init.js'

export default {
  name: 'App',
  components: {
    Navigation
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false

      }
    })
  },
  data() {
    return {
      isLoggedIn: false,
      auth: null
    }
  },
  methods: {
    handleSignOut() {
      signOut(auth).then(() => {
        this.$router.push("/")
      })
    }
  }
}
</script>


<style>
.margin-top {
  margin-top: 10px;
}
</style>
