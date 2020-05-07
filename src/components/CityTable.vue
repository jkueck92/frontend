<template>
  <div class="card">
    <div class="card-body">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="city in cities" v-bind:key="city.id">
            <th scope="row">{{ city.id }}</th>
            <td>{{ city.name }}</td>
            <td>
              <button class="btn btn-sm btn-danger" v-on:click="deleteCity(city)">D</button>
              <button class="btn btn-sm btn-primary ml-1" v-on:click="showCity(city)">S</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import cityService from '@/services/city.service'

export default {
  name: 'CityTable',
  data () {
    return {
      cities: Array
    }
  },
  methods: {
    deleteCity (city) {
      cityService.delete(city).then(response => {
        this.init()
      })
    },
    showCity (city) {
      this.$router.push({ name: 'view.cities.edit', params: { id: city.id } })
    },
    init () {
      cityService.getAll().then(response => {
        this.cities = response.data.cities
      })
    }
  },
  created () {
    this.init()
  }
}
</script>
