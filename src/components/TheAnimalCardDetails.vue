<template>
  <v-dialog v-model="show" hide-overlay width="375">
    <v-card v-ripple rounded="lg" outlined>
      <v-img :src="species.photo" width="100%" height="300" :alt="species.name" />
      <v-card-title class="text-h5">{{ species.name }}</v-card-title>

      <v-card-text>
        <v-row>
          <v-col class="shrink lato-bold"> Populacja: </v-col>
          <v-col class="grow"> {{ species.population }}</v-col>
        </v-row>
        <v-row>
          <v-col class="shrink lato-bold"> Środowisko: </v-col>
          <v-col class="grow"> {{ species.environment }}</v-col>
        </v-row>
        <v-col> {{ species.description }}</v-col>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="show = false"> Zamknij </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'TheAnimalCardDetails',
  props: {
    species: {
      type: Object,
      required: true,
    },
    value: {
      type: Boolean,
    },
  },
  data: () => ({}),
  methods: {},
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>
