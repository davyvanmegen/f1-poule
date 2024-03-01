<template>
  <h2>Standings</h2>
  <ul>
    <li v-for="(item, index) in users" :key="index">
      <h5>{{item.userName}}</h5>
    </li>
  </ul>
</template>

<script>
import { auth } from '../firebase/init.js'
import db from '../firebase/init.js'
import {query, doc, setDoc, collection, addDoc, getDocs} from 'firebase/firestore'

export default {
    data() {
        return {
            users: []
        }
    },
    mounted () {
            this.listAllUsers()
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

            //Implement all code to get all data untill now and loop over all races
            const response = await axios.get('https://ergast.com/api/f1/2023/{{round}}/results.json');
            
        },
        async fetchAllCurrentUserData() {

            //Loop over all user data
            const querySnap = await getDocs(query(collection(db, 'predictions')))
        },
        computeCurrentResults() {

        }
    }

}
</script>

<style>

</style>