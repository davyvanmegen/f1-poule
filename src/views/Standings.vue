<template>
    <h2>Standings</h2>

    <table class="table">
        <thead class="table-light">
            <tr>
            <th scope="col">Pos</th>
            <th scope="col">Name</th>
            <th scope="col">Points</th>
            </tr>
        </thead>
        <tbody v-for="(item, index) in userPoints2" :key="index">
            <tr>
            <th scope="row">{{ index+1 }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
            </tr>
        </tbody>
    </table>

</template>

<script>
import { auth } from '../firebase/init.js'
import db from '../firebase/init.js'
import {query, doc, setDoc, collection, addDoc, getDocs} from 'firebase/firestore'
import axios from 'axios'

export default {
    data() {
        return {
            users: [],
            userData: [],
            userArray: [],
            apiData: [],
            userPoints: [],
            test: [{name: "Davy", value: 0},{name: "Erida", value: 5},{name: "Sem", value: 4}],
            userPoints2: [],
            currentStandingsArray: []
        }
    },
    mounted () {
            this.listAllUsers()
            this.fetchAllCurrentF1Data()
            this.fetchAllCurrentUserData()

        },
    methods: {
        async listAllUsers() {
            const querySnap = await getDocs(query(collection(db, 'users')))

            // add each doc to 'countries' users array
            querySnap.forEach((doc) => {
                this.users.push(doc.data())
            })
        },
        async fetchAllCurrentF1Data() {
            const latestRace = await axios.get('https://ergast.com/api/f1/2024/next.json');
            const raceNumber = latestRace.data.MRData.RaceTable.round -1;
            //Implement all code to get all data untill now and loop over all races
            for (let i = 0; i < raceNumber; i++) {
                const response = await axios.get(`https://ergast.com/api/f1/2024/${i}/results.json`)
                const currentRace = response.data.MRData.RaceTable.Races[0].raceName
                const obj = response.data.MRData.RaceTable.Races[0].Results.find((item)=>{return item.FastestLap.rank==='1'})

                if (i!==0) {
                    const response2 = await axios.get(`http://ergast.com/api/f1/2024/${i}/driverStandings.json`)
                    const currentStandings = response2.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                    for (let i =0; i < currentStandings.length; i++) {
                        this.currentStandingsArray.push(currentStandings[i].Driver.familyName)
                    }
                }

                this.pos1 = response.data.MRData.RaceTable.Races[0].Results[0].Driver.familyName
                this.pos2 = response.data.MRData.RaceTable.Races[0].Results[1].Driver.familyName
                this.pos3 = response.data.MRData.RaceTable.Races[0].Results[2].Driver.familyName
                this.pos4 = response.data.MRData.RaceTable.Races[0].Results[3].Driver.familyName
                this.pos5 = response.data.MRData.RaceTable.Races[0].Results[4].Driver.familyName
                this.fastestLap = obj.Driver.familyName


                const race = {
                    [currentRace] : {
                        position1: this.pos1,
                        position2: this.pos2,
                        position3: this.pos3,
                        position4: this.pos4,
                        position5: this.pos5,
                        fastLab: this.fastestLap,
                        currentStandings: this.currentStandingsArray

                }};
                this.apiData.push(race) ;
            }
            
            
        },
        async fetchAllCurrentUserData() {
            //Loop over all user data
            const querySnap = await getDocs(query(collection(db, 'predictions')));
            querySnap.forEach((doc) => {
                this.userData.push(doc.data());
                this.userArray.push(doc.id);
                const pointsObj = {
                    [doc.id] : {points: 0}
                };
                this.userPoints.push(pointsObj);
            });
            this.computeCurrentResults();
        },
        computeCurrentResults() {
            for (var key in this.userArray) {
                let points = 0;
                for (var key2 in this.apiData) {
                    const user = this.userData[key][Object.keys(this.apiData[key2])];
                    const api = this.apiData[key2][Object.keys(this.apiData[key2])];
                    
                    if (user){
                        if (user.position1 == api.position1) {
                           correctionPoints = ( api.currentStandingsArray.findIndex(x => x == api.position1) + 1) - 1
                            points = points + 3 + Math.abs(correctionPoints);
                        }
                        if (user.position2 == api.position2) {
                            correctionPoints = ( api.currentStandingsArray.findIndex(x => x == api.position1) + 1) - 2
                            points = points + 3 + Math.abs(correctionPoints);
                        }
                        if (user.position3 == api.position3) {
                            correctionPoints = ( api.currentStandingsArray.findIndex(x => x == api.position1) + 1) - 3
                            points = points + 3 + Math.abs(correctionPoints);
                        }
                        if (user.position4 == api.position4) {
                            correctionPoints = ( api.currentStandingsArray.findIndex(x => x == api.position1) + 1) - 4
                            points = points + 3 + Math.abs(correctionPoints);
                        }
                        if (user.position5 == api.position5) {
                            correctionPoints = ( api.currentStandingsArray.findIndex(x => x == api.position1) + 1) - 5
                            points = points + 3 + Math.abs(correctionPoints);
                        }
                        if (user.fastLab == api.fastLap) {
                            points = points + 5;
                        }
                    }  
                }
                //Add up all points
                this.userPoints[key] = points;
                this.userPoints2[key] = {name: this.userArray[key], value: points}

            }
            // Sort the arrays
            this.userPoints2.sort((a, b) => a.value - b.value).reverse()
            this.test.sort((a, b) => a.value - b.value).reverse();

            
        }
    }
}
</script>

<style>

</style>