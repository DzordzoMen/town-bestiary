<template>
  <v-container>
    <v-row class="cities-list flex-column">
      <v-col
        v-ripple
        v-for="city in cities"
        :key="city.id"
        @click="goToCity(city.id, city.name)"
        class="d-flex align-center justify-space-between"
      >
        {{ city.name }}

        <v-icon
          @click.prevent="setFavourite(city.id, city.name)"
          :color="favouriteCityId === city.id ? 'primary' : null"
        >
          {{ favouriteCityId === city.id ? 'mdi-star' : 'mdi-star-outline' }}
        </v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Api from '../axios/api';

export default {
  name: 'Cities',
  data: () => ({
    favouriteCity: null,
    cities: [],
  }),
  computed: {
    favouriteCityId() {
      return this.favouriteCity?.id || null;
    },
  },
  created() {
    Api.get('/cities').then(({ data }) => {
      this.cities = data;
    });
  },
  mounted() {
    const favourite = JSON.parse(localStorage.getItem('favourite'));
    this.favouriteCity = favourite;
    const change = this.$route.params?.change;

    if (favourite?.id && !change) {
      this.goToCity(favourite.id, favourite.name);
    }
  },
  methods: {
    goToCity(id, name = null) {
      this.$router.push({ name: 'City', params: { id, name } });
    },
    setFavourite(id, name) {
      this.favouriteCity = { id, name };
      localStorage.setItem('favourite', JSON.stringify({ id, name }));
    },
  },
};
</script>

<style lang="scss" scoped>
.cities-list {
  & > .col {
    background-color: #fff;
    margin: 4px 8px;
    width: 96%;
    border-radius: 12px;
    cursor: pointer;
  }
}
</style>
