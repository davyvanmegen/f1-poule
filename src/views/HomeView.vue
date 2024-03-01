<template>
  <h1>Welkom bij de F1 poule</h1>
  <ul>
    <li v-for="item in driversApi" :key="item.driverId">
      <h3>{{item.givenName}} {{item.familyName}}</h3>
      <p>Date of Birth: {{item.dateOfBirth}}</p>
      <a :href="item.url">Bio</a>
    </li>
  </ul>
  <!-- <div>
    {{ this.driversApi[0] }}
  </div> -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      driversApi: [],
    }
  },
  async mounted() {
    // const response = await axios.get('https://ergast.com/api/f1/2023/drivers.json');
    // this.driversApi = response.data.MRData.DriverTable.Drivers;
    },
}
</script>
