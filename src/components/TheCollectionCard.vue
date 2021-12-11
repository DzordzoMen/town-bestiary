<template>
  <v-card
    rounded="lg"
    :elevation="isCardCollected ? 1 : 0"
    v-ripple="isCardCollected"
    :class="isCardCollected && 'v-card--collected'"
  >
    <v-img
      :alt="name"
      :src="isCardCollected ? image :icon"
      :width="isCardCollected ? '100%' :100"
      :height="isCardCollected ? 116 :100"
      :class="!isCardCollected && 'mx-auto mt-4'"
    />

    <v-card-title class="justify-center" :class="isCardCollected && 'black--text'">
      {{ name }}
    </v-card-title>

    <v-card-text class="pa-2">
      <v-row dense class="flex-nowrap" style="gap: 4px">
        <v-col
          class="collected-pin"
          :class="i <= collectedCards && 'collected-pin--filled'"
          v-for="i in cardsNumber"
          :key="i"
        />
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TheCollectionCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    collectedCards: {
      type: Number,
      required: true,
    },
    cardsNumber: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isCardCollected() {
      return this.collectedCards;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  border: 2px solid #626262;
  min-height: 200px;
  background: #d9d9d9;
  cursor: pointer;

  &__title {
    color: #626262;
    font-size: 1rem;
  }

  .collected-pin {
    border-radius: 28px;
    width: 100%;
    background: #626262;

    &--filled {
      background: #157575 !important;
    }
  }

  &--collected {
    border-color: rgba(0, 0, 0, 0.8);
  }
}
</style>
