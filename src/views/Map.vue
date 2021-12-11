<template>
  <l-map
    style="height: calc(100vh - 112px)"
    :zoom="zoom"
    :min-zoom="2"
    :center="center"
  >
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng"></l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
// TODO fix
import { Icon } from 'leaflet';
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
  },
  data: () => ({
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    zoom: 12,
    center: [50.06143, 19.95],
    markerLatLng: [50.06143, 19.980],
  }),
};
</script>
