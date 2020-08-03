<template>
    <v-container fluid>
        <v-slide-y-transition>
            <v-layout column align-center>
                <v-form v-if="!loading" v-model="valid" @submit.prevent="login" @keydown.prevent.enter>
                    <v-text-field
                        v-model="user.username"
                        :rules="notEmptyRules"
                        label="Username"
                        required
                    />
                    <v-text-field
                        v-model="user.password"
                        :rules="notEmptyRules"
                        type="password"
                        label="Password"
                        required
                    />
                    <v-btn type="submit" :disabled="!valid">Login</v-btn>
                </v-form>
                <v-progress-circular v-if="loading" :size="70" :width="7" indeterminate color="orange lighten-1"></v-progress-circular>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import store from '@/store';

export default {
    name: 'Login',
    store,
    data: () => ({
        valid: false,
        user: {
            username: '',
            password: '',
        },
        notEmptyRules: [(value) => !!value || 'Field cannot be empty'],
    }),
    computed: {
        ...mapState('auth', { loading: 'isAuthenticatePending' }),
    },
    methods: {
        login() {
            if (this.valid) {
                this.$store.dispatch('auth/authenticate', {
                    strategy: 'local',
                    username: this.user.username,
                    password: this.user.password,
                })
                .then(() => {
                    console.log('Logged in!');
                    this.$router.push('/');
                })
                .catch(error => {
                    if (!error.message.includes('Could not find stored JWT')) {
                        console.error(error);
                    }
                });
            }
        }
    }
};
</script>