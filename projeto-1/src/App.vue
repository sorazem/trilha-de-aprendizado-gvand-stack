<template>
  <div id="app">
    <v-app-bar
      app
      color="#4dc3ff"
      dark
    >
      <v-toolbar-title>Filmow</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <router-link to="/home">Home</router-link>
      <router-link to="/favourites">Favourites</router-link> -->
    </v-app-bar>
    <v-main class="px-8">
      <router-view />
    </v-main>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
