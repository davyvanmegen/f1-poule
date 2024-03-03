<template>
  <h2>Standings</h2>
  <ul>
    <li v-for="(item, index) in users" :key="index">
      <h5>{{item.userName}} - {{ userPoints[index] }}</h5>
    </li>
  </ul>
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
            userPoints: []
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
                this.pos1 = response.data.MRData.RaceTable.Races[0].Results[0].Driver.familyName
                this.pos2 = response.data.MRData.RaceTable.Races[0].Results[1].Driver.familyName
                this.pos3 = response.data.MRData.RaceTable.Races[0].Results[2].Driver.familyName
                const race = {
                    [currentRace] : {
                        position1: this.pos1,
                        position2: this.pos2,
                        position3: this.pos3,
                        fastLab: ''
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
                            points = points + 3;
                        }
                        if (user.position2 == api.position2) {
                            points = points + 3;
                        }
                        if (user.position3 == api.position3) {
                            points = points + 3;
                        }
                    }  
                }
                this.userPoints[key] = points;
            }
        }
    }
}
</script>

<style>

</style>