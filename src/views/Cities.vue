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
export default {
  name: 'Cities',
  data: () => ({
    favouriteCity: null,
    cities: [
      {
        id: 1,
        name: 'Kraków',
      },
      {
        id: 2,
        name: 'Warszawa',
      },
      {
        id: 3,
        name: 'Gdańsk',
      },
      {
        id: 4,
        name: 'Katowice',
      },
      {
        id: 5,
        name: 'Kielce',
      },
      {
        id: 6,
        name: 'Bydgoszcz',
      },
      {
        id: 7,
        name: 'Łódź',
      },
      {
        id: 8,
        name: 'Poznań',
      },
      {
        id: 9,
        name: 'Wrocław',
      },
      {
        id: 10,
        name: 'Lublin',
      },
      {
        id: 11,
        name: 'Białystok',
      },
      {
        id: 12,
        name: 'Gdynia',
      },
      {
        id: 13,
        name: 'Opole',
      },
      {
        id: 14,
        name: 'Szczecin',
      },
    ],
  }),
  computed: {
    favouriteCityId() {
      return this.favouriteCity?.id || null;
    },
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
  }
}
</style>
