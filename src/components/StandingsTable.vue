<template>

    <h3>Puntentelling na {{ this.latestRaceName }}</h3>
    <h5>Winnaar van het voorspellen van de snelste raceronde tijd bij de {{ this.latestRaceName }}:</h5>
    <p v-if="fastestLapTimeWinner"> {{ fastestLapTimeWinner }} </p>
    <p v-else> <i>Geen voorspellingen gedaan...</i> </p>
    <table class="table">
        <thead class="table-light">
            <tr>
                <th scope="col" style="width: 15%">Pos</th>
                <th scope="col" style="width: 60%">Name</th>
                <th scope="col" style="width: 25%">Points</th>
            </tr>
        </thead>
        <template v-if="isLoading">
            <tbody v-for="item in mockData" :key=item>
                <tr>
                    <td scope="row">{{ item }}</td>
                    <td>
                        <p class="placeholder-glow">
                            <span class="placeholder col-8"></span>
                        </p>
                    </td>
                    <td>
                        <p class="placeholder-glow">
                            <span class="placeholder col-4"></span>
                        </p>
                    </td>
                </tr>
            </tbody>
        </template>
        <template v-if="!isLoading">
            <tbody v-for="(user, index) in users" :key="index">
                <tr>
                    <td scope="row">{{ index + 1 }}</td>
                    <td>{{ user.userName }}</td>
                    <td>{{ user.points }}</td>
                </tr>
            </tbody>
        </template>
    </table>
</template>

<script>
import db from '../firebase/init.js'
import { query, collection, getDocs } from 'firebase/firestore'

export default {
    data() {
        return {
            users: [],
            raceResults: [],
            mockData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            isLoading: true,
            latestRace: null,
            usersPoints: [],
            preResults: null,
            latestRaceName: null,
            fastestLapTimeWinner: ''
        }
    },
    async created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            const querySnap = await getDocs(query(collection(db, 'standings')));
            querySnap.forEach(doc => {
                this.preResults = doc.data()
            });

            let filterdList = [];

            for (const [key, value] of Object.entries(this.preResults)) {
                if (value['roundNr']) {
                    filterdList.push({
                        raceName: key,
                        roundNr: value['roundNr']
                    });
                }
            }

            const latestRaceNr = Math.max(...filterdList.map(x => x.roundNr));
            this.latestRaceName = filterdList.find(x => x.roundNr === latestRaceNr).raceName;
            if (this.preResults[this.latestRaceName]) {
                for (const [key, value] of Object.entries(this.preResults[this.latestRaceName])) {
                    if (key != 'roundNr') {
                        this.users.push({
                            userName: key,
                            points: value
                        });
                    }
                }
                if (this.preResults.fastestLapTimeWinners) {
                    this.fastestLapTimeWinner = this.preResults.fastestLapTimeWinners[this.latestRaceName].firstPlace
                }
                this.users.sort((a, b) => b.points - a.points);
                this.isLoading = false;
            }
        },
    }
}
</script>

<style scoped>
.table td {
    vertical-align: middle;
}

table tr {
    height: 60px;
}
</style>