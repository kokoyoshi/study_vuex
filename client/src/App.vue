<template>
  <div id="app">
    <global-header></global-header>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>
<style>
  body {
    background-color: #f6f6f6;
  }
</style>
