<template>
    <h1>History</h1>
    <p>Hier zie je een overzicht van alle voorspellingen die gedaan zijn tot nu toe. (Het kan soms zijn dat het laden tussen de 5-10 seconden duurt, dit wordt nog opgelost.)</p>
    <div class="col-md-2 offset-md-0">
        <h6>Sorteer op naam:</h6>
        <select class="form-select" aria-label="Default select example" v-model="selectedUser" :disabled="isFormDisabled">
            <option value="" disabled hidden>Selecteer een naam</option>
            <option v-for="(user, index) in users" :key="index">{{ user.userName }}</option>
        </select>
    </div>
    <hr />
    <div v-if="selectedUser">
        <h4>{{ users.find(o => o.userName.trim() === selectedUser).userName }}</h4>
        <div v-for="(prediction, key) in users.find(o => o.userName.trim() === selectedUser).predictions" :key="key">
                <div class="card-container">
                <div class="card" style="min-width: 18rem;" v-if="prediction !== undefined">
                    <h5 class="card-header">{{key}}</h5>
                    <div class="card-body">
                    <table class="table">
                        <thead class="table-light">
                            <tr>
                            <th scope="col">Pos</th>
                            <th scope="col">Prediction</th>
                            <th scope="col">Outcome</th>
                            </tr>
                        </thead>
                        <tbody v-if="raceResults.find(o => o.raceName === key)">
                            <tr>
                            <th scope="row">1</th>
                            <td v-if="prediction.position1 === raceResults.find(o => o.raceName === key).position1" style="color:Green;">{{ prediction.position1 }} </td>
                            <td v-else-if="prediction.position1 !== raceResults.find(o => o.raceName === key).position1" style="color:tomato;">{{ prediction.position1 }} </td>
                            <td v-else>{{ prediction.position1 }} </td>
                            <td> {{ raceResults.find(o => o.raceName === key).position1 }}</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td v-if="prediction.position2 === raceResults.find(o => o.raceName === key).position2" style="color:Green;">{{ prediction.position2 }} </td>
                            <td v-else-if="prediction.position2 !== raceResults.find(o => o.raceName === key).position2" style="color:tomato;">{{ prediction.position2 }} </td>
                            <td v-else>{{ prediction.position2 }} </td>
                            <td v-if="raceResults.find(o => o.raceName === key)"> {{ raceResults.find(o => o.raceName === key).position2 }}</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td v-if="prediction.position3 === raceResults.find(o => o.raceName === key).position3" style="color:Green;">{{ prediction.position3 }} </td>
                            <td v-else-if="prediction.position3 !== raceResults.find(o => o.raceName === key).position3" style="color:tomato;">{{ prediction.position3 }} </td>
                            <td v-else>{{ prediction.position3 }} </td>
                            <td v-if="raceResults.find(o => o.raceName === key)"> {{ raceResults.find(o => o.raceName === key).position3 }}</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td v-if="prediction.position4 === raceResults.find(o => o.raceName === key).position4" style="color:Green;">{{ prediction.position4 }} </td>
                            <td v-else-if="prediction.position4 !== raceResults.find(o => o.raceName === key).position4" style="color:tomato;">{{ prediction.position4 }} </td>
                            <td v-else>{{ prediction.position4 }} </td>
                            <td v-if="raceResults.find(o => o.raceName === key)"> {{ raceResults.find(o => o.raceName === key).position4 }}</td>
                            </tr>
                            <tr>
                            <th scope="row">5</th>
                            <td v-if="prediction.position5 === raceResults.find(o => o.raceName === key).position5" style="color:Green;">{{ prediction.position5 }} </td>
                            <td v-else-if="prediction.position5 !== raceResults.find(o => o.raceName === key).position5" style="color:tomato;">{{ prediction.position5 }} </td>
                            <td v-else>{{ prediction.position5 }} </td>
                            <td v-if="raceResults.find(o => o.raceName === key)"> {{ raceResults.find(o => o.raceName === key).position5 }}</td>
                            </tr>
                            <tr>
                            <th scope="row">FL</th>
                            <td v-if="prediction.fastLab === raceResults.find(o => o.raceName === key).fastLap" style="color:Green;">{{ prediction.fastLab }} </td>
                            <td v-else-if="prediction.fastLab !== raceResults.find(o => o.raceName === key).fastLap" style="color:tomato;">{{ prediction.fastLab }} </td>
                            <td v-else>{{ prediction.fastLab }} </td>
                            <td v-if="raceResults.find(o => o.raceName === key)"> {{ raceResults.find(o => o.raceName === key).fastLap }}</td>
                            </tr>
                            <tr>
                            <th scope="row">FLT</th>
                            <td v-if="prediction.fastestLapMinutes">{{ prediction.fastestLapMinutes }}:{{ prediction.fastestLapSeconds }}.{{ prediction.fastestLapMilliseconds }} </td>
                            <td v-else></td>
                            <td v-if="raceResults.find(o => o.raceName === key)"> {{ raceResults.find(o => o.raceName === key).fastLapTime }}</td>
                            </tr>
                            <tr>
                            <th scope="row">Punten</th>
                            <td v-if="usersStandings.find(o => o.raceName === key)"> + {{usersStandings.find(o => o.raceName === key).points[users.find(o => o.userName.trim() === selectedUser).userName]}} </td>
                            <td v-else></td>
                            <td></td>
                            </tr>
                        </tbody>
                        
                        <tbody v-else>
                            <tr>
                            <th scope="row">1</th>
                            <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                            <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                            <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                            <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                            <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                            </tr>
                            <tr>
                            <th scope="row">5</th>
                            <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                            <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                            </tr>
                            <tr>
                            <th scope="row">FL</th>
                            <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                            <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
        </div>
    </div>
    <div v-else>
        <div v-for="(user, index) in users" :key="index">
            <h4>{{ user.userName }}</h4>
            <div v-for="(prediction, key) in user.predictions" :key="key">
                <div class="">
                    <div class="card-container">
                    <div class="card" style="min-width: 18rem;" v-if="prediction !== undefined">
                        <h5 class="card-header">{{key}}</h5>
                        <div class="card-body">
                        <table class="table">
                            <thead class="table-light">
                                <tr>
                                <th scope="col">Pos</th>
                                <th scope="col">Prediction</th>
                                <th scope="col">Outcome</th>
                                </tr>
                            </thead>
                            <tbody v-if="raceResults.find(o => o.raceName === key)">
                                <tr>
                                <th scope="row">1</th>
                                <td v-if="prediction.position1 === raceResults.find(o => o.raceName === key).position1" style="color:Green;">{{ prediction.position1 }} </td>
                                <td v-else-if="prediction.position1 !== raceResults.find(o => o.raceName === key).position1" style="color:tomato;">{{ prediction.position1 }} </td>
                                <td v-else>{{ prediction.position1 }} </td>
                                <td> {{ raceResults.find(o => o.raceName === key).position1 }}</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td v-if="prediction.position2 === raceResults.find(o => o.raceName === key).position2" style="color:Green;">{{ prediction.position2 }} </td>
                                <td v-else-if="prediction.position2 !== raceResults.find(o => o.raceName === key).position2" style="color:tomato;">{{ prediction.position2 }} </td>
                                <td v-else>{{ prediction.position2 }} </td>
                                <td v-if="raceResults.find(o => o.raceName === key)"> {{ raceResults.find(o => o.raceName === key).position2 }}</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td v-if="prediction.position3 === raceResults.find(o => o.raceName === key).position3" style="color:Green;">{{ prediction.position3 }} </td>
                                <td v-else-if="prediction.position3 !== raceResults.find(o => o.raceName === key).position3" style="color:tomato;">{{ prediction.position3 }} </td>
                                <td v-else>{{ prediction.position3 }} </td>
                                <td v-if="raceResults.find(o => o.raceName === key)"> {{ raceResults.find(o => o.raceName === key).position3 }}</td>
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td v-if="prediction.position4 === raceResults.find(o => o.raceName === key).position4" style="color:Green;">{{ prediction.position4 }} </td>
                                <td v-else-if="prediction.position4 !== raceResults.find(o => o.raceName === key).position4" style="color:tomato;">{{ prediction.position4 }} </td>
                                <td v-else>{{ prediction.position4 }} </td>
                                <td v-if="raceResults.find(o => o.raceName === key)"> {{ raceResults.find(o => o.raceName === key).position4 }}</td>
                                </tr>
                                <tr>
                                <th scope="row">5</th>
                                <td v-if="prediction.position5 === raceResults.find(o => o.raceName === key).position5" style="color:Green;">{{ prediction.position5 }} </td>
                                <td v-else-if="prediction.position5 !== raceResults.find(o => o.raceName === key).position5" style="color:tomato;">{{ prediction.position5 }} </td>
                                <td v-else>{{ prediction.position5 }} </td>
                                <td v-if="raceResults.find(o => o.raceName === key)"> {{ raceResults.find(o => o.raceName === key).position5 }}</td>
                                </tr>
                                <tr>
                                <th scope="row">FL</th>
                                <td v-if="prediction.fastLab === raceResults.find(o => o.raceName === key).fastLap" style="color:Green;">{{ prediction.fastLab }} </td>
                                <td v-else-if="prediction.fastLab !== raceResults.find(o => o.raceName === key).fastLap" style="color:tomato;">{{ prediction.fastLab }} </td>
                                <td v-else>{{ prediction.fastLab }} </td>
                                <td v-if="raceResults.find(o => o.raceName === key)"> {{ raceResults.find(o => o.raceName === key).fastLap }}</td>
                                </tr>
                                <tr>
                                <th scope="row">FLT</th>
                                <td v-if="prediction.fastestLapMinutes">{{ prediction.fastestLapMinutes }}:{{ prediction.fastestLapSeconds }}.{{ prediction.fastestLapMilliseconds }} </td>
                                <td v-else></td>
                                <td v-if="raceResults.find(o => o.raceName === key)"> {{ raceResults.find(o => o.raceName === key).fastLapTime }}</td>
                                </tr>
                                <tr>
                                <th scope="row">Punten</th>
                                <td v-if="usersStandings.find(o => o.raceName === key)"> + {{usersStandings.find(o => o.raceName === key).points[user.userName]}} </td>
                                <td v-else></td>
                                <td></td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                <th scope="row">1</th>
                                <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                                <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                                <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                                <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                                <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                                </tr>
                                <tr>
                                <th scope="row">5</th>
                                <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                                <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                                </tr>
                                <tr>
                                <th scope="row">FL</th>
                                <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                                <td class="placeholder-glow"><span class="placeholder col-6"></span></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import db from '../firebase/init.js'
