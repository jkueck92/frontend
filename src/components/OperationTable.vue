<template>
  <div class="card">
    <div class="card-body">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Keyword</th>
            <th scope="col">City</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="operation in operations" v-bind:key="operation.id">
            <td>{{ operation.operation_date }}</td>
            <td>{{ operation.operation_time }}</td>
            <td>{{ operation.keyword }}</td>
            <td>{{ operation.name }}</td>
            <td>
              <button class="btn btn-sm btn-danger" v-on:click="deleteOperation(operation)">D</button>
              <button class="btn btn-sm btn-primary ml-1" v-on:click="showOperation(operation)">S</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import operationService from '@/services/operation.service'

export default {
  name: 'OperationTable',
  data () {
    return {
      operations: Array
    }
  },
  methods: {
    deleteOperation (operation) {
      operationService.delete(operation).then(response => {
        this.init()
      })
    },
    showOperation (operation) {
      // this.$router.push({ name: 'view.cities.edit', params: { id: city.id } })
      console.log('show')
    },
    init () {
      operationService.getAll().then(response => {
        this.operations = response.data.operations
      })
    }
  },
  created () {
    this.init()
  }
}
</script>
