<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">F1 Poule</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/standings">Standings</router-link>
      </li>
      <li class="nav-item" v-if="isLoggedIn">
        <router-link class="nav-link" to="/feed">Feed</router-link>
      </li>
    </ul>
  </div>
  <!-- Log in and signin functionality to show left -->
  <div class="nav-item p-2" v-if="!isLoggedIn">
    <router-link class="nav-link" to="/login">Login</router-link>
  </div>
  <div class="nav-item p-2" v-if="!isLoggedIn">
    <router-link class="nav-link" to="/signup">Signup</router-link>
  </div>
  <div class="nav-item p-2">
    <button class="nav-link" @click="handleSignOut" v-if="isLoggedIn">Log out</button>
  </div>
</nav>
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

</style>
