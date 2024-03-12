<template>
    <Suspense>
    <template #default>
        <standingsTable/>
    </template>
    <template #fallback>
        <StandingsSkeleton/>
    </template>
  </Suspense>


</template>

<script>
import { auth } from '../firebase/init.js'
import db from '../firebase/init.js'
import {query, doc, setDoc, collection, addDoc, getDocs} from 'firebase/firestore'
import axios from 'axios'
import StandingsSkeleton from '@/components/StandingsSkeleton.vue'
import StandingsTable from '@/components/StandingsTable.vue'

export default {
    components: {
        StandingsSkeleton,
        StandingsTable
    }
}
</script>

<style>

</style>