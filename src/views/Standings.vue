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
        }
    }

}
</script>

<style>

</style>