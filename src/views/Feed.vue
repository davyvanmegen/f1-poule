<template>
  <h3>Welkom {{ displayName }}</h3>
  <div class="row">
        <div class="col-md-4 offset-md-0">
            <div>
            <div>
                <h6>Prediction for {{nextRace.raceName}}:</h6>
                <hr />
            </div>

            <label>First Place</label>
            <select class="form-select" aria-label="Default select example" v-model="pos1" :disabled="isFormDisabled">
              <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{item}}</option>
            </select>
            <label>Second Place</label>
            <select class="form-select" aria-label="Default select example" v-model="pos2" :disabled="isFormDisabled">
              <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{item}}</option>
            </select>
            <label>Third Place</label>
            <select class="form-select" aria-label="Default select example" v-model="pos3" :disabled="isFormDisabled">
              <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{item}}</option>
            </select>
            <label>Fourth Place</label>
            <select class="form-select" aria-label="Default select example" v-model="pos4" :disabled="isFormDisabled">
              <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{item}}</option>
            </select>
            <label>Fifth Place</label>
            <select class="form-select" aria-label="Default select example" v-model="pos5" :disabled="isFormDisabled">
              <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{item}}</option>
            </select>
            <label>Fastest Lap</label>
            <select class="form-select" aria-label="Default select example" v-model="fastestLap" :disabled="isFormDisabled">
              <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{item}}</option>
            </select>
            <div class="my-3">
              <button type="submit" class="btn btn-primary" @click="sendData" :disabled="isFormDisabled">Send prediction</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { auth } from '../firebase/init.js'
import db from '../firebase/init.js'
import { doc, setDoc, getDocs, query, collection } from 'firebase/firestore'
import axios from 'axios'

export default {
  data () {
    return {
      displayName: '',
      pos1: '',
      pos2: '',
      pos3: '',
      pos4: '',
      pos5: '',
      fastestLap: '',
      nextRace: {},
      isFormDisabled: false,
      prediction: [],
      predictionArray: [],
      raceApi: '',
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
        'Sargeant'
      ],
      testVal: null,
      p1: 'position1'
    }
  },

  mounted() {
    this.displayCurrentUser()
    this.getNextRace()
    this.getCurrentPredictions()
  },
  methods: {
    async sendData() {
      await setDoc(doc(db, 'predictions', auth.currentUser.displayName), {
        [this.nextRace.raceName] : {
          position1: this.pos1,
          position2: this.pos2,
          position3: this.pos3,
          position4: this.pos4,
          position5: this.pos5,
          fastLab: this.fastestLap,
          userName: auth.currentUser.displayName
        }
      }, {merge: true})

      alert('bedankt voor je voorspelling')
    },
    displayCurrentUser() {
      if (auth.currentUser) {
        this.displayName = auth.currentUser.displayName
      }
    },
    async getNextRace() {
      const response = await axios.get('https://ergast.com/api/f1/2024/next.json');
      this.nextRace = response.data.MRData.RaceTable.Races[0];

      const newDate = new Date(this.nextRace.date);
      const currentDate = new Date();

      this.isFormDisabled = (newDate === currentDate);
    },
    async getCurrentPredictions() {
      const querySnap = await getDocs(query(collection(db, 'predictions')));
      const predictions = [];
      querySnap.forEach((doc) => {
        predictions.push(doc.data());
      });

      predictions.forEach((val) => {
        if (val[this.nextRace.raceName].userName === this.displayName) {
          this.pos1 = val[this.nextRace.raceName].position1;
          this.pos2 = val[this.nextRace.raceName].position2;
          this.pos3 = val[this.nextRace.raceName].position3;
          this.pos4 = val[this.nextRace.raceName].position4;
          this.pos5 = val[this.nextRace.raceName].position5;
          this.fastestLap = val[this.nextRace.raceName].fastLab;
        }
      });
    }
  }
}
</script>
  
<style>

</style>