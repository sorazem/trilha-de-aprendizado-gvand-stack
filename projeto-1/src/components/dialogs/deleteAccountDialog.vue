<template>
  <v-dialog persistent v-model="deleteAccountDialog" max-width="600px">
    <ApolloMutation :mutation="require('@/graphql/user/deleteAccount.gql')" :variables="{id: this.userId}">
      <template v-slot="{ mutate, error }">
        <v-card>
          <v-card-title>Deseja mesmo deletar sua conta?</v-card-title>
          <v-card-text align="left">Você perderá todos os seus dados e será levado para a página de login.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="closeDialog">Não</v-btn>
            <v-btn text @click="mutate(); closeDialog()" color="red" id="red">Sim</v-btn>
          </v-card-actions>
        </v-card>
        <v-snackbar v-if="error">An error occurred: {{ error }}</v-snackbar>
      </template>
    </ApolloMutation>
  </v-dialog>
</template>
<script>
export default {
  name: 'DeleteAccountDialog',
  props: ['deleteAccountDialog', 'userId'],
  methods:{
    closeDialog(){
      this.$emit('closeDeleteAccountDialog')
    }
  }
}
</script>
<style scoped>
  .v-btn:hover{
    background-color: lightgray;
    color: #000 !important;
  }

  #red:hover{
    color: red !important;
  }
</style>
