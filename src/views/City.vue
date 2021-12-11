<template>
  <v-container>
    <v-row dense>
      <v-col
        class="city-name"
        v-if="cityName"
        @click="selectCity()"
        v-ripple
      >
        {{ cityName }}
      </v-col>

      <v-col
        cols="6"
        v-for="animal in animals"
        :key="animal.id"
      >
        <the-animal-card v-bind="animal" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TheAnimalCard from '../components/TheAnimalCard.vue';

export default {
  name: 'City',
  components: { TheAnimalCard },
  data: () => ({
    animals: [
      {
        id: 1,
        name: 'Jeż pospolity',
        pupulation: 'Duża',
        food: 'Robaki i owoce',
        description: 'Jeż jaki jest każdy widzi, ładne kolce ostre niczym igły',
        // eslint-disable-next-line
        image: require('../assets/hedgehog-image.jpg'),
        env: 'Lasy i łąki',
      },
    ],
  }),
  computed: {
    cityId() {
      return this.$route.params.id;
    },
    cityName() {
      return this.$route.params?.name;
    },
  },
  methods: {
    selectCity() {
      this.$router.push({ name: 'Cities' });
    },
  },
};
</script>

<style lang="scss" scoped>
.city-name {
  background: #fff;
  text-align: center;
  padding-top: 40px;
  font-weight: 700;
  margin-top: -44px !important;
  margin-bottom: 8px !important;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 28px;
  max-width: 95%;
  min-width: 95%;
  width: 95%;
  margin: auto;
}
</style>
