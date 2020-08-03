<template>
    <v-layout class="fill-height align-stretch justify-stretch">
        <v-flex xs12 sm8 md4 class="flex-grow-1 testing">
            <v-card class="elevation-12">
                <v-toolbar dark>
                    <v-toolbar-title>Chat</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-title v-for="id in game.users" :key="id">| {{ id }} |</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-list class="message-container" ref="chat" id="chat">
                        <template v-for="(message, index) in messages">
                            <v-subheader v-if="message" :key="index">{{ message }}</v-subheader>
                        </template>
                    </v-list>
                </v-card-text>
                <v-card-actions>
                    <v-form @submit.prevent="submit">
                        <v-container>
                            <v-row no-gutters style="flex-wrap: nowrap;" class="align-baseline">
                                <v-col cols="10" class="flex-grow-1 flex-shrink-0" style="max-width: 100%;">
                                    <v-text-field v-model="msg" label="Message" solo-inverted></v-text-field>
                                </v-col>
                                <v-col cols="2" class="flex-grow-0 flex-shrink-0">
                                    <v-btn type="submit" class="ml-2">Send</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: 'Chat',
    props: {
        game: Object,
    },
    data() {
        return {
            messages: ['Hey', 'Hey there', 'Cool'],
            msg: '',
        }
    },
    methods: {
        submit() {
            this.messages.push(this.msg);
            this.msg = '';
        }
    },
}
</script>

<style scoped>
.message-container {
    height: 100%;
    overflow: auto;
}

.testing {
    max-width: 100%;
}

.tesgin2 {
    width: 100%;
    min-width: max-content;
}
</style>