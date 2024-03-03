<template>
  <h1>Welkom bij de F1 poule</h1>
  <hr>
  <div class="card">
    <h5 class="card-header">Zelf een voorspelling maken?</h5>
    <div class="card-body">
      <p class="card-text">Klink dan op de onderstaande knop</p>
      <router-link class="btn btn-primary" to="/feed">Maak een voorspelling</router-link>
    </div>
  </div>
  <hr>
  <div class="display-flex">
    <div class="card-container" v-for="item in driversApi" :key="item.driverId">
      <DriverCard :driverInfo="item" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DriverCard from './DriverCard.vue';
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    DriverCard
  },
  data() {
    return {
      driversApi: [],
    }
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
