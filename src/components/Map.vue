<template>
  <div style="height: 500px; width: 100%" v-if="location">
    <l-map :zoom="zoom" :center="getMarkerPos()" :options="mapOptions" @update:center="centerUpdate" @update:zoom="zoomUpdate">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker :lat-lng="getMarkerPos()" v-if="location.latitude">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div>
            {{ location.name }}
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
import { Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  name: "Map",
  props: {
    location: Object
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  data () {
    return {
      zoom: 17,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors',
      mapOptions: {
        zoomSnap: 0.5,
        scrollWheelZoom: false
      }
    };
  },
  methods: {
    zoomUpdate (zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate (center) {
      this.currentCenter = center;
    },
    getMarkerPos () {
      if (this.location) {
        return latLng(this.location.latitude, this.location.longitude);
      } else {
        return latLng(0.0, 0.0);
      }
    },
    mounted: function () {
      this.center = latLng(this.location.latitude, this.location.longitude);
      this.withTooltip = latLng(
        this.location.latitude,
        this.location.longitude
      );
    }
  }
};
</script>
