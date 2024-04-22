<template>
    <h1>Admin page</h1>
    <h3>Welkom {{ userName }}</h3>
    <h6>{{ raceName }}</h6>
    <p>{{ raceResult }}</p>
    <h5>Verzend race resultaten voor geselecteerde race</h5>
    <label>Race Name</label>
    <input class="form-control" placeholder="Race Name" v-model="raceName" style="max-width: 415px;" type="string">
    <label>Race Number</label>
    <input class="form-control" placeholder="Race Number" v-model="raceResult['raceNumber']" style="max-width: 415px;"
        type="string">
    <label>Fastest Lap Time</label>
    <input class="form-control" placeholder="Fastest laptime (m:ss.mmm)" v-model="raceResult['fastLapTime']"
        style="max-width: 415px;" type="string">
    <div class="col-md-4 offset-md-0">
        <label>Fastest Lap</label>
        <select class="form-select" aria-label="Default select example" v-model="raceResult['fastLap']">
            <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{ item }}</option>
        </select>
    </div>
    <div v-for="(item, index) in 5" :key=item>
        <div class="row">
            <div class="col-md-4 offset-md-0">
                <label>Plek {{ index + 1 }}</label>
                <select class="form-select" aria-label="Default select example"
                    v-model="raceResult['position' + (index + 1)]">
                    <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{ item }}</option>
                </select>
            </div>
        </div>
    </div>
    <button type="button" class="btn btn-primary" @click="pushRaceResultsToFirebase">Verzend race resultaten</button>
    <hr>
    <h6>{{ raceNameChampionshipStandings }}</h6>
    <p>{{ championshipStandings }}</p>
    <h5>Verzend stand in wk na geselecteerde race</h5>
    <input class="form-control" placeholder="Race Name" v-model="raceNameChampionshipStandings"
        style="max-width: 415px;" type="string">
    <div v-for="(item, index) in currentDrivers" :key=item>
        <div class="row">
            <div class="col-md-4 offset-md-0">
                <label>Plek {{ index + 1 }}</label>
                <select class="form-select" aria-label="Default select example"
                    v-model="championshipStandings['position' + (index + 1)]">
                    <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{ item }}</option>
                </select>
            </div>
        </div>
    </div>
    <button type="button" class="btn btn-primary" @click="pushChampionshipStandingsToFirebase">Verzend stand</button>
    <hr>
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
                    <td scope="row">{{ index + 1 }}</td>
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
    data() {
        return {
            userName: '',
            users: [],
            raceResults: [],
            raceResult: {},
            championshipStandings: {},
            latestRace: null,
            latestRaceName: '',
            usersPoints: [],
            isLoading: true,
            raceResultsPerRace: [],
            fastestLapTimeWinners: {},
            latestFastestLapTimeWinner: '',
            currentDrivers: [
                'Verstappen',
                'Pérez',
                'Hamilton',
                'Alonso',
                'Leclerc',
                'Norris',
                'Sainz',
                'Russell',
                'Piastri',
                'Strol',
                'Gasly',
                'Ocon',
                'Albon',
                'Tsunoda',
                'Bottas',
                'Hülkenberg',
                'Ricciardo',
                'Zhou',
                'Magnussen',
                'Lawson',
                'Sargeant',
                'Bearman',
            ],
            raceName: '',
            raceNameChampionshipStandings: '',
            raceNumber: '',
            latestRaceNumber: null
        }
    },
    async mounted() {
        this.getUserName();
    },
    methods: {
        getUserName() {
            this.userName = auth.currentUser.displayName
        },
        fetchData() {
            this.fetchF1DataFirebase().then((result) => {
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
        async fetchF1DataFirebase() {
            const customResults = [];
            const querySnap = await getDoc(query(doc(db, 'results', 'allRaceResults')));
            let object = querySnap.data()
            let counter = 0
            for (var key in object) {
                counter = counter + 1
                let currentStandings = null;
                const querySnap2 = await getDoc(query(doc(db, 'results', 'championshipStandings')))
                let object2 = querySnap2.data()
                if (object2[key]) {
                    currentStandings = object2[key]
                }
                if (object.hasOwnProperty(key)) {
                    customResults.push({
                        raceName: key,
                        raceNumber: object[key].raceNumber,
                        position1: object[key].position1,
                        position2: object[key].position2,
                        position3: object[key].position3,
                        position4: object[key].position4,
                        position5: object[key].position5,
                        fastLap: object[key].fastLap,
                        fastLapTime: object[key].fastLapTime,
                        currentStandings
                    });
                }
            }
            this.latestRaceName = customResults.find(o => o.raceNumber === `${counter}`).raceName;
            this.latestRaceNumber = counter;

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
                                    let currentPos = null;
                                    for (const [key, value] of Object.entries(raceResult.currentStandings)) {
                                        if (value === userPrediction[`position${posNr}`]) {
                                            currentPos = parseInt(key.slice(8)) - (posNr - 1);
                                        }
                                    }
                                    bonusPoints = Math.abs(currentPos);
                                    console.log(bonusPoints)
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
                                diffObj = Object.assign(diffObj, { [raceResult.raceName]: {} })
                                diffObj[raceResult.raceName] = Object.assign(diffObj[raceResult.raceName], { [user.userName]: lapTimeDifference })
                            } else {
                                diffObj[raceResult.raceName] = Object.assign(diffObj[raceResult.raceName], { [user.userName]: lapTimeDifference })
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
                    this.raceResultsPerRace.push({ [raceResult.raceName]: { [user.userName]: pointsLoop } })
                });
                user.points = points;
            });
            if (Object.keys(diffObj).length !== 0) {
                for (const [race, value] of Object.entries(diffObj)) {
                    var winner = Object.keys(value).reduce(function (a, b) { return value[a] < value[b] ? a : b });
                    let objIndex = this.users.findIndex(obj => obj.userName == winner);

                    this.users[objIndex].points = this.users[objIndex].points + 5
                    this.fastestLapTimeWinners = Object.assign(this.fastestLapTimeWinners, { [race]: { firstPlace: winner } })
                }
                this.latestFastestLapTimeWinner = this.fastestLapTimeWinners[this.latestRaceName].firstPlace
            }

            this.users.sort((a, b) => b.points - a.points);
            this.isLoading = false
        },
        async pushStandingsToFirebase() {
            let userPoints = {
                roundNr: this.latestRaceNumber
            }
            for (let i = 0; i < this.users.length; i++) {
                let userpointsLoop = {
                    [this.users[i].userName]: this.users[i].points,
                }
                Object.assign(userPoints, userpointsLoop)

            }
            await setDoc(doc(db, 'standings', 'allStandings'), {
                [this.latestRaceName]: userPoints
            }, { merge: true })
            if (this.fastestLapTimeWinners) {
                await setDoc(doc(db, 'standings', 'allStandings'), {
                    fastestLapTimeWinners: this.fastestLapTimeWinners
                }, { merge: true })
            }
            for (let i = 0; i < this.raceResultsPerRace.length; i++) {
                let grandPrixName = Object.keys(this.raceResultsPerRace[i])[0]
                let testObject = this.raceResultsPerRace[i][grandPrixName]
                let userNameTest = Object.keys(this.raceResultsPerRace[i][grandPrixName])[0]
                await setDoc(doc(db, 'standings', grandPrixName), {
                    [userNameTest]: testObject[userNameTest]
                }, { merge: true })
            }
        },
        async pushRaceResultsToFirebase() {
            await setDoc(doc(db, 'results', 'allRaceResults'), {
                [this.raceName]: this.raceResult
            }, { merge: true });
            alert('Succesfully pushed race results to Firebase')
        },
        async pushChampionshipStandingsToFirebase() {
            await setDoc(doc(db, 'results', 'championshipStandings'), {
                [this.raceNameChampionshipStandings]: this.championshipStandings
            }, { merge: true });
            alert('Succesfully pushed championshipstandings to Firebase')
        }
    }
}

</script>
