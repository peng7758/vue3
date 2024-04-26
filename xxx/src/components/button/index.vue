<template>
  <div class='buttonList'>
    <div>
      {{ boardName }}
    </div>
    <el-button @click="addBoard" size="small">创建版本</el-button>
    <el-input size="small" v-model="input" style="width: 240px" placeholder="Please input"></el-input>
    <el-scarch size="small"></el-scarch>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  computed: {
    boardName () {
      return this.$store.state.boardName;
    }
  },
  methods: {
    addBoard() {
      this.$store.commit('createBodDialog', true)
    }
  }
}
</script>

<style>
.buttonList {
  display: flex;
}
</style>