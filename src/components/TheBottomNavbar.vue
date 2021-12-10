<template>
  <v-bottom-navigation
    v-model="navigation"
    app
    grow
    color="primary"
    background-color="secondary"
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
    <v-btn :to="{ name: 'Carts' }">
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
    navigation: 0,
  }),
};
</script>
