<template>
  <div>
    <div class="row">
      <div class="col-sm">
        <h1>City create</h1>
      </div>
    </div>
    <hr>
    <div class="row mb-2">
      <div class="col-sm">
        <router-link to="/cities">Cities</router-link>
      </div>
    </div>
    <hr class="mb-5">
    <CityCreate></CityCreate>
  </div>
</template>

<script>
import CityCreate from '@/components/CityCreate'

export default {
  name: 'Cities',
  components: {
    CityCreate
  }
}
</script>
