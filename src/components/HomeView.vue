<template>
  <h1>Welkom bij de F1 poule</h1>
  <hr>
  <div class="card">
    <h5 class="card-header">Hoe werkt het?</h5>
    <div class="card-body">
      <p class="card-text">
        Doe mee en verdien punten door te voorspellen welke 5 coureurs als eerste over de streep komen, 
        en voorspel wie de snelste ronde rijdt. Voor elke goedgekozen coureur op de goede plaats verdien
        je 3 punten plus correctie punten, en voor de snelste race ronde verdien je 5 punten. De correctie
        punten worden bepaald aan de hand van hoe gewaagd jou voorspelling is. Bijvoorbeeld, voorspel je 
        dat een coureur op plek 1 eindigd, maar hij staat in het kampioenschap op plaats 10, dan krijg je
        het verschil als extra punten, in dit geval dus 9 extra punten. Veel plezier!
      </p>
    </div>
  </div>
  <br>
  <div class="card">
    <h5 class="card-header">Zelf een voorspelling maken?</h5>
    <div class="card-body">
      <p class="card-text">Klik dan op de onderstaande knop</p>
      <router-link class="btn btn-primary" v-if="isLoggedIn" to="/feed">Maak een voorspelling</router-link>
      <router-link class="btn btn-primary" v-if="!isLoggedIn" to="/login">Maak een voorspelling</router-link>
    </div>
  </div>
  <br>
  <h3>De actuele stand in het WK:</h3>
  <hr>
  <Suspense>
    <template #default>
      <DriverCard/>
    </template>
    <template #fallback>
      <UserCardSkeleton/>
    </template>
  </Suspense>

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

.display-flex {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-container {
  width: 49%;
  margin: 10px 0;
}

</style>
