<template>
  <div>
    <div class="row">
      <div class="col-sm">
        <h1>Cities</h1>
      </div>
    </div>
    <hr>
    <div class="row mb-2">
      <div class="col-sm">
        <router-link to="/cities/new">Create city</router-link>
      </div>
    </div>
     <hr class="mb-5">
    <CityTable></CityTable>
  </div>
</template>

<script>
import CityTable from '@/components/CityTable'

export default {
  name: 'Cities',
  components: {
    CityTable
  }
}
</script>
