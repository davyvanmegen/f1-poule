<template>
    <div class="card" v-if="driverInfo">
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
