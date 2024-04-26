<template>
  <div class="flooter">
    <el-row class="row1">
      <ButtonComponent></ButtonComponent>
    </el-row>
    <el-row class="row2">
      <TableComponent></TableComponent>
    </el-row>
    <createBoard></createBoard>
  </div>
</template>

<script>
import TableComponent from './table/index.vue'
import ButtonComponent from './button/index.vue'
import createBoard from './dialog/createBoard.vue'
export default {
  name: 'IndexApp',
  components: {
    TableComponent,
    ButtonComponent,
    createBoard
  },
  methods: {

  }
}
</script>

<style>
.flooter {
  height: 300px;
  border: 1px solid #000;
  box-shadow: -9px -5px 20px #fff;
  width: 100%;
  background-color: beige;
  position: fixed;
  bottom: 0px;
  margin-left: -9px;
}
.row1 {
  height: 50px;
  border-bottom: 1px solid #000;
  width: 100%;
}
</style>