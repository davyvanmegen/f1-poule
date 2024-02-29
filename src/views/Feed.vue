<template>
  <h3>Welkom {{ displayName }}</h3>
  <div class="row">
        <div class="col-md-4 offset-md-0">
            <div>
            <div>
                <h4>Prediction for --insert next race--:</h4>
                <hr />
            </div>
            <form>
                <div class="form-group">
                    <label>First Place</label>
                    <input type="text" class="form-control" v-model="userName"/>
                </div>
                <div class="form-group">
                    <label>Second Place</label>
                    <input type="text" class="form-control" v-model="email"/>
                </div>
                <div class="form-group">
                    <label>Third place</label>
                    <input type="password" class="form-control" v-model="password1"/>
                </div>
                <div class="form-group">
                    <label>Fastest Lap</label>
                    <input type="password" class="form-control" v-model="password2"/>
                </div>
                <div class="my-3">
                    <button type="submit" class="btn btn-primary" @click="sendData">Send prediction</button>
                </div>
            </form>
        </div>
        </div>
    </div>
</template>

<script>
import { auth } from '../firebase/init.js'
import db from '../firebase/init.js'
import { collection, addDoc } from 'firebase/firestore'

export default {
  data () {
    return {
      displayName: '',
      pos1: '',
      pos2: '',
      pos3: '',
      fastestLap: '',
      nextRace: 'Netherlands',
      predictionArray: []
    }
  },
  mounted() {
    if (auth.currentUser) {
      // set local 'displayName' to user's displayName
      this.displayName = auth.currentUser.displayName
    }
  },
  methods: {
    async sendData() {
      // This code does not work unfortunately, needs to be checked
      // const colRef = collection(db, 'users')
      // // data to send
      // const dataObj = {
      //   firstName: 'Erida',
      //   lastName: 'van Megen',
      //   dob: '2000'
      // }

      // const docRef = await addDoc(colRef, dataObj)
    }
  }
}
</script>
  
<style>

</style>