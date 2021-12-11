<template>
  <v-container>
    <v-row v-if="!showSuccessPage">
      <v-col cols="12" v-if="userFile">
        <v-img
          :src="userFilePreview"
          alt="User report image"
          width="100%"
          contain
          max-height="200px"
        />
      </v-col>
      <v-col cols="12">
        <div
          class=" file-input-wrapper elevation-2 primary white--text"
          v-ripple
        >
          <input
            type="file"
            accept="image/*"
            capture="camera"
            ref="file"
            @change="handleFileChange()"
          >
          {{ userFile ? 'Zmień zdjęcie' : 'Dodaj zdjęcie' }}
        </div>
      </v-col>
      <v-col cols="12">
        <label for="report-type">
          Co zgłaszasz?
        </label>
        <v-radio-group v-model="reportType" id="report-type" hide-details class="ma-0">
          <v-radio
            v-for="(type, index) in reportTypes"
            :key="index"
            :label="type"
            :value="type"
            color="primary"
          />
        </v-radio-group>
      </v-col>

      <v-col cols="12" v-if="reportType !== reportTypes[0]">
        <label for="telephone">
          Numer telefonu:
        </label>

        <v-text-field
          v-model.number="telephoneNumber"
          type="number"
          class="pt-4"
          background-color="transparent"
          hide-details
          placeholder="126-165-999"
          outlined
          dense
          flat
          solo
        />
      </v-col>

      <v-col cols="12">
        <label for="animal-type">
          Rodzaj zwierzęcia
        </label>
        <v-select
          v-model="animalType"
          :items="animalTypes"
          item-color="black"
          class="pt-4"
          background-color="transparent"
          :menu-props="{
            bottom: true,
            offsetY: true,
            left: true,
            tile: true,
            zIndex: 4,
            rounded: true,
            contentClass: 'report-menu rounded-b-lg',
          }"
          hide-details
          outlined
          dense
          flat
          solo
        />
      </v-col>

      <v-col cols="12">
        <v-checkbox
          v-model="autoLocationAndTime"
          hide-details
          class="ma-0 pa-0"
          label="Ustaw lokalizację i czas automatycznie"
        />
      </v-col>

      <v-col cols="12" v-if="!autoLocationAndTime">
        <label for="location">
          Lokalizacja zdarzenia
        </label>

        <v-text-field
          v-model="localization"
          class="pt-4"
          background-color="transparent"
          hide-details
          id="location"
          placeholder="Np. Kraków, Ruczaj"
          outlined
          dense
          flat
          solo
        />
      </v-col>

      <v-col cols="12" v-if="!autoLocationAndTime">
        <label for="time">
          Czas zdarzenia
        </label>

        <v-text-field
          v-model="time"
          class="pt-4"
          background-color="transparent"
          hide-details
          id="time"
          outlined
          dense
          flat
          solo
        />
      </v-col>

      <v-col cols="12" class="pb-15">
        <label for="description">
          Dodaj opis (opcjonalne)
        </label>
        <v-textarea
          v-model="description"
          hide-details
          class="pa-0 mt-2"
          background-color="transparent"
          placeholder="Opis zdarzenia / gatunek zwierzęcia"
          outlined
          dense
          flat
          solo
          auto-grow
          rows="4"
        />
      </v-col>

      <v-col cols="12" class="bottom-button">
        <v-btn block color="primary" @click="submit()">
          <div>
            Zgłoś
          </div>
        </v-btn>
      </v-col>
    </v-row>

    <v-row v-if="showSuccessPage" class="text-center">
      <v-col cols="12" class="pt-15 lato-bold" style="font-size: 32px">
        Dziękujemy za złożenie zgłoszenia
      </v-col>
      <v-col cols="12" class="pt-8 text--secondary" style="font-size: 20px">
        Zostanie ono przesłane do odpowiednich organów
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const reportTypes = {
  ObservedAnimal: 'Obserwacja zwierzęcia',
  InjuredAnimal: 'Zwierze ranne',
  DeadAnimal: 'Martwe zwierze',
  DangerousAnimal: 'Niebezpieczne zwierze',
};

export default {
  name: 'Report',
  data: () => ({
    userFile: null,
    reportType: Object.values(reportTypes)[0],
    reportTypes: Object.values(reportTypes),
    description: null,
    autoLocationAndTime: true,
    localization: null,
    time: null,
    animalType: null,
    animalTypes: [
      'Jeż',
      'Sarna',
      'Wiewiórka',
      'Dzik',
      'Sokół',
      'Bóbr',
    ],
    telephoneNumber: null,
    showSuccessPage: false,
  }),
  computed: {
    userFilePreview() {
      if (!this.userFile) return null;

      return URL.createObjectURL(this.userFile);
    },
  },
  methods: {
    handleFileChange() {
      const file = this.$refs.file.files[0];
      if (file) this.userFile = file;
    },
    submit() {
      this.showSuccessPage = true;
    },
  },
};
</script>

<style lang="scss">
.report-menu {
  background: #ead7c7;
  border: 1px solid #157575;
  border-top: none;
  margin-top: -1px;

  & > .v-list {
    background: inherit !important;
    & > .v-list-item .v-list-item__title {
      font-weight: 700;
    }
  }
}
</style>

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

.file-input-wrapper {
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
  background: #fff;
  height: 36px;
  text-transform: uppercase;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  z-index: 2;

  input {
    opacity: 0;
    position: absolute;
  }
}

@media (min-width: 800px) {
  .bottom-button {
    max-width: 375px;
  }
}
</style>
