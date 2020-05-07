<template>
  <div class="card">
    <div class="card-body">
      <div class="form-group row">
        <label for="input_name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" :class="{'is-invalid': this.error}" id="input_name" v-on:keyup="validate" v-model="city.name">
          <div v-if="error" class="invalid-feedback">
            {{ errorMessage }}
          </div>
        </div>
      </div>
      <hr>
       <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-success" v-on:click="saveCity">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cityService from '@/services/city.service'

export default {
  name: 'CityEdit',
  data () {
    return {
      city: {
        name: ''
      },
      error: false,
      errorMessage: null
    }
  },
  mounted () {
    cityService.getById(this.$route.params.id).then(response => {
      this.city = response.data.city
    })
  },
  methods: {
    saveCity () {
      this.validate()
      if (!this.error) {
        cityService.update(this.city).then(response => {
          this.$router.push({ name: 'view.cities' })
        })
      }
    },
    validate () {
      if (this.city.name) {
        if (this.city.name.length <= 2) {
          this.error = true
          this.errorMessage = 'City name must be longer than 2 characters.'
        } else {
          this.error = false
        }
      } else {
        this.error = true
        this.errorMessage = 'Please set a city name.'
      }
    }
  }
}
</script>
