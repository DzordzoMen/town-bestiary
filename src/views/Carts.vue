<template>
  <v-container>
    <v-row dense>
      <v-col cols="6" v-for="card in cards" :key="card.id">
        <the-collection-card
          v-bind="card"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable global-require */
import TheCollectionCard from '../components/TheCollectionCard.vue';

export default {
  name: 'Carts',
  components: {
    TheCollectionCard,
  },
  data: () => ({
    cards: [
      {
        id: 1,
        name: 'Jeż pospolity',
        image: require('../assets/hedgehog-image.jpg'),
        icon: require('../assets/hedgehog-icon.png'),
        collectedCards: 4,
        cardsNumber: 6,
      },
      {
        id: 2,
        name: 'Wiewiórka ruda',
        image: require('../assets/squirrel-image.jpg'),
        icon: require('../assets/squirrel-icon.png'),
        collectedCards: 2,
        cardsNumber: 5,
      },
      {
        id: 3,
        name: 'Bóbr czarny',
        image: require('../assets/beaver-image.jpg'),
        icon: require('../assets/beaver-icon.png'),
        collectedCards: 0,
        cardsNumber: 3,
      },
    ],
  }),
};
</script>

<style>
</style>
