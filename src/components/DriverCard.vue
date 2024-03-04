<template>
    <div class="card" v-if="driverInfo" style="max-width: 18rem;">
        <img :src="'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/'+driverInfo.Driver.givenName.slice(0, 1).toUpperCase() +'/'+ driverInfo.Driver.givenName.slice(0, 3).toUpperCase() + driverInfo.Driver.familyName.slice(0,3).toUpperCase()+'01_'+ driverInfo.Driver.givenName +'_' +driverInfo.Driver.familyName+'/'+ driverInfo.Driver.givenName.slice(0, 3).toLowerCase() + driverInfo.Driver.familyName.slice(0,3).toLowerCase()+'01.png.transform/2col/image.png'" alt="" class="card-img-top img-thumbnail">
        <div class="card-body">
            <h5 class="card-title">{{ driverInfo.Driver.givenName }} {{ driverInfo.Driver.familyName }} - {{
        driverInfo.Driver.permanentNumber }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Nr: {{ driverInfo.position }}</h6>
            <p>Points: {{ driverInfo.points }} <br>Wins: {{ driverInfo.wins }}</p>
            <a :href="driverInfo.Driver.url" target="_blank" class="card-link">Biografie</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DriverCard',
    props: {
        driverInfo: {}
    }
}
</script>

<style>
.img-f1-drivers {
  display: block;
  max-width: 50%;
  height: auto;
}

</style>
