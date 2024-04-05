<template>

  <h3>Welkom {{ displayName }}</h3>
  <h6>Verstuur je voorspelling voor de <b> {{ nextRace.raceName }} </b> tot de sluiting:</h6>
  <Counter/>
  <hr />
  <div class="row">
    <div class="col-md-4 offset-md-0">
      <div v-if="isFormDisabled" class="alert alert-warning" role="alert">
        <p>Je kan je voorspelling voor de {{ nextRace.raceName }} niet meer invullen/aanpassen. Kom morgen terug om je voorspelling voor de volgende race te doen. </p>
      </div>
      <label>Eerste plek</label>
      <select class="form-select" aria-label="Default select example" v-model="pos1" :disabled="isFormDisabled">
        <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{ item }}</option>
      </select>
      <label>Tweede plek</label>
      <select class="form-select" aria-label="Default select example" v-model="pos2" :disabled="isFormDisabled">
        <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{ item }}</option>
      </select>
      <label>Derde plek</label>
      <select class="form-select" aria-label="Default select example" v-model="pos3" :disabled="isFormDisabled">
        <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{ item }}</option>
      </select>
      <label>Vierde plek</label>
      <select class="form-select" aria-label="Default select example" v-model="pos4" :disabled="isFormDisabled">
        <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{ item }}</option>
      </select>
      <label>Vijfde plek</label>
      <select class="form-select" aria-label="Default select example" v-model="pos5" :disabled="isFormDisabled">
        <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{ item }}</option>
      </select>
      <label>Snelste raceronde</label>
      <select class="form-select" aria-label="Default select example" v-model="fastestLap" :disabled="isFormDisabled">
        <option v-for="(item, index) in currentDrivers" :value="item" :key="index">{{ item }}</option>
      </select>
      <div class="form-group">
        <label for="exampleInputEmail1">Snelste raceronde tijd</label>
        <div class="display-flex">
          <label for="exampleInputEmail1">Minuten (m)</label>
          <label for="exampleInputEmail1">Seconden (ss)</label>
          <label for="exampleInputEmail1">Milliseconden (mmm)</label>
        </div>
        <div class="display-flex">
          <input class="form-control" placeholder="(m)" v-model="fastestLapMinutes" style="max-width: 120px;" type="string" maxlength="1">
          <input class="form-control" placeholder="(ss)" v-model="fastestLapSeconds" style="max-width: 120px;" type="string" maxlength="2">
          <input class="form-control" placeholder="(mmm)" v-model="fastestLapMilliseconds" style="max-width: 120px;" type="string" maxlength="3">
        </div>
      </div>
      <div class="my-3">
        <button type="button" class="btn btn-primary" @click="sendData" :disabled="isFormDisabled">Verzend
          voorspelling</button>
      </div>
    </div>
  </div>
  <h4>Voorspellingen van anderen voor de {{ nextRace.raceName }}: </h4>
  <hr />
  <div class="card-container">
    <div class="card" v-for="item in userNextPredictions" :key="item">
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
              <td v-if="item.position1">{{ item.position1 }}</td>
              <td v-else><i>Geen voorspelling</i></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td v-if="item.position2">{{ item.position2 }}</td>
              <td v-else><i>Geen voorspelling</i></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td v-if="item.position3">{{ item.position3 }}</td>
              <td v-else><i>Geen voorspelling</i></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td v-if="item.position4">{{ item.position4 }}</td>
              <td v-else><i>Geen voorspelling</i></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td v-if="item.position5">{{ item.position5 }}</td>
              <td v-else><i>Geen voorspelling</i></td>
            </tr>
            <tr>
              <th scope="row">FL</th>
              <td v-if="item.fastLab">{{ item.fastLab }}</td>
              <td v-else><i>Geen voorspelling</i></td>
            </tr>
            <tr>
              <th scope="row">FLT</th>
              <td v-if="item.fastestLapMinutes">{{ item.fastestLapMinutes }}:{{ item.fastestLapSeconds }}.{{ item.fastestLapMilliseconds }} </td>
              <td v-else><i>Geen voorspelling</i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '../firebase/init.js'
import db from '../firebase/init.js'
import { doc, setDoc, getDocs, query, collection, getDoc } from 'firebase/firestore'
import axios from 'axios'
import Counter from '../components/Counter.vue'

export default {
  components: {
    Counter
  },
  data() {
    return {
      displayName: '',
      pos1: '',
      pos2: '',
      pos3: '',
      pos4: '',
      pos5: '',
      fastestLap: '',
      fastestLapTime: {},
      fastestLapMinutes: '',
      fastestLapSeconds: '',
      fastestLapMilliseconds: '',
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

    this.getNextRace().then(() => {
      this.getCurrentPredictions().then(() => {
        this.fetchAllCurrentUserData()
      })
    })
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
        if (data[this.nextRace.raceName]) {
          this.userNextPredictions.push(data[this.nextRace.raceName])
        }
      })
    },
    async sendData() {
      if (this.nextRaceDate !== this.currentDate) {
        if (this.fastestLapSeconds.length === 1) {
          this.fastestLapSeconds = "0".concat(this.fastestLapSeconds)
        }
        // await setDoc(doc(db, 'predictions', auth.currentUser.displayName), {
        await setDoc(doc(db, 'predictions', auth.currentUser.displayName), {
          [this.nextRace.raceName]: {
            position1: this.pos1,
            position2: this.pos2,
            position3: this.pos3,
            position4: this.pos4,
            position5: this.pos5,
            fastLab: this.fastestLap,
            fastestLapMinutes: this.fastestLapMinutes,
            fastestLapSeconds: this.fastestLapSeconds,
            fastestLapMilliseconds: this.fastestLapMilliseconds,
            userName: auth.currentUser.displayName
          }
        }, { merge: true });
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
      let response = null
      response = await axios.get('https://ergast.com/api/f1/2024/next.json');
      if (response) {
        this.nextRace = response.data.MRData.RaceTable.Races[0];

        await setDoc(doc(db, 'info', 'nextRace'), {
                      nextRace : this.nextRace,
                  }, { merge: true })
      } else {
        const querySnap = await getDocs(query(collection(db, 'info')));
        querySnap.forEach((doc) => {
          this.nextRace = doc.data().nextRace
        })

      }
      
      this.nextRaceDate = new Date(this.nextRace.date+'T00:00:00').toISOString().split('T')[0];
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
          this.fastestLapMinutes = val[this.nextRace.raceName].fastestLapMinutes;
          this.fastestLapSeconds = val[this.nextRace.raceName].fastestLapSeconds;
          this.fastestLapMilliseconds = val[this.nextRace.raceName].fastestLapMilliseconds;
        }
      });
    }
  }
}
</script>

<style scoped>
.card-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  min-width: 49%;
  margin-bottom: 10px;
}

@media only screen and (max-width: 992px) {
  .card {
    width: 100%;
    margin-bottom: 10px;
  }
}

.card-body {
  margin: 0;
  padding: 0;
}
</style>