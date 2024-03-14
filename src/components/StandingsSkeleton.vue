<template>
  <h2>Standings</h2>

    <table class="table">
        <thead class="table-light">
            <tr>
            <th scope="col">Pos</th>
            <th scope="col">Name</th>
            <th scope="col">Points</th>
            </tr>
        </thead>
        <tbody v-for="item in array" :key=item>
            <tr>
            <th scope="row">{{item}}</th>
            <td>
                <p class="placeholder-glow">
                    <span class="placeholder col-6"></span>
                </p>
            </td>
            <td>
                <p class="placeholder-glow">
                    <span class="placeholder col-2"></span>
                </p>
            </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    data() {
        return {
            array: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        }
       
    }
}
</script>

<style>

</style>