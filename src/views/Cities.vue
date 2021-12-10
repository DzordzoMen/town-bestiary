<template>
  <v-container>
    <v-row class="cities-list flex-column">
      <v-col
        v-ripple
        v-for="city in cities"
        :key="city.id"
        @click="goToCity(city.id, city.name)"
      >
        {{ city.name }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Cities',
  data: () => ({
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
  methods: {
    goToCity(id, name) {
      this.$router.push({ name: 'City', params: { id, name } });
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
