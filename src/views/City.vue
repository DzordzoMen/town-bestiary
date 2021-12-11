<template>
  <v-container>
    <v-row dense>
      <v-col class="city-name" v-if="cityName" @click="selectCity()" v-ripple>
        {{ cityName }}
      </v-col>

      <template v-if="!showAnimals">
        <v-col cols="12">
          <div class="aniamls-card" v-ripple @click="showAnimalsCards()">Zwierzęta</div>
        </v-col>

        <v-col cols="12" class="lato text-center pt-3" style="font-size: 22px"> Wydarzenia </v-col>

        <v-col cols="12" v-for="event in events" :key="event.id">
          <the-event-card v-bind="event" />
        </v-col>
      </template>

      <template v-if="showAnimals">
        <v-col cols="6" v-for="animal in species" :key="animal.id">
          <the-animal-card v-bind="animal" @showAdvancedInfo="onshowAdvancedInfo" />
        </v-col>
      </template>
    </v-row>
    <TheAnimalCardDetails v-model="dialog" :species="currentSpecies" />
  </v-container>
</template>

<script>
import TheAnimalCard from '../components/TheAnimalCard.vue';
import TheAnimalCardDetails from '../components/TheAnimalCardDetails.vue';
import TheEventCard from '../components/TheEventCard.vue';
import populationDict from '@/data/populationDict';
import Api from '../axios/api';

export default {
  name: 'City',
  components: {
    TheAnimalCard,
    TheEventCard,
    TheAnimalCardDetails,
  },
  data: () => ({
    name: null,
    species: [],
    boards: [],
    events: [],
    showAnimals: false,
    dialog: false,
    currentSpecies: {},
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
      this.species = this.mapSpecies(data.species);
      this.boards = data.boards;
      this.events = data.events;
    });
  },
  methods: {
    mapSpecies(species) {
      const mapped = [];
      for (let index = 0; index < species.length; index += 1) {
        const element = species[index];
        const translated = populationDict[element.population];
        element.population = translated;
        mapped.push(element);
      }
      return mapped;
    },

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
    onshowAdvancedInfo(id) {
      this.dialog = true;
      this.currentSpecies = this.species.find((s) => s.id === id);
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
  cursor: pointer;
}

.aniamls-card {
  width: 100%;
  height: 100px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)),
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
