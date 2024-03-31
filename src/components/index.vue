<template>
  <div>
    <el-row>
      <ButtonComponent></ButtonComponent>
    </el-row>
    <el-row>
      <TableComponent></TableComponent>
    </el-row>
  </div>
</template>

<script>
import TableComponent from './table/index.vue'
import ButtonComponent from './button/index.vue'
export default {
  name: 'IndexApp',
  components: {
    TableComponent,
    ButtonComponent
  },
  methods: {
    
  }
}
</script>

<style>

</style>