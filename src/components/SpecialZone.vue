<template>
  <div class="container">
    <h1 class="section-heading text-center">{{ specialZone.title }}</h1>
    <div class="about-row row">
      <!-- DESCRIPTION IMAGE -->
      <div class="about-image col-md-6">
        <img :alt="specialZone.title" :src="thumbUrl(specialZone)" :title="specialZone.title" width="100%" />
      </div>
      <!-- DESCRIPTION TEXT -->
      <div class="about-text col-md-6">
        <div style="margin-bottom: 20px; text-align: justify">{{ specialZone.description }}</div>
        <a class="btn btn-primary buttonSize" :href="specialZone.link" target="_blank">Lien du site</a>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.js";

export default {
  name: "SpecialZone",
  props: {
    specialZone: Object
  },
  methods: {
    thumbUrl: function(specialZone) {
      if (specialZone.thumbnail != null) {
        return api.getMediaRoot() + specialZone.thumbnail[0].url;
      }
    }
  }
};
</script>
