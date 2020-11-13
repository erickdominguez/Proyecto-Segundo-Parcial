<template >
  <div id="nav" >
    <router-link to="/">Libros Pendientes</router-link> |
    <router-link to="/create">Registrar retiro de libro</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  background-color: #F0F8FF;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #008B8B;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #008B8B;
}

#nav a.router-link-exact-active {
  color: #FF8C00;
}
</style>
