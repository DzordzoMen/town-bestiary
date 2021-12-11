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

      <template v-if="!showAnimals">
        <v-col cols="12">
          <div class="aniamls-card" v-ripple @click="showAnimalsCards()">
            Zwierzęta
          </div>
        </v-col>
      </template>

      <template v-if="showAnimals">
        <v-col
          cols="6"
          v-for="animal in species"
          :key="animal.id"
        >
          <the-animal-card v-bind="animal" />
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import TheAnimalCard from '../components/TheAnimalCard.vue';
import Api from '../axios/api';

export default {
  name: 'City',
  components: { TheAnimalCard },
  data: () => ({
    name: null,
    species: [],
    boards: [],
    events: [],
    showAnimals: false,
  }),
  computed: {
    cityId() {
      return this.$route.params.id;
    },
    cityName() {
      return this.$route.params?.name || this.name;
    },
  },
  created() {
    const { cityId } = this;
    Api.get(`/cities/${cityId}`).then(({ data }) => {
      this.name = data.name;
      this.species = data.species;
      this.boards = data.boards;
      this.events = data.events;
    });
  },
  methods: {
    selectCity() {
      if (this.showAnimals) {
        this.showAnimals = false;
      } else {
        this.$router.push({ name: 'Cities', params: { change: 'change' } });
      }
    },
    showAnimalsCards() {
      this.showAnimals = true;
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

.aniamls-card {
  width: 100%;
  height: 100px;
  background-image:
    linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.6)
    ),
    url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vKg9jiroSCBYrnkAv5kgJGvvT8A4tGeKow&usqp=CAU');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-color: #a1a1a1;
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  font-size: 24px;
  line-height: 22px;
  color: #fff;
  font-weight: 700;
  padding: 8px;
}
</style>
