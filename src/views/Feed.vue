<template>
  <h3>Welkom {{ displayName }}</h3>
  <div class="row">
        <div class="col-md-4 offset-md-0">
            <div>
            <div>
                <h6>Prediction for {{nextRace}}:</h6>
                <hr />
            </div>

            <label>First Place</label>
            <select class="form-select" aria-label="Default select example" v-model="pos1">
              <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{item}}</option>
            </select>
            <label>Second Place</label>
            <select class="form-select" aria-label="Default select example" v-model="pos2">
              <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{item}}</option>
            </select>
            <label>Third Place</label>
            <select class="form-select" aria-label="Default select example" v-model="pos3">
              <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{item}}</option>
            </select>
            <label>Fastest Lap</label>
            <select class="form-select" aria-label="Default select example" v-model="fastestLap">
              <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{item}}</option>
            </select>
            <div class="my-3">
              <button type="submit" class="btn btn-primary" @click="sendData">Send prediction</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { auth } from '../firebase/init.js'
import db from '../firebase/init.js'
import { doc, setDoc, collection, addDoc } from 'firebase/firestore'
import axios from 'axios'

export default {
  data () {
    return {
      displayName: '',
      pos1: '',
      pos2: '',
      pos3: '',
      fastestLap: '',
      nextRace: '',
      predictionArray: [],
      raceApi: '',
      currentDrivers: [
        'Verstappen',
        'Perez',
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
        'Sargeant'
      ],
      testVal: null,
      p1: 'position1'
    }
  },
  mounted() {
    this.displayCurrentUser()
    this.getNextRace()
  },
  methods: {
    async sendData() {
      await setDoc(doc(db, 'predictions', auth.currentUser.displayName), {
        [this.nextRace] : {
          position1: this.pos1,
          position2: this.pos2,
          position3: this.pos3,
          fastLab: this.fastestLap
        }
      }, {merge: true})
    },
    displayCurrentUser() {
      if (auth.currentUser) {
      // set local 'displayName' to user's displayName
      this.displayName = auth.currentUser.displayName
      }
    },
    async getNextRace() {
      const response = await axios.get('https://ergast.com/api/f1/2023/next.json');
      this.nextRace = response.data.MRData.RaceTable.Races[0].raceName
      console.log(this.nextRace)
    }
  }
}
</script>
  
<style>

</style>