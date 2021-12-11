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

      <template v-if="!showSuccessPage">
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
            min="0.01"
            background-color="transparent"
            hide-details
            placeholder="Twoja dowolna kwota"
            outlined
            dense
            flat
            solo
          />
        </v-col>

        <v-col cols="12">
          <label for="animal-pet">
            Nadaj imię wybranemu zwierzakowi:
          </label>
          <v-text-field
            v-model="animalName"
            class="pt-4"
            background-color="transparent"
            placeholder="Nadaj imię, może Marek?"
            hide-details
            outlined
            dense
            flat
            solo
          />
        </v-col>

        <v-col cols="12">
          <label>
            Każda złotówka przeznaczona na adopcje jest wykorzystana na:
          </label>

          <ul>
            <li>
              domki dla jeży i hotele dla owadów
            </li>
            <li>
              budowę budek lęgowych dla ptaków
            </li>
            <li>
              kaczkomaty dla kaczek
            </li>
            <li>
              wspomaganie fundacji prozwierzęcych
            </li>
          </ul>
        </v-col>

        <v-col cols="12" class="bottom-button">
          <v-btn block color="primary" @click="handleCTA()">
            <div>
              Adoptuj
            </div>
          </v-btn>
        </v-col>
      </template>

      <template v-if="showSuccessPage">
        <v-col cols="12" class="text-center pt-10" style="font-size: 30px">
          Dobra robota
        </v-col>

        <v-col cols="12" class="text-center py-6" style="font-size: 20px">
          Twoja dotacja w wysokości
          {{ donationType === 'custom' ? customDonation : donationType  }}
          zł trafi do
          {{ translateSuccessAnimalType(selectedAnimal) }}
          {{ animalName ? `o imieniu ${animalName}` : '' }}
        </v-col>

        <v-col cols="12" class="text-center lato-bold" style="font-size: 30px">
          Dziękujemy!
        </v-col>
      </template>
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
    showSuccessPage: false,
    customDonation: null,
    animalName: null,
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
    translateSuccessAnimalType(type) {
      switch (type) {
        case adoptionAnimals.Beaver:
          return 'Bobra';
        case adoptionAnimals.Hedgehog:
          return 'Jeża';
        case adoptionAnimals.Squirrel:
          return 'Wiewórki';
        default:
          return 'Bóbra';
      }
    },
    handleCTA() {
      const { customDonation, donationType } = this;
      if (donationType === 'custom' && !customDonation) return;

      this.showSuccessPage = true;
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
  cursor: pointer;
  bottom: 0;
  div {
    font-size: 16px !important;
    font-weight: 700;
  }
}

@media (min-width: 800px) {
  .bottom-button {
    max-width: 375px;
  }
}
</style>
