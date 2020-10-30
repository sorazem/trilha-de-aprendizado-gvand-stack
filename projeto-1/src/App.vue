<template>
  <v-app id="app">
    <v-main>
      <v-app-bar color="#f8f8f8" fixed elevation="1">
        <router-link to="/"><h1>Filmax</h1></router-link>
        <v-spacer></v-spacer>
        <v-text-field color="#6b00b3" hide-details="auto" prepend-inner-icon="fa-search" placeholder="Procure filmes"></v-text-field>
        <v-spacer></v-spacer>
        <router-link to="/">Home</router-link>
        <router-link to="/perfil">Perfil</router-link>
      </v-app-bar>
      <router-view style="marginTop: 56px"/>
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  color: #2c3e50 !important;
  margin-right: 16px;
  text-decoration: none;
}
a.router-link-exact-active {
  color: #6b00b3 !important;
  font-weight: bold;
}
h1{
  font-family: 'Staatliches', cursive;
  font-size: 2em;
  color: #000;
}
.v-icon{
  font-size: 16px !important;
  margin-right: 8px;
}
.v-btn:hover{
  background-color: #6b00b3;
  color: #fff !important;
}
</style>
