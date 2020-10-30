<template>
  <div>
    <v-card outlined max-width="150">
      <v-img v-if="profile" :src="movie.Movie.poster"/>
      <v-img :src="movie.poster">
        <v-chip
          label
          color="#6b00b3"
          text-color="#fff"
        >{{movie.imdbRating? movie.imdbRating : "-"}}</v-chip>
      </v-img>
      <v-card-title v-if="!profile" class="pb-2" style="fontSize: 0.9em; wordBreak: normal; lineHeight: 1.3">{{movie.title}}</v-card-title>
      <v-card-text v-if="!profile" style="fontSize: 0.7em; textAlign: left">{{movie.year}} - {{movie.runtime}} minutos</v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ['movie', 'profile']
}
</script>
<style scoped>
  .v-chip{
    position: absolute;
    left: 0;
    text-align: center;
  }
</style>
