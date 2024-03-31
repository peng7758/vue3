<template>
  <div id="vartbom">
    <IndexApp></IndexApp>
  </div>
</template>

<script>
import IndexApp from './components/index.vue'

export default {
  name: 'App',
  components: {
    IndexApp
  }
}
</script>

<style>
body {
  background-color: #000;
}
#vartbom {
  position: fixed;
  bottom: 0;
  height: 200px;
  border: 1px solid #8d8787;
  width: 100%;
  box-shadow: 0px -1px red;
  background-color: #fff;
  margin-left: -10px;
}
</style>
