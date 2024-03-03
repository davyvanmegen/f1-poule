<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">F1 Poule</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/standings">Standings</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link" to="/feed">Voorspelling</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item" v-if="!isLoggedIn"><router-link class="nav-link" to="/login">Login</router-link></li>
          <li class="nav-item" v-if="!isLoggedIn"> <router-link class="nav-link" to="/signup">Signup</router-link></li>
          <li class="nav-item" v-if="isLoggedIn"><button class="nav-link" @click="handleSignOut">Log out</button></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { auth } from '../firebase/init.js'
import { signOut } from 'firebase/auth'
export default {
  props: {
    isLoggedIn: false
  },
  data() {
    return {

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
.space-between {
  justify-content: space-between;
}
</style>