<template>
  <div class="sponsors-row" data-animation="bounceIn">
    <h4>
      Éditions Précédentes
    </h4>
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

export default {
  name: "PreviousEditions",
  data: function () {
    return {
      "linkData": [
        { "name": "2021", "text":"🚀 Défis 2021", "link": "https://hic2021-2.sparkboard.com"},
        { "name": "2020", "text":"🚀 Défis 2020  (édition de janvier 2021)", "link": "https://hic2021.sparkboard.com"},
        { "name": "2019", "text":"🚀 Défis 2019", "link": "https://hic2019.sparkboard.com"}
    ],
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
