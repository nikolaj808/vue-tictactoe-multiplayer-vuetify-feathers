<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row
          v-for="i in 3"
          :key="i"
          align="center"
          justify="center"
        >
          <v-card
            v-for="j in 3"
            :key="j"
            class="ma-3 pa-6"
            outlined
          >
            X
          </v-card>
          <v-spacer></v-spacer>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>