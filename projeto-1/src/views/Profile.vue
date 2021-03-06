<template>
  <div class="py-8">
    <v-row class="d-flex justify-center align-center my-4">
      <v-avatar size="64" class="mr-4">
        <img src="../assets/groot.svg">
      </v-avatar>
      <h3>{{username}}</h3>
    </v-row>
    <v-row class="hidden-md-and-down">
      <h4 class="pl-6">Filmes recentes que você amou</h4>
      <ApolloQuery :query="require('@/graphql/movies/getRecent5StarRating.gql')"
      :variables="{first: 6, name: this.username}"
      fetch-policy="cache-and-network">
        <template slot-scope="{result: {loading, error, data}}">
          <div v-if="data">
            <v-row class="px-8">
              <v-col sm="4" md="2" lg="2" class="d-flex justify-center" v-for="movie in data.User[0].RATED_rel" :key="movie.movieId">
                <movie-card class="mx-2" :movie="movie" :profile="true"></movie-card>
              </v-col>
            </v-row>
          </div>
          <div v-if="loading">Carregando...</div>
          <div v-else-if="error">Ops, tente novamente.</div>
        </template>
      </ApolloQuery>
    </v-row>
    <v-row class="pl-4 mt-4">
      <v-col align="left"><h4>Configurações da conta</h4></v-col>
    </v-row>
    <v-row class="pl-8">
      <v-btn outlined color="#6b00b3" class="my-2" @click="changeUsernameDialog = true">Mudar nome</v-btn>
      <v-btn outlined color="#6b00b3" class="my-2" @click="deleteAccountDialog = true">Deletar conta</v-btn>
      <v-btn outlined color="#6b00b3" class="my-2" @click="logout">Sair</v-btn>
    </v-row>
    <delete-account-dialog :deleteAccountDialog="deleteAccountDialog" :userId="userId" @closeDeleteAccountDialog="closeDeleteAccountDialog"></delete-account-dialog>
    <change-username-dialog :changeUsernameDialog="changeUsernameDialog" :userId="userId" @closeChangeUsernameDialog="closeChangeUsernameDialog"></change-username-dialog>
  </div>
</template>
<script>
  import gql from 'graphql-tag'
  import MovieCard from '../components/MovieCard'
  import DeleteAccountDialog from '../components/dialogs/deleteAccountDialog'
  import ChangeUsernameDialog from '../components/dialogs/changeUsernameDialog'

  export default{
    name: 'Profile',
    components: { MovieCard, DeleteAccountDialog, ChangeUsernameDialog },
    data(){
      return{
        userId: '',
        username: '',
        images: ['eva', 'darthvader', 'deadpool', 'groot', 'ironman', 'stormtrooper'],
        deleteAccountDialog: false,
        changeUsernameDialog: false
      }
    },
    computed:{
      image(){
        return this.images[Math.floor((Math.random() * this.images.length))]
      }
    },
    methods: {
      closeChangeUsernameDialog(){
        this.changeUsernameDialog = false
      },
      closeDeleteAccountDialog(){
        this.deleteAccountDialog = false
        this.logout()
      },
      logout(){
        localStorage.removeItem('user_id')
        this.$router.push('/login')
      },
      async getUsername(){
        let response = await this.$apollo.query({
          query: gql`query($id: ID!){User(filter: {userId: $id}){
            name
          }}`,
          variables: {id: this.userId}
        })

        return response.data.User[0].name
      }
    },
    async mounted(){
      this.userId = localStorage.getItem('user_id')
      this.username = await this.getUsername()
    }
  }
</script>
<style scoped>
  .v-btn{
    margin-right: 16px;
  }
</style>
