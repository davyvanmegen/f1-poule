<template>
    <h2>Puntentelling</h2>
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
                    <td scope="row">{{item}}</td>
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
                    <td scope="row">{{ index+1 }}</td>
                    <td>{{ user.userName }}</td>
                    <td>{{ user.points }}</td>
                </tr>
            </tbody>
        </template>
    </table>
</template>

<script>
import db from '../firebase/init.js'
import { query, collection, getDocs, setDoc, doc } from 'firebase/firestore'
import axios from 'axios'

export default {
    data() {
        return {
            users: [],
            raceResults: [],
            mockData: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            isLoading: true,
            latestRace: null,
            usersPoints: []
        }
    },
    async created () {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.fetchF1Data().then(() => {
                this.fetchUsersData().then(() => {
                    if (this.users.length && this.raceResults.length) {
                        this.calculatePoints();
                    } else {
                        this.fetchData();
                    }
                })
            })
        },
        async fetchF1Data() {
            const results = await axios.get(`https://ergast.com/api/f1/2024/results.json?limit=1000`);
            results.data.MRData.RaceTable.Races.forEach(async (race, index) => {
                let driverStandings = [];
                let currentStandings = [];
                if (index !== 0) {
                    driverStandings = await axios.get(`https://ergast.com/api/f1/2024/${index}/driverStandings.json`);
                    currentStandings = driverStandings.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                }

                this.raceResults.push({
                    raceName: race.raceName,
                    position1: race.Results[0].Driver.familyName,
                    position2: race.Results[1].Driver.familyName,
                    position3: race.Results[2].Driver.familyName,
                    position4: race.Results[3].Driver.familyName,
                    position5: race.Results[4].Driver.familyName,
                    fastLab: race.Results.find(item => item.FastestLap.rank === '1').Driver.familyName,
                    currentStandings
                });
            });
            this.latestRace = results.data.MRData.RaceTable.Races.slice(-1)[0].raceName;
        },
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
        calculatePoints() {
            this.users.forEach((user) => {
                let points = 0;
                this.raceResults.forEach((raceResult) => {
                    const userPrediction = user.predictions[raceResult.raceName];
                    if (userPrediction) {
                        console.log(userPrediction.userName)
                        for (let posNr = 1; posNr <= 5; posNr++) {
                            if (userPrediction[`position${posNr}`] == raceResult[`position${posNr}`]) {
                                let bonusPoints = 0;
                                if (raceResult.currentStandings.length !== 0) {
                                    const currentPos = raceResult.currentStandings
                                        .findIndex(standing => standing.Driver.familyName == userPrediction[`position${posNr}`]) - (posNr-1);  
                                    bonusPoints = Math.abs(currentPos);
                                }
                                points += (bonusPoints + 3);
                            }
                        }
                        if (userPrediction.fastLab == raceResult.fastLab) {
                            points += 5;
                        }
                    }
                });
                user.points = points;
            });
            this.users.sort((a, b) => b.points - a.points);
            this.isLoading = false;
            this.pushStandingsToFirebase()
        },
        async pushStandingsToFirebase() {
            let userPoints = {}
            // this.users.forEach((user) => {
            //     this.usersPoints.push({
            //         userName: user.userName,
            //         points: user.points
            //     });
            // });
            for (let i = 0; i < this.users.length; i++) {
                let userpointsLoop = {
                    [this.users[i].userName]: this.users[i].points,
                } 
                Object.assign(userPoints, userpointsLoop)
                
            }
            await setDoc(doc(db, 'standings', 'allStandings'), {
                [this.latestRace] : userPoints
            }, { merge: true })
        }
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