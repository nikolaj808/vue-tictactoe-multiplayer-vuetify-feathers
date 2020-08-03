<template>
  <FeathersVuexGet service="games" :id="id" :watch="[id]">
    <template v-if="game" slot-scope="{ item: game }">
      {{ game.name }} - {{ game._id }} - {{ game.owner }}
    </template>
  </FeathersVuexGet>
</template>

<script>
export default {
  name: 'DesignTesting',
  computed: {
    id() {
      return '5f136d20cff0ad051c376c8c'
    },
  }
}
</script>