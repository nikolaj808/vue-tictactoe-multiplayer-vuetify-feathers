<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list nav dense>

        <v-list-item-group active-class="orange--text lighten-1 text--accent-4">

          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/designtesting">
            <v-list-item-icon>
              <v-icon>mdi-test-tube</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Design testing</v-list-item-title>
          </v-list-item>
        </v-list-item-group>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="orange lighten-1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Tic Tac Toe</v-toolbar-title>
      <v-spacer></v-spacer>
      <h3 v-if="user" class="mr-3">Welcome, {{ user.displayName }}!</h3>
      <v-btn v-if="!authenticated" style="background-color: inherit;" class="mr-5" :to="{ name: 'Signup' }">Signup</v-btn>
      <v-btn v-if="!authenticated" style="background-color: inherit;" :to="{ name: 'Login' }">Login</v-btn>
      <v-btn v-if="authenticated" style="background-color: inherit;" @click="logOut()">Logout</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid class="fill-height">
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <v-spacer></v-spacer>
      <div>
        &copy; {{ new Date().getFullYear() }} - Made with
        <v-icon color="#E31B23">mdi-heart</v-icon>
        &
        <v-icon color="#ADADAD">mdi-coffee</v-icon>
        using Vue, Vuetify, Feathers and Mongo
      </div>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
import store from '@/store';
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'App',
  store,
  data: () => ({
    drawer: false,
  }),
  computed: {
    ...mapState({ user: state => state.auth.user}),
    ...mapGetters({authenticated: 'auth/isAuthenticated'}),
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout',
      authenticate: 'auth/authenticate'
    }),
    logOut() {
      this.logout()
        .then(() => {
          this.$router.push('/');
        });
    }
  },
  mounted() {
    console.log(this.$store);
    this.authenticate()
      .then(() => {
        console.log('Authenticated.');
      })
      .catch(error => {
        if (!error.message.includes('Could not find stored JWT')) {
          console.log('Not authenticated.');
        }
      });
  }
}
</script>
