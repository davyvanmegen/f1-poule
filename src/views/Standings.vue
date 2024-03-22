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