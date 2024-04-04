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
            usersPoints: [],
            preResults: null,
            latestRaceName: null,
            fastestLapTimeWinner: ''
        }
    },
    async created () {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            const querySnap = await getDocs(query(collection(db, 'standings')));
            const latestRace = await axios.get('https://ergast.com/api/f1/current/last/results.json');
            this.latestRaceName = latestRace.data.MRData.RaceTable.Races[0].raceName;
            
            querySnap.forEach(doc => {
                this.preResults = doc.data()
            });

            // const value = Math.max(...Object.entries(this.preResults).map(o => o[1]['roundNr']));
            // console.log(this.preResults)

            // Object.entries(this.preResults).forEach((val) => {
            //     if (val[1]['roundNr'] === value) {
            //         latestRaceName = val[0];
            //     }
            // });

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
            } else {
                this.fetchF1Data().then((result) => {
                    if (result.length !== 0) {
                        this.raceResults = result;
                        this.fetchUsersData().then(() => {
                            this.calculatePoints();
                        })
                    } else {
                        this.fetchData();
                    }
                });
            }
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
                    fastLapTime : race.Results.find(item => item.FastestLap.rank === '1').FastestLap.Time.time,
                    currentStandings
                });
            }
            this.latestRace = results.data.MRData.RaceTable.Races.slice(-1)[0];
            return customResults;
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
            let diffObj = {}
            this.users.forEach((user) => {
                let points = 0;
                this.raceResults.forEach((raceResult) => {
                    let pointsLoop = 0;
                    const userPrediction = user.predictions[raceResult.raceName];
                    if (userPrediction) {
                        for (let posNr = 1; posNr <= 5; posNr++) {
                            if (userPrediction[`position${posNr}`] == raceResult[`position${posNr}`]) {
                                let bonusPoints = 0;
                                if (raceResult.currentStandings !== null) {
                                    const currentPos = raceResult.currentStandings
                                        .findIndex(standing => standing.Driver.familyName == userPrediction[`position${posNr}`]) - (posNr-1);  
                                    bonusPoints = Math.abs(currentPos);
                                }
                                points += (bonusPoints + 3);
                                pointsLoop += bonusPoints + 2
                            }
                        }
                        // Compute fastest lap points
                        if (userPrediction.fastLab == raceResult.fastLab) {
                            points += 5;
                            pointsLoop += 5;
                        }

                        // Compute fastest lap time difference
                        if (userPrediction.fastestLapMinutes && userPrediction.fastestLapSeconds && userPrediction.fastestLapMilliseconds) {
                            let lapTimeDifference = Math.abs(moment(`${userPrediction.fastestLapMinutes}:${userPrediction.fastestLapSeconds}.${userPrediction.fastestLapMilliseconds}`, 'mm:ss.SSS').diff(moment(raceResult.fastLapTime, 'mm:ss.SSS')))
                            //lapTimeDifferenceArray.push({[userPrediction.userName] : {[raceResult.raceName] : lapTimeDifference}})


                            if (!diffObj[raceResult.raceName]) {
                                diffObj = Object.assign(diffObj, {[raceResult.raceName] : {}})
                                diffObj[raceResult.raceName] = Object.assign(diffObj[raceResult.raceName], {[user.userName] : lapTimeDifference})
                            } else {
                                diffObj[raceResult.raceName] = Object.assign(diffObj[raceResult.raceName], {[user.userName] : lapTimeDifference})
                            }
                        }

                        // Compute top 5 points
                        let cloneUserPrediction = (({ fastLab, ...o }) => o)(userPrediction) // remove b and c
                        let cloneRaceResult = (({ fastLab, ...o }) => o)(raceResult)
                        let top5Points = 0
                        for (var key in cloneUserPrediction) {
                            if (cloneUserPrediction.hasOwnProperty(key)) {
                                for (var key2 in cloneRaceResult) {
                                    if (cloneRaceResult.hasOwnProperty(key2)) {
                                        if (cloneRaceResult[key2] === cloneUserPrediction[key]) {
                                            top5Points += 1
                                        }
                                    }
                                }
                            }
                        }
                        points += top5Points
                        pointsLoop += top5Points
                    }
                    this.raceResultsPerRace.push({[raceResult.raceName] : {[user.userName] : pointsLoop}})
                });
                user.points = points;
            });
            //console.log(this.raceResultsPerRace)
            if (Object.keys(diffObj).length !== 0) {
                for (const [race, value] of Object.entries(diffObj)) {
                    console.log(race)
                    var winner = Object.keys(value).reduce(function(a, b){ return value[a] < value[b] ? a : b });
                    console.log(winner)

                    let objIndex = this.users.findIndex(obj => obj.userName == winner);
                    this.users[objIndex].points = this.users[objIndex].points + 5

                    this.fastestLapTimeWinners = Object.assign(this.fastestLapTimeWinners, {[race] : {firstPlace : winner}})
                }
                this.latestFastestLapTimeWinner = this.fastestLapTimeWinners[this.latestRaceName].firstPlace
            }
            this.users.sort((a, b) => b.points - a.points);
            this.isLoading = false;
            this.pushStandingsToFirebase();
        },
        async pushStandingsToFirebase() {
            let userPoints = {
                roundNr: parseInt(this.latestRace.round)
            }
            for (let i = 0; i < this.users.length; i++) {
                let userpointsLoop = {
                    [this.users[i].userName]: this.users[i].points,
                } 
                Object.assign(userPoints, userpointsLoop);
            }

            await setDoc(doc(db, 'standings', 'allStandings'), {
                [this.latestRace.raceName] : userPoints
            }, { merge: true })
            if (this.fastestLapTimeWinners) {
                await setDoc(doc(db, 'standings', 'allStandings'), {
                    fastestLapTimeWinners : this.fastestLapTimeWinners
                }, { merge: true })
            }
            for (let i = 0; i < this.raceResultsPerRace.length; i++) {
                let grandPrixName = Object.keys(this.raceResultsPerRace[i])[0]
                let testObject = this.raceResultsPerRace[i][grandPrixName]
                let userNameTest = Object.keys(this.raceResultsPerRace[i][grandPrixName])[0]
                await setDoc(doc(db, 'standings', grandPrixName), {
                    [userNameTest] : testObject[userNameTest]
                }, { merge: true })
            }
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