<template>
  <div class="about-text col-md-3">
    <h3 style="font-size: 20px; font-weight: bold;">
      Samedi 12 octobre de 11h à 12h
    </h3>

    <img :alt="keynote.Title" :src="thumbUrl(keynote)" style="width: 100%;" :title="keynote.Title" />

    <h3>{{ keynote.Title }}</h3>

    <div class="lead">
      <p style="font-size: 18px;">{{ keynote.description }}</p>
    </div>
    <a>
      Keynote en Anglais
    </a>
    <br />
    <div style="margin-bottom: 50px; margin-top: 20px;">
      <a class="btn btn-primary" href="https://www.eventbrite.fr/e/billets-conference-hic2-relations-interculturelles-74418027323" target="_blank">J'y vais !</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keynote",
  props: {
    keynote: Object
  },
  methods: {
    thumbUrl: function (kn) {
      if (kn.thumbnail != null) {
        return "http://localhost:1337" + kn.thumbnail.url;
      }
    }
  }
};
</script>
