<template>
  <div>
    <div class="row">
      <div class="col-sm">
        <h1>City edit</h1>
      </div>
    </div>
    <hr>
    <div class="row mb-2">
      <div class="col-sm">
        <router-link to="/cities">Cities</router-link>
      </div>
    </div>
    <hr class="mb-5">
    <CityEdit></CityEdit>
  </div>
</template>

<script>
import CityEdit from '@/components/CityEdit'

export default {
  name: 'CitiesEdit',
  components: {
    CityEdit
  }
}
</script>
