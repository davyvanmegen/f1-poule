<template>
    <h1>History</h1>
    <p>Hier zie je een overzicht van alle voorspellingen die gedaan zijn tot nu toe.</p>
    <div v-for="(user, index) in users" :key="index">
        <h4>{{ user.userName }}</h4>
        <div v-for="(prediction, key) in user.predictions" :key="key">
            <div class="">
                <div class="card-container">
                <div class="card" style="max-width: 18rem;" v-if="prediction !== undefined">
                    <h5 class="card-header">{{key}}</h5>
                    <div class="card-body">
                    <table class="table">
                        <thead class="table-light">
                            <tr>
                            <th scope="col">Pos</th>
                            <th scope="col">Driver</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>{{ prediction.position1 }}</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>{{ prediction.position2 }}</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>{{ prediction.position3 }}</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td>{{ prediction.position4 }}</td>
                            </tr>
                            <tr>
                            <th scope="row">5</th>
                            <td>{{ prediction.position5 }}</td>
                            </tr>
                            <tr>
                            <th scope="row">FL</th>
                            <td>{{ prediction.fastLab }}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import db from '../firebase/init.js'
import { query, collection, getDocs, setDoc, doc } from 'firebase/firestore'
import axios from 'axios'

export default {
    data () {
        return {
            users: [],
            raceResults: []
        }
    },
    mounted() {
        this.fetchUsersData()
        //this.fetchF1Data()
    },
    methods: {
        async fetchUsersData() {
            const querySnap = await getDocs(query(collection(db, 'predictions')));
            querySnap.forEach((doc) => {
                this.users.push({
                    userName: doc.id,
                    predictions: doc.data(),
                    points: 0
                });
            });
        },
        async fetchF1Data() {
            const results = await axios.get(`https://ergast.com/api/f1/2024/results.json?limit=1000`);
            const races = results.data.MRData.RaceTable.Races
            const customResults = [];
            for (let index = 0; index < races.length; index++) {
                const race = races[index];
                let driverStandings = null;
                let currentStandings = null;
                if (index !== 0) {
                    driverStandings = await axios.get(`https://ergast.com/api/f1/2024/${index}/driverStandings.json`);
                    currentStandings = driverStandings.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                }
                customResults.push({
                    raceName: race.raceName,
                    position1: race.Results[0].Driver.familyName,
                    position2: race.Results[1].Driver.familyName,
                    position3: race.Results[2].Driver.familyName,
                    position4: race.Results[3].Driver.familyName,
                    position5: race.Results[4].Driver.familyName,
                    fastLab: race.Results.find(item => item.FastestLap.rank === '1').Driver.familyName,
                    currentStandings
                });
            }
            this.latestRace = results.data.MRData.RaceTable.Races.slice(-1)[0];
            this.raceResults = customResults;
            //console.log(this.raceResults)
            let obj = this.raceResults.find(o => o.raceName === 'string 1');
        },
        matchData(){
               
        }
    }
}
</script>

<style>

</style>