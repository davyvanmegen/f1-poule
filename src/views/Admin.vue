<template>
    <h1>Admin page</h1>
    <h3>Welkom {{ userName }}</h3>
    <button type="button" class="btn btn-primary" @click="fetchData">Bereken Punten</button>
    <button type="button" class="btn btn-primary" @click="pushStandingsToFirebase">Push to firebase</button>
    <h2>Winner of the fastest laptime at the {{ latestRaceName }}:</h2>
    <p v-if="latestFastestLapTimeWinner"> {{ latestFastestLapTimeWinner }} </p>
    <p v-else> None </p>

    <h2>Puntentelling</h2>
    <table class="table">
        <thead class="table-light">
            <tr>
                <th scope="col" style="width: 15%">Pos</th>
                <th scope="col" style="width: 60%">Name</th>
                <th scope="col" style="width: 25%">Points</th>
            </tr>
        </thead>
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
import { auth } from '../firebase/init.js'
import db from '../firebase/init.js'
import { query, collection, getDocs, setDoc, doc, getDoc } from 'firebase/firestore'
import axios from 'axios'
import moment from 'moment'

export default {
    data () {
        return{
            userName: '',
            users: [],
            raceResults: [],
            latestRace: null,
            latestRaceName: '',
            usersPoints: [],
            isLoading: true,
            raceResultsPerRace : [],
            fastestLapTimeWinners : {},
            latestFastestLapTimeWinner: ''
        }
    },
    async mounted () {
        this.getUserName();
    },
    methods: {
        getUserName() {
            this.userName = auth.currentUser.displayName
        },
        fetchData() {
            console.log('hallo')
            this.fetchF1Data().then((result) => {
                if (result.length !== 0) {
                    this.raceResults = result;
                    this.fetchUsersData().then(() => {
                        this.calculatePoints();
                    })
                } else {
                    this.fetchData();
                }
            })
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
            this.latestRaceName = this.latestRace.raceName
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
            let lapTimeDifferenceArray = []
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
                                points += (bonusPoints + 2);
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
                console.log(diffObj)
                console.log('Daaaaag')
                for (const [race, value] of Object.entries(diffObj)) {

                    var winner = Object.keys(value).reduce(function(a, b){ return value[a] < value[b] ? a : b });

                    let objIndex = this.users.findIndex(obj => obj.userName == winner);
                    this.users[objIndex].points = this.users[objIndex].points + 5

                    this.fastestLapTimeWinners = Object.assign(this.fastestLapTimeWinners, {[race] : {firstPlace : winner}})
                }
                this.latestFastestLapTimeWinner = this.fastestLapTimeWinners[this.latestRaceName].firstPlace
            }
            
            this.users.sort((a, b) => b.points - a.points);
            this.isLoading = false
        },
        async pushStandingsToFirebase() {
            let userPoints = {
                roundNr: parseInt(this.latestRace.round)
            }
            for (let i = 0; i < this.users.length; i++) {
                let userpointsLoop = {
                    [this.users[i].userName]: this.users[i].points,
                } 
                Object.assign(userPoints, userpointsLoop)
                
            }
            await setDoc(doc(db, 'standings', 'allStandings'), {
                [this.latestRace.raceName] : userPoints
            }, { merge: true })
            for (let i = 0; i < this.raceResultsPerRace.length; i++) {
                let grandPrixName = Object.keys(this.raceResultsPerRace[i])[0]
                let testObject = this.raceResultsPerRace[i][grandPrixName]
                let userNameTest = Object.keys(this.raceResultsPerRace[i][grandPrixName])[0]
                await setDoc(doc(db, 'standings', grandPrixName), {
                    [userNameTest] : testObject[userNameTest]
                }, { merge: true })
            }
        }
    },
}
    
</script>
