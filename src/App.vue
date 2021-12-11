<template>
  <v-app>
    <the-navbar />
    <v-main class="secondary">
      <router-view/>
    </v-main>
    <the-bottom-navigation />
  </v-app>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import TheBottomNavigation from './components/TheBottomNavbar.vue';

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheBottomNavigation,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
// * {
//   font-family: 'Lato', sans-serif;
// }

$font-family: 'Lato';

* {
  [class*='text-'], [class*='subtitle-'] {
    font-family: $font-family, sans-serif !important;
  }
  font-family: $font-family, sans-serif !important;
}

.lato-regular {
  font-family: $font-family, sans-serif !important;
}
.lato-bold {
  font-family: $font-family, sans-serif !important;
  font-weight: 700;
}
@media (min-width: 800px) {
  .container {
    max-width: 375px !important;
  }
}
</style>
