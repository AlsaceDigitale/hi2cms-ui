<template>
  <div class="sponsors-row" data-animation="bounceIn">
    <h2 class="section-heading text-center">Éditions Précédentes</h2>
    <br />
    <div v-for="link in linkData" :key="link.name">
      <a :href="link.link" target="_blank">
        {{ link.text }}
      </a>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.js";

import previousEditions from './previousEditions.json';

export default {
  name: "PreviousEditions",
  data: function () {
    return {
      "linkData": previousEditions,
      "partnerCategory": true
    }
  },
  methods: {
    thumbUrl: function (partner) {
      if (partner.logo != null) {
        return api.getMediaRoot() + partner.logo.url;
      }
    }
  }
};
</script>

<style scoped>

</style>
