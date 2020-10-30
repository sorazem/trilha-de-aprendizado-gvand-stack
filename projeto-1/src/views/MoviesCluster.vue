<template>
  <v-main>
    <div class="pa-4" v-if="genero != 'RecommendedMovies'">
      <h3 class="my-4">{{genero}}</h3>
      <ApolloQuery :query="require('@/graphql/movies/getMoviesbyGenre.gql')"
      :variables="{genre: genero, first: this.pageSize}"
      fetch-policy="cache-and-network">
        <template slot-scope="{result: {loading, error, data}}">
          <div v-if="data">
            <v-row class="px-8">
              <v-col sm="4" md="2" lg="2" class="d-flex justify-center align-start" v-for="movie in data.Genre[0].movies" :key="movie.movieId">
                <movie-card class="mx-2" :movie="movie"></movie-card>
              </v-col>
            </v-row>
          </div>
          <div v-if="loading">Carregando...</div>
          <div v-else-if="error">Ops, tente novamente.</div>
          <v-btn class="my-4" color="#6b00b3" outlined @click="loadMore()">Mais filmes!</v-btn>
        </template>
      </ApolloQuery>
    </div>
    <div class="pa-4" v-else>
      <h3 class="my-4">Filmes recomendados</h3>
      <ApolloQuery :query="require('@/graphql/movies/getRecommendedMovies.gql')"
      :variables="{first: this.pageSize}"
      fetch-policy="cache-and-network">
        <template slot-scope="{result: {loading, error, data}}">
          <div v-if="data">
            <v-row class="px-8">
              <v-col sm="4" md="2" lg="2" class="d-flex justify-center align-start" v-for="movie in data.User[0].recommendedMovies" :key="movie.movieId">
                <movie-card class="mx-2" :movie="movie"></movie-card>
              </v-col>
            </v-row>
          </div>
          <div v-if="loading">Carregando...</div>
          <div v-else-if="error">Ops, tente novamente.</div>
          <v-btn class="my-4" color="#6b00b3" outlined @click="loadMore()">Mais filmes!</v-btn>
        </template>
      </ApolloQuery>
    </div>
  </v-main>
</template>
<script>
  import MovieCard from '../components/MovieCard'

  export default{
    name: 'MoviesCluster',
    components: { MovieCard },
    data(){
      return{
        pageSize: 12
      }
    },
    computed: {
      genero(){
        let genero = this.$route.params.genero
        return genero[0].toUpperCase() + genero.slice(1)
      }
    },
    methods: {
      loadMore(){
        this.pageSize += 6
      }
    }
  }
</script>
<style scoped>
  .v-btn:hover{
    background-color: #6b00b3;
    color: #fff !important;
  }
</style>
