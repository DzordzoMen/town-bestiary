<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex align-center justify-center py-6">
        <v-img
          aspect-ratio="1"
          max-width="120"
          :src="setAnimalIcon()"
          :alt="selectedAnimal"
        />
      </v-col>
      <v-col cols="12">
        <label for="animal-type">
          Wybierz zwierze do adopcji:
        </label>
        <v-radio-group v-model="selectedAnimal" row id="animal-type" hide-details class="ma-0">
          <v-radio
            v-for="(animal, index) in animalsToAdoption"
            :key="index"
            :label="translateAnimalType(animal)"
            :value="animal"
          />
        </v-radio-group>
      </v-col>
      <v-col cols="12">
        <label for="donation-price">
          Kwota dotacji:
        </label>
        <v-radio-group v-model="donationType" row id="donation-price" hide-details class="ma-0">
          <v-radio
            v-for="(donation, index) in donationTypes"
            :key="index"
            :label="donation.text"
            :value="donation.value"
          />
        </v-radio-group>

        <v-text-field
          v-model.number="customDonation"
          type="number"
          v-if="donationType === 'custom'"
          class="pt-4"
          background-color="transparent"
          placeholder="Twoja dowolna kwota"
          outlined
          dense
          flat
          solo
        />
      </v-col>

      <v-col cols="12" class="bottom-button">
        <v-btn block color="primary">
          Adoptuj
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const adoptionAnimals = {
  Beaver: 'Beaver',
  Hedgehog: 'Hedgehog',
  Squirrel: 'Squirrel',
};

export default {
  name: 'Adoption',
  data: () => ({
    animalsToAdoption: Object.values(adoptionAnimals),
    selectedAnimal: Object.values(adoptionAnimals)[0],
    donationType: 5,
    donationTypes: [
      {
        value: 3,
        text: '3 zł',
      },
      {
        value: 5,
        text: '5 zł',
      },
      {
        value: 10,
        text: '10 zł',
      },
      {
        value: 'custom',
        text: 'Dowolne',
      },
    ],
    customDonation: null,
  }),
  methods: {
    setAnimalIcon() {
      const { selectedAnimal } = this;
      // eslint-disable-next-line
      return require(`../assets/${selectedAnimal.toLowerCase()}-icon.png`);
    },
    translateAnimalType(type) {
      switch (type) {
        case adoptionAnimals.Beaver:
          return 'Bóbr';
        case adoptionAnimals.Hedgehog:
          return 'Jeż';
        case adoptionAnimals.Squirrel:
          return 'Wiewórka';
        default:
          return 'Bóbr';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
}

.bottom-button {
  position: absolute;
  bottom: 56px;
}
</style>
