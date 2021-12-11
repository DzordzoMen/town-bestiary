<template>
  <v-container>
    <v-row dense>
      <v-col cols="6" v-for="card in cards" :key="card.id">
        <the-collection-card
          v-bind="card"
        />
      </v-col>
    </v-row>

    <div
      class="
        qr-scanner
        elevation-2
        pa-1
        d-flex
        align-center
        justify-center
        primary
        white--text
        text-uppercase
      "
      v-ripple
    >
      <input
        type="file"
        accept="image/*"
        capture="camera"
      >
      <v-icon class="mr-2" color="white">
        mdi-qrcode
      </v-icon>
      Zeskanuj kod
    </div>
  </v-container>
</template>

<script>
/* eslint-disable global-require */
import TheCollectionCard from '../components/TheCollectionCard.vue';

export default {
  name: 'Cards',
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

<style lang="scss" scoped>
.qr-scanner {
  position: fixed;
  bottom: 65px;
  left: 3%;
  width: 94%;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  background: #fff;
  height: 40px;
  cursor: pointer;
  z-index: 2;

  input {
    opacity: 0;
    position: absolute;
  }
}

@media (min-width: 800px) {
  .qr-scanner {
    max-width: 375px;
    left: unset !important;
  }
}
</style>
