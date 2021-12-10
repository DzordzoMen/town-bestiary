<template>
  <v-card
    v-ripple
    rounded="lg"
    min-height="100"
    @click="$emit('showAdvancedInfo', id)"
  >
    <v-img
      :src="image"
      width="100%"
      height="100"
      :alt="name"
    />

    <v-card-title class="px-2 py-1 lato-bold" style="font-size: 1.12rem">
      {{ name }}
    </v-card-title>

    <v-card-text class="px-2 pb-2 body-2">
      <v-row dense>
        <v-col class="shrink lato-bold">
          Populacja:
        </v-col>
        <v-col class="grow">
          {{ pupulation }}
        </v-col>
        <v-col class="shrink lato-bold">
          Środowisko:
        </v-col>
        <v-col class="grow">
          {{ env }}
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
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pupulation: {
      type: String,
      required: true,
    },
    food: {
      type: String,
      required: true,
    },
    env: {
      type: String,
      required: true,
    },
  },
};
</script>
