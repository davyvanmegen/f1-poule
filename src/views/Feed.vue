<template>
  <h3>Welkom {{ displayName }}</h3>
  <div class="row">
    <div class="col-md-4 offset-md-0">
      <div>
        <div>
          <h6>Verstuur je voorspelling voor de <b>{{ nextRace.raceName }}</b></h6>
          <hr />
        </div>
        <div v-if="isFormDisabled" class="alert alert-warning" role="alert">
          <p>You can not give and/or change your prediction anymore for {{ nextRace.raceName }}. Come back tomorrow to
            give your prediction for next race. </p>
        </div>
        <label>First Place</label>
        <select class="form-select" aria-label="Default select example" v-model="pos1" :disabled="isFormDisabled">
          <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{ item }}</option>
        </select>
        <label>Second Place</label>
        <select class="form-select" aria-label="Default select example" v-model="pos2" :disabled="isFormDisabled">
          <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{ item }}</option>
        </select>
        <label>Third Place</label>
        <select class="form-select" aria-label="Default select example" v-model="pos3" :disabled="isFormDisabled">
          <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{ item }}</option>
        </select>
        <label>Fourth Place</label>
        <select class="form-select" aria-label="Default select example" v-model="pos4" :disabled="isFormDisabled">
          <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{ item }}</option>
        </select>
        <label>Fifth Place</label>
        <select class="form-select" aria-label="Default select example" v-model="pos5" :disabled="isFormDisabled">
          <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{ item }}</option>
        </select>
        <label>Fastest Lap</label>
        <select class="form-select" aria-label="Default select example" v-model="fastestLap" :disabled="isFormDisabled">
          <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{ item }}</option>
        </select>
        <div class="my-3">
          <button type="button" class="btn btn-primary" @click="sendData" :disabled="isFormDisabled">Verzend voorspelling</button>
        </div>
      </div>
    </div>
  </div>
  <h4>Prediction of others for the {{ nextRace.raceName }}: </h4>
  <hr />
  <div class="">
    <div class="card-container" v-for="item in userNextPredictions" :key="item">
      <div class="card" style="max-width: 18rem;" v-if="item !== undefined">
        <h5 class="card-header">{{ item.userName }}</h5>
        <div class="card-body">
          <table class="table">
              <thead class="table-light">
                  <tr>
                  <th scope="col">Pos</th>
                  <th scope="col">Name</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                  <th scope="row">1</th>
                  <td>{{ item.position1 }}</td>
                  </tr>
                  <tr>
                  <th scope="row">2</th>
                  <td>{{ item.position2 }}</td>
                  </tr>
                  <tr>
                  <th scope="row">3</th>
                  <td>{{ item.position3 }}</td>
                  </tr>
                  <tr>
                  <th scope="row">4</th>
                  <td>{{ item.position4 }}</td>
                  </tr>
                  <tr>
                  <th scope="row">5</th>
                  <td>{{ item.position5 }}</td>
                  </tr>
                  <tr>
                  <th scope="row">FL</th>
                  <td>{{ item.fastLab }}</td>
                  </tr>
              </tbody>
          </table>
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
  data() {
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
      p1: 'position1',
      userData: [],
      userArray: [],
      userNextPredictions: [],
      nextRaceDate: '',
      currentDate: ''
    }
  },

  created() {
    this.displayCurrentUser()
    this.getNextRace()
    this.getCurrentPredictions()
    this.fetchAllCurrentUserData()
  },
  methods: {
    async fetchAllCurrentUserData() {
      //Loop over all user data
      const querySnap = await getDocs(query(collection(db, 'predictions')));
      querySnap.forEach((doc) => {
        this.userData.push(doc.data());
        this.userArray.push(doc.id);
      });
      this.userData.forEach((data) => {
        // console.log(data[this.nextRace.raceName].userName)
        this.userNextPredictions.push(data[this.nextRace.raceName])
      })
      //console.log(this.userData)
    },
    async sendData() {
      if (this.nextRaceDate !== this.currentDate) {
        // await setDoc(doc(db, 'predictions', auth.currentUser.displayName), {
        await setDoc(doc(db, 'predictions', auth.currentUser.displayName), {
          [this.nextRace.raceName]: {
            position1: this.pos1,
            position2: this.pos2,
            position3: this.pos3,
            position4: this.pos4,
            position5: this.pos5,
            fastLab: this.fastestLap,
            userName: auth.currentUser.displayName
          }
        }, { merge: true })
          // .then(() => {
          //   return getDocs(query(collection(db, 'predictions')));
          // }).then(docRef => {
          //   let jank = [];
          //   let jank2 = [];
          //   docRef.forEach((doc) => {
          //     jank.push(doc.data());
          //     jank2.push(doc.id);
          //   });

          //   console.log(jank)
          // });
        alert('Bedankt voor je voorspelling!')
        window.location.reload()
      } else { 
        alert(`You are too late to give and/or change your prediction for${this.nextRace}. Come back tomorrow to give your prediction for the next race.`) 
      }
    },

    displayCurrentUser() {
      if (auth.currentUser) {
        this.displayName = auth.currentUser.displayName
      }
    },
    async getNextRace() {
      const response = await axios.get('https://ergast.com/api/f1/2024/next.json');
      this.nextRace = response.data.MRData.RaceTable.Races[0];

      this.nextRaceDate = new Date(this.nextRace.date).toISOString().split('T')[0];
      this.currentDate = new Date().toISOString().split('T')[0];

      this.isFormDisabled = (this.nextRaceDate === this.currentDate);
    },
    async getCurrentPredictions() {
      const querySnap = await getDocs(query(collection(db, 'predictions')));
      const predictions = [];
      querySnap.forEach((doc) => {
        predictions.push(doc.data());
      });

      predictions.forEach((val) => {
        if (val[this.nextRace.raceName] !== undefined && val[this.nextRace.raceName].userName === this.displayName) {
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

<style scoped>
.card-body {
  margin: 0;
  padding: 0;
}
</style>