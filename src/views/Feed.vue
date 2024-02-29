<template>
  <h3>Welkom {{ displayName }}</h3>
  <div class="row">
        <div class="col-md-4 offset-md-0">
            <div>
            <div>
                <h4>Prediction for {{raceApi.raceName}} --implement date to go to next race--:</h4>
                <hr />
            </div>
            <form>
                <div class="form-group">
                    <label>First Place</label>
                    <input type="text" class="form-control" v-model="pos1"/>
                </div>
                <div class="form-group">
                    <label>Second Place</label>
                    <input type="text" class="form-control" v-model="pos2"/>
                </div>
                <div class="form-group">
                    <label>Third place</label>
                    <input type="text" class="form-control" v-model="pos3"/>
                </div>
                <div class="form-group">
                    <label>Fastest Lap</label>
                    <input type="text" class="form-control" v-model="fastestLap"/>
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
import { doc, setDoc, collection, addDoc } from 'firebase/firestore'
import axios from 'axios';

export default {
  data () {
    return {
      displayName: '',
      pos1: '',
      pos2: '',
      pos3: '',
      fastestLap: '',
      nextRace: 'Netherlands',
      predictionArray: [],
      raceApi: ''
    }
  },
  async mounted() {
    if (auth.currentUser) {
      // set local 'displayName' to user's displayName
      this.displayName = auth.currentUser.displayName
      const response = await axios.get('https://ergast.com/api/f1/2024.json');
      this.raceApi = response.data.MRData.RaceTable.Races[0];
      
    }
  },
  methods: {
    async sendData() {
      await setDoc(doc(db, 'predictions', auth.currentUser.displayName), {
        position1: this.pos1,
        position2: this.pos2,
        position3: this.pos3,
        fastLab: this.fastestLap
      }, {merge: true})
    }
  }
}
</script>
  
<style>

</style>