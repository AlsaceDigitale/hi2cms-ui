<template>
  <div class="container">
    <!-- <h2 class="section-heading text-center">A Propos</h2> -->
    <h1 class="section-heading text-center">HACKATHON</h1>
    <h1 class="section-heading text-center">
      <!-- Du 5/6/7 février 2021 à Télécom Physique de Strasbourg -->
      {{ process.stepIntroduction }}
    </h1>

    <div class="about-row row">
      <!-- DESCRIPTION IMAGE -->
      <div class="about-image col-md-6 divMargin" data-animation="fadeIn">
        <img alt="a propos" src="images/contents/a-propos.jpg" />
      </div>
      <!-- DESCRIPTION TEXT -->
      <div class="about-text col-md-6">
        <p class="lead" style="font-size: 17px; padding-top: 0; text-align: justify;">
          Le
          <strong
            >Hacking Industry Camp par
            <a href="http://alsacedigitale.org/" target="_blank"
              >Alsace Digitale</a
            ></strong
          >
          est un hackathon dédié à l’industrie, un évènement destiné à bousculer
          les idées et à faire émerger de nouveaux projets. Des équipes aux
          divers talents s’affrontent pour concevoir
          des prototypes d’applications, d’objets connectés… C’est un
          espace-temps où les communautés se croisent et fourmillent d’idées
          avec pour objectif l’innovation ! <br /> <br />
          {{ process.stepDescription }}
          <!-- Pour cette 6ème édition, le <strong>Hacking Industry Camp</strong>
          débarque à Télécom Physique pour vous proposer un format hybride, 
          mélangeant les points positifs des éditions en physique et de notre 
          édition spéciale en ligne. -->
        </p>
        <p></p>
        <ul class="icon-list">
          <li>
            <span class="icon-list-icon" data-animation="bounceIn" style="margin-top: 50px"
              ><i class="far fa-hand-point-up"></i
            ></span>
            <h4 class="icon-list-title">Pointer les projets émergents</h4>
            <p>
              Le Hacking Industry Camp réunit les conditions idéales pour innover 
              et participer à l’aventure Usine 4.0. Déplacer l’industrie
              dans ses fondements, l’interroger sur ses process, la rendre plus
              agile, plus inventive.
            </p>
          </li>
          <li>
            <span class="icon-list-icon" data-animation="bounceIn" style="margin-top: 50px"
              ><i class="far fa-heart"></i
            ></span>
            <h4 class="icon-list-title">Génération Même pas peur</h4>
            <p>
              Le Hacking Industry Camp c’est une rencontre entre porteurs de projet et contributeurs
              pour innover à plusieurs. Un concentré d’énergie créative de
              tous bords : développeurs, ingénieurs, designers, bricoleurs,
              utilisateurs, marketeurs…
            </p>
          </li>
          <li>
            <span class="icon-list-icon" data-animation="bounceIn" style="margin-top: 50px"
              ><i class="far fa-lightbulb"></i
            ></span>
            <h4 class="icon-list-title">
              Idées d'aujourd'hui, Entreprises de demain
            </h4>
            <p>
              Le Hacking Industry Camp, c’est des conseils d’experts et une ambiance unique pour vous motiver,
              pour démultiplier les idées, les faire émerger, les
              concrétiser et donner naissance à des projets innovants qui se
              poursuivront, soit par la création de start up, soit au sein
              d’entreprises existantes.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hackathon",
  props: {
    process: Object
  },
};
</script>

<style scoped>
@media screen and (min-width: 992px) and (max-width: 1200px){
  .divMargin {
    margin-top: 27%;
  }
}

@media screen and (min-width: 1200px) {
  .divMargin {
    margin-top: 10%;
  }
}

</style>