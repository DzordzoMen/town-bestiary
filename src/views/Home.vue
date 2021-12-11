<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="alert">
        Ciekaowstka
      </v-col>

      <v-col cols="12" class="text-center pt-4" v-if="favouriteCity">
        Twoje miasto
      </v-col>

      <v-col
        class="city-name elevation-1 mb-10"
        v-if="favouriteCity"
        @click="goToCity()"
        v-ripple
      >
        {{ favouriteCityName }}
      </v-col>

      <v-col cols="12" class="lato text-center pt-4" style="font-size: 22px">
        Wydarzenia sponsorowane
      </v-col>

      <v-col cols="12" v-for="event in events" :key="event.id">
        <the-event-card v-bind="event" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TheEventCard from '../components/TheEventCard.vue';

export default {
  name: 'Home',
  components: {
    TheEventCard,
  },
  data: () => ({
    favouriteCity: null,
    events: [],
  }),
  computed: {
    favouriteCityId() {
      return this.favouriteCity?.id || null;
    },
    favouriteCityName() {
      return this.favouriteCity?.name || null;
    },
  },
  created() {
    const favourite = JSON.parse(localStorage.getItem('favourite'));
    this.favouriteCity = favourite;
  },
  methods: {
    goToCity() {
      const { id, name } = this.favouriteCity;
      this.$router.push({ name: 'City', params: { id, name } });
    },
  },
};
</script>

<style lang="scss" scoped>
.alert {
  border-radius: 8px;
  margin-top: 4px !important;
  margin: auto;
  background: #fff;
  max-width: 98%;
  color: #000;
  font-size: 16px;
}

.city-name {
  background: #fff;
  text-align: center;
  font-weight: 700;
  border-radius: 12px;
  font-size: 22px;
  max-width: 90%;
  min-width: 90%;
  width: 90%;
  margin: auto;
}
</style>
