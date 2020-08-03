<template>
  <v-layout class="fill-height d-flex flex-column">
    <FeathersVuexGet service="games" :id="id" :watch="[id]">
      <div v-if="game" slot-scope="{ item: game }">
        <v-row justify="center" align="start" class="flex-grow-0">
          <h1>Tic Tac Toe - {{ game.name }}</h1>
        </v-row>
        <v-row class="flex-grow-1">
          <v-col align="center" cols="12" sm="4">
            <Board :game="game" />
          </v-col>
          <v-col cols="12" sm="8">
            <Chat :game="game" />
          </v-col>
        </v-row>
      </div>
    </FeathersVuexGet>
  </v-layout>
</template>

<script>
import Board from '../components/Board.vue';
import Chat from '../components/Chat.vue';

export default {
  name: 'Game',
  components: {
    Board,
    Chat,
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped>

</style>
