<template>
  <l-map
    style="height: calc(100vh - 112px)"
    :zoom="zoom"
    :min-zoom="2"
    :center="center"
  >
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker
      :lat-lng="[marker.longitude, marker.latitude]"
      :name="marker.name"
      v-for="(marker, index) in markers"
      :key="index"
    >
      <l-tooltip>
          {{ marker.name }}
      </l-tooltip>
    </l-marker>

    <l-polygon
      color="#0099FF"
      fillColor="#0099FF"
      :lat-lngs="[
        [50.0669, 19.9059],
        [50.0638, 19.9010],
        [50.0599, 19.9017],
        [50.0566, 19.9005],
        [50.0562, 19.9111],
        [50.0568, 19.9216],
        [50.0601, 19.9228],
        [50.0641, 19.9242],
        [50.0655, 19.9181],
        [50.0657, 19.9105],
      ]"
    >
      <l-tooltip>
        Jeż
      </l-tooltip>
    </l-polygon>

    <l-polygon
      color="#008080"
      fillColor="#008080"
      :lat-lngs="[
        [50.0591, 19.9098],
        [50.0568, 19.8962],
        [50.0524, 19.8992],
        [50.0510, 19.9044],
        [50.0513, 19.9119],
        [50.0518, 19.9193],
        [50.0531, 19.9250],
        [50.0564, 19.9275],
        [50.0573, 19.9228],
        [50.0573, 19.9160],
      ]"
    >
      <l-tooltip>
        Sowa
      </l-tooltip>
    </l-polygon>
  </l-map>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker,
  LTooltip,
  LPolygon,
} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

import { Icon } from 'leaflet';
import Api from '../axios/api';

// eslint-disable-next-line
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  // eslint-disable-next-line
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  // eslint-disable-next-line
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  // eslint-disable-next-line
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LPolygon,
  },
  data: () => ({
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    zoom: 12,
    center: [50.06143, 19.95],
    markers: [],
  }),
  created() {
    Api.get('/cities/1/boards').then(({ data }) => {
      this.markers = data;
    });
  },
};
</script>
