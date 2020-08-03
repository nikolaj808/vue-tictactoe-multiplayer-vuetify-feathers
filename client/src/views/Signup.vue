<template>
    <v-container fluid>
        <v-slide-y-transition>
            <v-layout column align-center>
                <v-form v-if="!loading" v-model="valid" @submit.prevent="signUp" @keydown.prevent.enter>
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
                    <v-text-field
                        v-model="user.confirmPassword"
                        :rules="confirmPasswordRules"
                        type="password"
                        label="Confirm password"
                        required
                    />
                    <v-text-field
                        v-model="user.displayName"
                        :rules="notEmptyRules"
                        label="Display name"
                        required
                    />
                    <v-text-field
                        v-model="user.imageUrl"
                        :rules="notEmptyRules"
                        label="User display image URL"
                        required
                    />
                    <v-btn type="submit" :disabled="!valid">Signup</v-btn>
                </v-form>
                <v-progress-circular v-if="loading" :size="70" :width="7" indeterminate color="orange lighten-1"></v-progress-circular>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Signup',
    data: (vm) => ({
        valid: false,
        user: {
            username: '',
            password: '',
            confirmPassword: '',
            displayName: '',
            imageUrl: '',
        },
        notEmptyRules: [(value) => !!value || 'Field cannot be empty'],
        confirmPasswordRules: [(confirmPassword) => confirmPassword == vm.user.password || 'Passwords must match' ]
    }),
    computed: {
        ...mapState('users', { loading: 'isCreatePending' }),
    },
    methods: {
        signUp() {
            if (this.valid) {
                const { User } = this.$FeathersVuex.api;
                const user = new User(this.user);
                user.save()
                    .then(() => {
                        this.$router.push('/login');
                    });
            }
        }
    }
};
</script>