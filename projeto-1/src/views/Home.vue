<template>
  <div class="pa-4">
    <v-flex v-for="(category, index) in this.categories" :key="index">
      <v-row class="px-8">
        <v-col sm="10" align="left">
          <h3 class="my-4">{{category.title}}</h3>
        </v-col>
        <v-col sm="2" class="d-flex align-center justify-end">
          <v-btn @click="$router.push('/movies/' + index)" small outlined color="#6b00b3">Ver mais</v-btn>
        </v-col>
      </v-row>
      <ApolloQuery :query="category.query"
      :variables="category.variables"
      fetch-policy="cache-and-network">
        <template slot-scope="{result: {loading, error, data}}">
          <div v-if="data">
            <v-row class="px-8" v-if="data.User">
              <v-col sm="4" md="2" lg="2" class="d-flex justify-center align-start" v-for="movie in data.User[0].recommendedMovies" :key="movie.movieId">
                <movie-card class="mx-2" :movie="movie"></movie-card>
              </v-col>
            </v-row>
            <v-row class="px-8" v-if="data.Genre">
              <v-col sm="4" md="2" lg="2" class="d-flex justify-center align-start" v-for="movie in data.Genre[0].movies" :key="movie.movieId">
                <movie-card class="mx-2" :movie="movie"></movie-card>
              </v-col>
            </v-row>
          </div>
          <div v-if="loading">Carregando...</div>
          <div v-else-if="error">Ops, tente novamente.</div>
        </template>
      </ApolloQuery>
    </v-flex>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard'

export default {
  name: 'Home',
  components: {
    MovieCard
  },
  data(){
    return{
      pageSize: 6,
      categories: {
        RecommendedMovies: {
          title: 'Recomendados para você',
          query: require('@/graphql/movies/getRecommendedMovies.gql'),
          variables: {first: 6, id: 4}
        },
        Adventure: {
          title: 'Aventura',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'Adventure'}
        },
        Comedy: {
          title: 'Comédia',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'Comedy'}
        },
        Action: {
          title: 'Ação',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'Action'}
        },
        Fantasy: {
          title: 'Fantasia',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'Fantasy'}
        },
        Romance: {
          title: 'Romance',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'Romance'}
        },
        Drama: {
          title: 'Drama',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'Drama'}
        },
        Crime: {
          title: 'Crime',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'Crime'}
        },
        Mystery: {
          title: 'Mistério',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'Mystery'}
        },
        Thriller: {
          title: 'Thriller',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'Thriller'}
        },
        Horror: {
          title: 'Terror',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'Horror'}
        },
        'Sci-Fi': {
          title: 'Sci-fi',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'Sci-Fi'}
        },
        Musical: {
          title: 'Musical',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'Musical'}
        },
        Children: {
          title: 'Para crianças',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'Children'}
        },
        Documentary: {
          title: 'Documentário',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'Documentary'}
        },
        Western: {
          title: 'Western',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'Western'}
        },
        War: {
          title: 'Guerra',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'War'}
        },
        'Film-Noir': {
          title: 'Film-Noir',
          query: require('@/graphql/movies/getMoviesbyGenre.gql'),
          variables: {first: 6, genre: 'Film-Noir'}
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
