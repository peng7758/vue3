import { computed } from 'vue';
<template>
  <el-dialog v-model="createBodDialog" width="500" draggable overflow class="createBodDialog" title="创建版本"
    @close="cancelDialog">
    <template #default>
      <div>
        <table>
          <tr>
            <td>版本名称</td>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <td>继承版本</td>
            <td>
              <el-select></el-select>
            </td>
          </tr>
          <tr>
            <td>版本描述</td>
            <td>
              <el-input v-model="description" type="textarea" style="width: 300px;" show-word-limit
                max-length="100"></el-input>
            </td>
          </tr>
        </table>
        <!-- <canvas id="tryCanvas" width="400px" height="100px"></canvas> -->
      </div>
    </template>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cancelDialog">Cancel</el-button>
        <el-button type="primary" @click="confirmDialog">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
export default {
  // updated() {
  //   let canvas = document.getElementById('tryCanvas');
  //   let ctx = canvas && canvas.getContext('2d');
  //   ctx.fillStyle = "rgb(200,0,0)";
  //     //绘制矩形
  //   ctx.fillRect (10, 10, 55, 50);

  //   ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  //   ctx.fillRect (30, 30, 55, 50);
  // },
  data() {
    return {
      description: ''
    }
  },
  computed: {
    createBodDialog() {
      return this.$store.state.createBodDialog;
    }
  },
  methods: {
    cancelDialog() {
      this.$store.commit('createBodDialog', false);
    },
    confirmDialog() {
      this.$store.commit('createBodDialog', false);
    }
  }
}
</script>

<style>
.createBodDialog {
  /* width: 500px; */
  /* height: 500px; */
}

#tryCanvas {
  border: 1px solid #000;
}
</style>