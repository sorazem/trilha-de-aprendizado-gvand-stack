<template>
  <div class="home">
    <h2 class="ma-8">Filmes</h2>
    <ApolloQuery :query="require('@/graphql/movies/getMovies.gql')"
    :variables="{
      first: this.pageSize
    }"
    fetch-policy="cache-and-network">
      <template slot-scope="{result: {loading, error, data}}">
        <div v-if="loading">Carregando...</div>
        <div v-else-if="error">Ops, tente novamente.</div>
        <div v-else-if="data">
          <span v-for="movie in data.Movie" :key="movie.movieId">{{movie.title}}</span>
        </div>
      </template>
    </ApolloQuery>
    <v-btn @click="loadMore">Carregar mais</v-btn>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    //
  },
  data(){
    return{
      pageSize: 10
    }
  },
  methods: {
    loadMore(){
      this.pageSize += 10
    }
  }
}
</script>

<style scoped>
</style>
