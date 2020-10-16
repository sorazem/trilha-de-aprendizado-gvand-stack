<template>
  <div id="app">
    <v-app-bar>
      <h1>Filmax</h1>
      <v-spacer></v-spacer>
      <v-text-field hide-details="auto" prepend-inner-icon="fa-search" placeholder="Procure filmes"></v-text-field>
      <v-spacer></v-spacer>
      <router-link to="/">Home</router-link>
      <router-link to="/perfil">Perfil</router-link>
    </v-app-bar>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1{
  font-family: 'Staatliches', cursive;
  font-size: 2em;
}
a {
  color: #2c3e50;
  margin-right: 8px;
  text-decoration: none;
}
a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}
.v-icon{
  font-size: 16px !important;
  margin-right: 8px;
}
</style>
