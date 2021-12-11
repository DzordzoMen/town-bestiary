<template>
  <v-card
    v-ripple
    rounded="lg"
    min-height="100"
    @click="$emit('showAdvancedInfo', id)"
  >
    <v-img
      :src="photo"
      width="100%"
      height="100"
      :alt="name"
    />

    <v-card-title class="px-2 py-1 lato-bold text-truncate d-block" style="font-size: 1.12rem">
      {{ name }}
    </v-card-title>

    <v-card-text class="px-2 pb-2 body-2">
      <v-row dense>
        <v-col class="shrink lato-bold">
          Populacja:
        </v-col>
        <v-col class="grow">
          {{ population }}
        </v-col>
        <v-col class="shrink lato-bold">
          Środowisko:
        </v-col>
        <v-col class="grow text-truncate d-block">
          {{ environment }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TheAnimalCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    population: {
      type: [String, Number],
      required: true,
    },
    feeding: {
      type: String,
      required: true,
    },
    environment: {
      type: String,
      required: true,
    },
  },
};
</script>
