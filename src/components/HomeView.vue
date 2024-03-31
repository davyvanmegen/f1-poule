<template>
  <h1>Welkom bij de F1 poule</h1>
  <hr>
  <div class="card">
    <h5 class="card-header">Hoe werkt het?</h5>
    <div class="card-body">
      <p class="card-text">
        <ul>
          <li>Voorspel de top 5</li>
          <li>Voorspel de snelste raceronde (en tijd)</li>
          <li>Verdien bonus punten</li>
        </ul>
        Doe mee en verdien punten dooe de top 5 te voorspellen. Wanneer je de positie goed hebt krijg je <b>3 punten</b>,
        en als de coureur in de top 5 eindigd maar niet op je juiste positie krijg je <b>1 punt</b>. <br><br>
        
        Voorspel je de coureur met de snelste raceronde dan krijg je <b>5 punten!</b>  <br><br>
        
        Doe ook eens een gewaagde voorspelling en verdien bonus punten! Bijvoorbeeld, voorspel je 
        dat een coureur op positie 1 eindigd, maar hij staat in het kampioenschap op plaats 10, dan krijg je
        het verschil als extra punten, in dit geval dus 9 extra punten. <br><br>
        
        Veel plezier!
      </p>
    </div>
  </div>
  <br>
  <div class="card">
    <h5 class="card-header">Wil je nou zelf ook een voorspelling maken?</h5>
    <div class="card-body">
      <div v-if="isLoggedIn">
        <p class="card-text">Klik dan op de onderstaande knop</p>
        <router-link class="btn btn-primary" v-if="isLoggedIn" to="/feed">Maak een voorspelling</router-link>
      </div>
      <div v-if="!isLoggedIn">
        <p class="card-text">Om een voorspelling te maken moet je ingelogd zijn</p>
        <router-link class="btn btn-primary"  to="/login">Inloggen</router-link>
      </div>
    </div>
  </div>
  <br>
  <h3>De actuele stand in het WK:</h3>
  <hr>
  <div class="card-container">
    <Suspense>
      <template #default>
        <DriverCard/>
      </template>
      <template #fallback>
        <UserCardSkeleton/>
      </template>
    </Suspense>    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DriverCard from './DriverCard.vue';
import axios from 'axios';
import UserCardSkeleton from './UserCardSkeleton.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/init.js'

export default {
  props: {
      //isLoggedIn : false
    },
  name: 'HomeView',
  components: {
    HelloWorld,
    DriverCard,
    UserCardSkeleton
  },
  data() {
    return {
      driversApi: [],
      isLoggedIn: false
    }
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false
      }
    })
  },
  async mounted() {
    const response = await axios.get('https://ergast.com/api/f1/2024/driverStandings.json');
    this.driversApi = response.data.MRData.StandingsTable.StandingsLists[response.data.MRData.StandingsTable.StandingsLists.length - 1].DriverStandings;
  },
}
</script>

<style>
.card-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
