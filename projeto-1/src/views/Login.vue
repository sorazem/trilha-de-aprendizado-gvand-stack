<template>
  <v-main>
    <v-row class="d-flex flex-column pa-8 align-center justify-center">
      <h3 class="mb-4">Login rápido</h3>
      <v-text-field v-model="username" label="Nome de usuário" color="#6b00b3" outlined></v-text-field>
      <v-btn outlined @click="login(username)">Entrar</v-btn>
    </v-row>
    <div class="apollo">{{user.userId}}</div>
  </v-main>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Login',
  data(){
    return{
      username: '',
      user: ''
    }
  },
  methods: {
    login(username){

    },
    async searchUser(username){
      let response = await this.$apollo.query({
        query: gql`User(filter: {name: "Jessica Sherman"}){
          userId
        }`
      })
    }
  }
}
</script>

<style scoped>
  .v-text-field >>> label {
    font-size: 0.9em;
  }
  h3{
    color: #6b00b3;
  }
</style>
