<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div
      class="d-flex align-center"
      @click="$router.push({ name: 'Home' })"
    >
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-3"
        contain
        src="../assets/logo2.png"
        transition="scale-transition"
        :to="{ name: 'Home' }"
        width="40"
      />

      Bestiariusz Miejski
    </div>

    <v-spacer />

    <!-- user -->
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheNavbar',
};
</script>
