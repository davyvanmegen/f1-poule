<template>
     <div class="display-flex">
        <div class="card-container" v-for="item in driversApi" :key="item.driverId">
            <div class="card mb-3" v-if="item" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <img :src="'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/'+item.Driver.givenName.slice(0, 1).toUpperCase() +'/'+ item.Driver.givenName.slice(0, 3).toUpperCase() + item.Driver.familyName.slice(0,3).toUpperCase()+'01_'+ item.Driver.givenName +'_' +item.Driver.familyName+'/'+ item.Driver.givenName.slice(0, 3).toLowerCase() + item.Driver.familyName.slice(0,3).toLowerCase()+'01.png.transform/2col/image.png'" alt="" style="max-width: 150px;">
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.Driver.givenName }} {{ item.Driver.familyName }} - {{
                        item.Driver.permanentNumber }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Nr: {{ item.position }}</h6>
                            <p>Points: {{ item.points }} </p>
                            <!-- <p>Points: {{ driverInfo.points }} <br>Wins: {{ driverInfo.wins }}</p> -->
                            <a :href="item.Driver.url" target="_blank" class="card-link">Biografie</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import UserCardSkeleton from './UserCardSkeleton.vue';
import axios from 'axios';
export default {
    async setup() {
        const response = await axios.get('https://ergast.com/api/f1/2024/driverStandings.json');
        const driversApi = response.data.MRData.StandingsTable.StandingsLists[response.data.MRData.StandingsTable.StandingsLists.length - 1].DriverStandings;
        return { driversApi }
    }
}

</script>



<!-- <script>
import UserCardSkeleton from './UserCardSkeleton.vue';
import axios from 'axios';

export default {
    name: 'DriverCard',
    props: {
        driverInfo: {}
    },
    data () {
        return {
            driversApi: []
        }
    },
    async mounted() {
        const response = await axios.get('https://ergast.com/api/f1/2024/driverStandings.json');
        this.driversApi = response.data.MRData.StandingsTable.StandingsLists[response.data.MRData.StandingsTable.StandingsLists.length - 1].DriverStandings;
        console.log(this.driversApi)
  },
}
</script> -->

<style>
.img-f1-drivers {
  display: block;
  max-width: 50%;
  height: auto;
}

</style>
