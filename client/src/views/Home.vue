<template>
    <v-container fluid>
        <v-slide-y-transition>
            <v-layout column align-center>
                <CreateGameDialog />
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
import CreateGameDialog from './CreateGameDialog';

export default {
  name: 'Home',
  components: {
      CreateGameDialog,
  }
};
</script>
