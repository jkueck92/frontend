<template>
  <div>
    <div class="row">
      <div class="col-sm">
        <h1>Operations</h1>
      </div>
    </div>
    <hr>
    <div class="row mb-2">
      <div class="col-sm">
        <router-link to="/oeprations/new">Create operation</router-link>
      </div>
    </div>
    <hr class="mb-5">
    <OperationTable></OperationTable>
  </div>
</template>

<script>
import OperationTable from '@/components/OperationTable'

export default {
  name: 'OperationsView',
  components: {
    OperationTable
  }
}
</script>
