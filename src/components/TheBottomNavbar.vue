<template>
  <v-bottom-navigation
    v-model="navigation"
    app
    grow
    color="primary"
    class="elevation-1"
    mandatory
  >
    <v-btn :to="{ name: 'Cities' }">
      <span>
        Miasto
      </span>
      <v-icon>
        mdi-city-variant
      </v-icon>
    </v-btn>
    <v-btn :to="{ name: 'Map' }">
      <span>
        Mapa
      </span>
      <v-icon>
        mdi-earth
      </v-icon>
    </v-btn>
    <v-btn :to="{ name: 'Cards' }">
      <span>
        Karty
      </span>
      <v-icon>
        mdi-cards
      </v-icon>
    </v-btn>
    <v-btn :to="{ name: 'Report' }">
      <span>
        Zgłoś
      </span>
      <v-icon>
        mdi-camera-marker
      </v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'TheBottomNavbar',
  data: () => ({
    navigation: null,
  }),
};
</script>

<style lang="scss" scoped>
.v-bottom-navigation {
  border-top: 1px solid #919191 !important;
  background: #ead7c7 !important;
}
</style>
