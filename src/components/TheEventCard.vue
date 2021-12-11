<template>
  <div v-ripple class="event-card">
    <v-row dense align="center">
      <v-col cols="4">
        <v-img
          :alt="title"
          :src="photoUrl"
          aspect-ratio="1"
          position="30% center"
          class="rounded-lg"
        />
      </v-col>
      <v-col cols="8">
        <v-row dense>
          <v-col cols="12" class="event-card__title">
            {{ title }}
          </v-col>
          <v-col cols="12" class="event-card__text">
            {{ description }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'TheEventCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.event-card {
  padding: 8px 12px;
  border-radius: 12px;
  background-color: rgb(231, 227, 227);
  max-height: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.8);

  &__title {
    overflow: hidden;
    display: -webkit-box;
    font-size: 18px;
    font-weight: 700;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  &__text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>
