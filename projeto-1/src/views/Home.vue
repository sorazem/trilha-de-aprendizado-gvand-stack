<template>
  <div class="pa-4">
    <ApolloQuery :query="require('@/graphql/movies/getRecommendedMovies.gql')" :variables="{first: 6, id: this.userId}">
      <template slot-scope="{result: {loading, error, data}}">
        <v-row class="px-8">
          <v-col sm="10" align="left">
            <h3 class="my-4">Recomendado para você</h3>
          </v-col>
          <v-col sm="2" class="d-flex align-center justify-end">
            <v-btn @click="$router.push('/movies/RecommendedMovies')" small outlined color="#6b00b3">Ver mais</v-btn>
          </v-col>
        </v-row>
        <div v-if="data">
          <v-row class="px-8">
            <v-col sm="4" md="2" lg="2" class="d-flex justify-center align-start" v-for="movie in data.User[0].recommendedMovies" :key="movie.movieId">
              <movie-card class="mx-2" :movie="movie"></movie-card>
            </v-col>
          </v-row>
        </div>
        <div v-if="loading">Carregando...</div>
        <div v-else-if="error">Ops, tente novamente.</div>
      </template>
    </ApolloQuery>

    <ApolloQuery :query="require('@/graphql/movies/getMoviesFromAllGenres.gql')" :variables="{first: 6}">
      <template slot-scope="{result: {loading, error, data}}">
        <div v-if="data">
          <v-flex v-for="genero in data.Genre" :key="genero.name">
            <v-row class="px-8">
              <v-col sm="10" align="left">
                <h3 class="my-4">{{genero.name}}</h3>
              </v-col>
              <v-col sm="2" class="d-flex align-center justify-end">
                <v-btn @click="$router.push('/movies/' + genero.name)" small outlined color="#6b00b3">Ver mais</v-btn>
              </v-col>
            </v-row>
            <v-row class="px-8">
              <v-col sm="4" md="2" lg="2" class="d-flex justify-center align-start" v-for="movie in genero.movies" :key="movie.movieId">
                <movie-card class="mx-2" :movie="movie"></movie-card>
              </v-col>
            </v-row>
          </v-flex>
        </div>
        <div v-if="loading">Carregando...</div>
        <div v-else-if="error">Ops, tente novamente.</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard'

export default {
  name: 'Home',
  components: {
    MovieCard
  },
  mounted(){
    this.userId = localStorage.getItem('user_id')
  },
  data(){
    return{
      userId: '',
      pageSize: 6
    }
  }
}
</script>
