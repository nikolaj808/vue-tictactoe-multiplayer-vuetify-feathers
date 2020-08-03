<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Create game
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create game</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-form @submit.prevent>
                <v-col cols="12">
                  <v-text-field label="Game name" v-model="game.name" required></v-text-field>
                </v-col>
                <v-col cols="12" v-if="passwordRequired">
                    <v-text-field label="Password" v-model="game.password" :required="passwordRequired"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-checkbox v-model="passwordRequired" label="Password required"></v-checkbox>
                </v-col>
              </v-form>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text type="submit" @click="createGame">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

export default {
    data: () => ({
      dialog: false,
      passwordRequired: false,
      game: {
        name: '',
        password: '',
      },
      notEmptyRules: [(value) => !!value || 'Field cannot be empty'],
    }),
    methods: {
      createGame() {
        console.log('Create game called');
        this.dialog = false;
        let password = this.passwordRequired ? this.game.password : '';

        const { Game } = this.$FeathersVuex.api;
        const game = new Game({
          name: this.game.name,
          password: password,
        });

        game.save()
          .then((game) => {
            this.$router.push('/game/' + game._id);
          })
      }
    }
}
</script>

<style scoped>

</style>