import { query, collection, getDocs, getDoc, doc } from 'firebase/firestore'

export default {
    data () {
        return {
            users: [],
            usersStandings: [],
            raceResults: [],
            selectedUser: ''
        }
    },
    mounted() {
        this.fetchUsersData()
        this.fetchF1Data()
    },
    methods: {
        async fetchUsersData() {
            const querySnap = await getDocs(query(collection(db, 'predictions')));
            querySnap.forEach((doc) => {
                this.users.push({
                    userName: doc.id,
                    predictions: doc.data(),
                    points: 0
                });
            });
            const querySnap2 = await getDocs(query(collection(db, 'standings')));
            querySnap2.forEach((doc) => {
                this.usersStandings.push({
                    raceName: doc.id,
                    points: doc.data()
                });
            });
        },
        async fetchF1Data() {
            const customResults = [];
            const querySnap = await getDoc(query(doc(db, 'results', 'allRaceResults')));
            let object = querySnap.data()
            let counter = 0
            for (var key in object) {
                counter = counter + 1
                let currentStandings = null;
                const querySnap2 = await getDoc(query(doc(db, 'results', 'championshipStandings')))
                let object2 = querySnap2.data()
                if (object2[key]) {
                    currentStandings = object2[key]
                }
                if (object.hasOwnProperty(key)) {
                    customResults.push({
                        raceName: key,
                        raceNumber: object[key].raceNumber,
                        position1: object[key].position1,
                        position2: object[key].position2,
                        position3: object[key].position3,
                        position4: object[key].position4,
                        position5: object[key].position5,
                        fastLap: object[key].fastLap,
                        fastLapTime : object[key].fastLapTime,
                        currentStandings
                    });
                }
            }

            this.raceResults = customResults;
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