<template>
  <div>
    <el-table :data="tableData" border="1">
      <el-table-column prop="type" label="类型" width="230"></el-table-column>
      <el-table-column prop="des" label="描述" width="227"></el-table-column>
      <el-table-column prop="board" label="版本" width="227"></el-table-column>
      <el-table-column prop="isVarm" label="是否选焊" width="227"></el-table-column>
      <el-table-column prop="time" label="时间" width="227"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column v-for="{ item, index } in headers" :key="index">
        <template #header>
          <div>{{ item }}</div>
        </template>
        <template #default="scope">
          <div>{{ scope.$index  }}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'TableComponent',
  data() {
    return {
      headers: [1, 2, 3, 4]
    }
  },
  computed: {
    tableData() {
      return this.$store.state.tableData;
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style></style>