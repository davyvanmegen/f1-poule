<template>
    <div class="card flex-row" v-for="item in driversApi" :key="item.driverId">
        <img class="card-img-left" :src="'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/'+item.Driver.givenName.slice(0, 1).toUpperCase() +'/'+ item.Driver.givenName.slice(0, 3).toUpperCase() + item.Driver.familyName.slice(0,3).toUpperCase()+'01_'+ item.Driver.givenName +'_' +item.Driver.familyName+'/'+ item.Driver.givenName.slice(0, 3).toLowerCase() + item.Driver.familyName.slice(0,3).toLowerCase()+'01.png.transform/2col/image.png'" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ item.Driver.givenName }} {{ item.Driver.familyName }} - {{
                        item.Driver.permanentNumber }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Nr: {{ item.position }}</h6>
            <p>Points: {{ item.points }} </p>
            <a :href="item.Driver.url" target="_blank" class="btn btn-secondary">Biografie</a>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    async setup() {
        const response = await axios.get('https://ergast.com/api/f1/2024/driverStandings.json');
        const driversApi = response.data.MRData.StandingsTable.StandingsLists[response.data.MRData.StandingsTable.StandingsLists.length - 1].DriverStandings;
        return { driversApi }
    }
}

</script>

<style scoped>
.img-f1-drivers {
  display: block;
  max-width: 50%;
  height: auto;
}
.card {
    min-width: 49%;
    margin-bottom: 10px;
}
@media only screen and (max-width: 992px) {
    .card {
        width: 100%;
        margin-bottom: 10px;
    }
}

</style>
