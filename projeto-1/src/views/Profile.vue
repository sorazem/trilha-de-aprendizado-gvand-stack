<template>
  <div class="py-8">
    <v-row class="d-flex justify-center align-center">
      <v-avatar size="64" class="mr-4">
        <img src="../assets/groot.svg">
      </v-avatar>
      <h3>Stephanie</h3>
    </v-row>
    <v-divider class="my-8"></v-divider>
    <v-row class="hidden-md-and-down">
      <h4 class="pl-6">Filmes recentes que você amou</h4>
      <ApolloQuery :query="require('@/graphql/movies/getRecent5StarRating.gql')"
      :variables="{first: 6}"
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
      <v-btn outlined color="#6b00b3" class="my-2">Mudar nome</v-btn>
      <v-btn outlined color="#6b00b3" class="my-2">Deletar conta</v-btn>
      <v-btn outlined color="#6b00b3" class="my-2" @click="logout">Sair</v-btn>
    </v-row>
  </div>
</template>
<script>
  import MovieCard from '../components/MovieCard'

  export default{
    name: 'Profile',
    components: { MovieCard },
    data(){
      return{
        images: ['eva', 'darthvader', 'deadpool', 'groot', 'ironman', 'stormtrooper']
      }
    },
    computed:{
      image(){
        return this.images[Math.floor((Math.random() * this.images.length))]
      }
    },
    methods: {
      logout(){
        localStorage.removeItem('user_id')
        this.$router.push('/login')
      }
    }
  }
</script>
<style scoped>
  .v-btn{
    margin-right: 16px;
  }
</style>
