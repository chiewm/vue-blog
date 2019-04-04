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

<style>

* {
  margin: 0;
  padding: 0;
}

body{
  min-height: 980px;
  font-family: -apple-system,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Arial,sans-serif;
  background: #f4f5f5;
}

a {
  text-decoration: none;
}

#app .router-link-exact-active {
  color: #4fc08d;
}

.container {
  margin: 0 auto;
  width: 960px;

}


ul {
  list-style-type: none;
}

clearfix::after, clearfix::before{
  content: "";
  display: table;
}

clearfix::after, clearfix::before{
  clear: both;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
