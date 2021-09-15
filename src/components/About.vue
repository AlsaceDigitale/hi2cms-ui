<template>
  <div class="container">
    <div class="hero-content">
      <div class="hero-content-inner">
        <div class="hero-heading text-center row" data-animation="fadeIn">
          <div class="col-md-10 col-md-offset-1">
            <h1 class="section-heading text-center">A Propos</h1>
            <!-- <h4>{{ about.description}}<a href="planning2021.pdf" target="_blank">{{ about.linkTitle }}</a></h4> -->
            <!-- <h4>Vous souhaitez connaître le déroulé du Hacking Industry e-Camp 2021 ? <a href="Planning-HIC-2021.pdf" target="_blank">C'est par ici !</a></h4> -->
            <h4>Vous souhaitez connaître le déroulé du Hacking Industry Camp 2021 ? <a href="" target="_blank">C'est par ici !</a></h4>
            
            <!-- <h1 class="section-heading text-center">HACKATHON</h1>
                 <h1 class="section-heading text-center">Du 5/6/7 février 2021 à TPS. Strasbourg </h1> -->
          </div>
        </div>
        <div class="hero-features row" style="margin-top: 45px;">
          <div class="hero-features-left col-md-6">
            <div class="video-embed">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/LEhzAEE0LLg" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
              ></iframe>
            </div>
            <div class="video-embed">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/QoWu4FlbYus"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <!-- videos\Reportage_HIC_Version_ES_DEF.m4v -->
            </div>
            <p class="lead">
              <strong>54h pour stimuler l'innovation</strong> <br />La sixième
              édition du Hackathon dédié à l'Industrie en Alsace <br />54h pour
              innover et inventer l'industrie 4.0
              <span
                style="font-style: normal;font-size: 17px; padding-top: 6px;"
                ><br />
                <strong
                  >Jetez un coup d'oeil aux éditions précédentes :
                </strong>
                <a href="" target="_blank"
                  >2020</a
                >
                -
                <a href="http://2019.hackingindustry.camp/" target="_blank"
                  >2019</a
                >
                <!-- <a href="http://2018.hackingindustry.camp/" target="_blank"
                  >2018</a
                > -->
              </span>
            </p>
          </div>
          <div class="hero-features-right col-md-6 divMargin" data-animation="fadeIn">
            <ul class="icon-list">
              <li class="liMargin">
                <span class="icon-list-icon" data-animation="bounceIn"
                  ><i class="far fa-hand-point-up"></i
                ></span>
                <h4 class="icon-list-title">Identifier les projets</h4>
                <p>Créer des dynamiques d'innovation interne ou externe.</p>
              </li>
              <li>
                <span class="icon-list-icon" data-animation="bounceIn"
                  ><i class="far fa-heart"></i
                ></span>
                <h4 class="icon-list-title">Fédérer les potentiels</h4>
                <p>
                  Un hackathon est un moment FUN. Le mode défi rassemble et
                  démultiplie les énergies.
                </p>
              </li>
              <li>
                <span class="icon-list-icon" data-animation="bounceIn"
                  ><i class="far fa-lightbulb"></i
                ></span>
                <h4 class="icon-list-title">
                  Stimuler la créativité collective
                </h4>
                <p>
                  Découvertes, rencontres, surprises. Un hackathon c'est sortir
                  de sa zone de confort.
                </p>
              </li>
            </ul>
            <div class="hero-buttons col-md-12 text-center">
              <a
                class="btn btn-lg btn-primary"
                href="#"
                style="margin-top: 20px;"
                target="_blank"
                >Je participe au hackathon !</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
@media screen and (min-width: 992px) and (max-width: 1200px){
  .divMargin {
    margin-top: 120px;
  }
}

@media screen and (min-width: 1200px) {
  .liMargin {
    margin-bottom: 20px;
  }
  .divMargin {
    margin-top: 160px;
  }
}

</style>