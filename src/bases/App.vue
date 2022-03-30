<template>
<!-- Para intalar vuex usamremos npm add vuex@next --save en la linea-->
  <img alt="Vue logo" src="./assets/logo.png">
 
  <cont/>
</template>

<script>
import Cont from './components/Cont.vue'

export default {
  name: 'App',
  components: {
    Cont
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
