<template>
  <div class="document" id="document">
    <!-- HEADER ======================================= -->
    <Navbar 
        :process="process" :keynote="keynote" :planning="planning" :result="result" :partner="partner" :question="question" :specialzone="specialzone" />

    <div class="blog-sticky-logo" style="z-index: 1100">
      <a href="http://alsacedigitale.org" target="_blank">
        <img alt="logo alsacedigitale" src="images/logos/AD-logo-132x132.png" title="par AlsaceDigitale" />
      </a>
      <div style="font-size: 1.5em; margin-top: -12px; margin-right: 4px">
        <a style="color: #FF0000; margin-right: 4px" href="https://www.youtube.com/playlist?list=PLyFRNlGSj8FifzMpq2l_8rqr_PhVoH32R" target="_blank"><i class="fab fa-youtube logoSize"></i></a>
        <a style="color: #3b5998; margin-right: 4px" href="https://www.facebook.com/alsace.digitale/" target="_blank"><i class="fab fa-facebook logoSize"></i></a>
        <a style="color: #1DA1F2" href="https://twitter.com/AlsaceDigitale" target="_blank"><i class="fab fa-twitter logoSize"></i></a>
      </div>
    </div>

    <!-- LIVE STREAM ================================== -->
    <LiveStream>
  
    </LiveStream>

    <!-- FOOTER ======================================= -->
    <section class="footer-section section" id="footer">
      <div class="container">
        <h3 class="footer-hashtag">
          #HICamp
        </h3>
        <div style="display: block; margin-bottom: 40px; font-size: 18px;">
        </div>
        <div class="footer-copyright">
          <a href="https://digitalescapegame.osc-fr1.scalingo.io/mentions-legales/" target="_blank">Mentions Légales</a>
          &copy; 2020
          <a href="http://www.alsacedigitale.org/" target="_blank" title="Alsace Digitale">Alsace Digitale</a>
          •
          <strong>Précédentes éditions :</strong>
          <a href="http://2015.hackingindustry.camp/" target="_blank">2015</a> -
          <a href="http://2016.hackingindustry.camp/" target="_blank">2016</a> -
          <a href="http://2017.hackingindustry.camp/" target="_blank">2017</a> -
          <a href="http://2018.hackingindustry.camp/" target="_blank">2018</a> -
          <a href="http://2019.hackingindustry.camp/" target="_blank">2019</a>
        </div>
        <div class="footer-version">
          {{ apiVersion }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import api from "@/services/api";
// import MaskableBlock from "@/components/MaskableBlock.vue";
import Navbar from "@/components/Navbar.vue";
import LiveStream from "@/components/LiveStream.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    LiveStream
    // MaskableBlock,
  },
  data: function () {
    return {
        main: true,
        process: false,
        keynote: false,
        planning: false,
        result: false,
        partner: false,
        question: false,
        specialzone: false,
        apiVersion: "1.0",
    };
  },
  mounted: function () {   
    api.getApiVersion().then(resp=> {
      this.apiVersion=resp.data
    });
  },
  methods: {

  }
};
</script>

<style scoped>

</style>
