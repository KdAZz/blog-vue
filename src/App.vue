<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="css">
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}

html,body,#app{
  height: 100%;
  background-color: #f5f5f5;
}
.b-tabs .tabs{
  background-color: white;
}
.b-tabs .tab-content{
  padding: 0!important;
}
.el-container.is-vertical{
  background-color: #f5f5f5
}
</style>

