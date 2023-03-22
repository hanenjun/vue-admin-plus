<template>
  <nav>
    <router-link to="/a/son/home">Home</router-link> |
    <router-link to="/a/son/about">About</router-link>
  </nav>
  {{ data }}
  <router-view/>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      data: ''
    }
  },
  created() {
    axios.get('http://localhost:3000').then(res=>{
      this.data = res.data.message
    })
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
