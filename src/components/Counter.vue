<template>
    <div>
        {{ displayDays }} : {{ displayHours }} : {{ displayMinutes }} : {{ displayseconds }}
    </div>
</template>

<script>
import db from '../firebase/init.js'
import { getDocs, query, collection } from 'firebase/firestore'
export default {
    data: () => ({
        displayDays: "00",
        displayHours: "00",
        displayMinutes: "00",
        displayseconds: "00",
        nextRace: null
    }),
    computed: {
        _seconds: () => 1000,
        _minutes() {
            return this._seconds * 60
        },
        _hours() {
            return this._minutes * 60
        },
        _days() {
            return this._hours * 24
        }
    },
    mounted() {
        this.getNextRacedate()
        this.showRemaining()
    },
    methods: {
        async getNextRacedate() {
            const querySnap = await getDocs(query(collection(db, 'info')));
            querySnap.forEach((doc) => {
                this.nextRace = doc.data().nextRace
            })
        },
        showRemaining() {
            const timer = setInterval(() => {
                const now = new Date();
                const end = new Date(this.nextRace.date+'T00:00:00')
                const distance = end.getTime() - now.getTime();

                if (distance < 0) {
                    clearInterval(timer)
                    return
                }

                const days = Math.floor((distance / this._days));
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);
                this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
                this.displayseconds = seconds < 10 ? "0" + seconds : seconds;
                this.displayHours = hours < 10 ? "0" + hours : hours;
                this.displayDays = days < 10 ? "0" + days : days;

            }, 1000);
        }
    }
}
</script>

<style>

</style>