<template>
  <div class="document" id="document">
<!-- HEADER ======================================= -->
    <Navbar :maskableblocks="maskableblocks" />
    <!-- <MaskableBlock :maskableblocks="maskableblocks"> -->
      <!-- <Navbar :maskableblocks="maskableblocks" /> -->
    <!-- </MaskableBlock> -->
    
    <div class="blog-sticky-logo">
      <a href="http://alsacedigitale.org" target="_blank">
        <img alt="logo alsacedigitale" src="images/logos/AD-logo-132x132.png" title="par AlsaceDigitale" />
      </a>
      <div style="font-size: 1.5em; margin-top: -12px; margin-right: 4px"> 
        <a style="color: #FF0000; margin-right: 4px" href="https://www.youtube.com/playlist?list=PLyFRNlGSj8FifzMpq2l_8rqr_PhVoH32R" target="_blank"><i class="fab fa-youtube logoSize"></i></a>
        <a style="color: #3b5998; margin-right: 4px" href="https://www.facebook.com/alsace.digitale/" target="_blank"><i class="fab fa-facebook logoSize"></i></a>
        <a style="color: #1DA1F2" href="https://twitter.com/AlsaceDigitale" target="_blank"><i class="fab fa-twitter logoSize"></i></a>
      </div>
    </div>

<!-- ANNOUNCES ==================================== -->
    <section class="headline-section section-accent section" style="padding: 0; margin-top: 2.5vh">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <!-- <h3 class="text-center">
              L'édition 2019 est déjà terminée, mais ce n'est que le début pour
              vos projets !
            </h3> -->
            <Announce :announces="announces" />

            <!-- <div class="closing-buttons tada animated done-animation" target="_blank" data-animation="tada">
              <a href="https://medium.com/@AlsaceDigitale/en-direct-live-du-hacking-industry-camp-2019-cc06732d6491 " class="btn btn-lg btn-primary">REVIVRE L'EVENEMENT</a>
            </div> -->
          </div>
        </div>
      </div>
    </section>

<!-- PROCESS , KEYSTEPS , HACKATHON =============== -->
    <!-- <MaskableBlock :maskableblocks="maskableblocks"> -->
      <!-- Processes -->
      <section v-if="checkVisibility('process')" id="process">
        <div class="container">
          <h1 class="hero-title" style="margin-bottom: 0">Hacking Industry Camp</h1>
          <h3 style="margin-top: 0">LES ÉTAPES CLÉS</h3>

          <Process :processes="processes" />

          <h4 style="margin-top: 30px; margin-bottom: 30px">
            UN PARCOURS DE 6 MOIS <br/>
            ET UN HACKATHON DE 54H POUR STIMULER L'INNOVATION
          </h4>
        </div>
      <!-- </section> -->
    <!-- v-if="process.title != 'Hackathon' && process.title != 'Post'" -->
      <!-- KeySteps -->
      <!-- Define the section correspond to "key step" automatically -->
      <div v-for="process in processes" :key="process.id" style="border-top: 1px solid #444">
        <div v-if="process.title !== 'Hackathon' && process.title !== 'Post Hackathon'" :style="{backgroundColor: process.backgroundColor}" class="section" :id="process.title"> 
          <!-- class="section section-dark"  -->
          <!-- <div v-if="process.priority != 1"><hr></div> -->
          <div class="container">
            <h1 class="section-heading text-center">{{ process.title }}</h1>
            <p v-if="process.stepIntroduction" style="margin-bottom: 10px">{{ process.stepIntroduction }}</p>
            <p v-if="process.stepOrder" style="margin-top: 0; margin-bottom: 30px">{{ process.stepOrder }}</p>

            <div class="row">
              <Keynote :keynote="keystep" v-for="keystep in process.keysteps" :key="keystep.id" />
            </div>

            <p v-if="process.stepDescription" style="margin-bottom: 10px; margin-top: 20px">{{ process.stepDescription }}</p>
            <p v-if="process.stepContact"><a href="mailto:contact@alsacedigitale.org" style="cursor: pointer">{{ process.stepContact }}</a></p>
            <!-- <p v-if="process.stepContact">{{ process.stepContact }}  <a style="cursor: pointer" data-toggle="modal" :data-target="'#' + process.priority"> Contactez-nous</a></p> -->
          </div>
        </div>
        <div v-else-if="process.title === 'Hackathon'" :id="process.title" class="hero-section hero-layout-classic hero-layout-video-and-features-cta section section-dark" style="padding: 100px 0;background-image: url('images/backgrounds/motif2018.jpg'); background-position: center; background-repeat: no-repeat; background-size: cover;">
            <Hackathon />
        </div>

        <!-- ***** Show the Modal when user clicked the buttons of the description **** *** ** * -->
        <!-- <div class="modal fade" :id="process.priority" tabindex="-1" role="dialog" aria-labelledby="keynoteModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <form action="">
                <div class="row"> 
                  <div class="col-md-6 col-md-offset-3">
                    <div class="form-group">
                      <label for="surname">Votre NOM :</label>
                      <input type="text" id="surename" class="form-control">
                    </div>
                    <div class="form-group">
                      <label for="name">Votre Prénom :</label>
                      <input type="text" id="name" class="form-control">
                    </div>
                    <div class="form-group">
                      <label for="mail">Votre e-mail :</label>
                      <input type="mail" id="mail" class="form-control">
                    </div>
                    <div class="form-group">
                      <label for="msj">Votre message :</label>
                      <textarea id="msj" rows="5" class="form-control"></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div> -->
      </div>
      </section>
    <!-- </MaskableBlock> -->

<!-- ABOUT ======================================== -->
    <section class="about-section section-gray section" id="about">
      <About />
    </section>

<!-- HOW IT WORKS ================================= -->
    <section class="how-it-works-section section" id="how-it-works">
      <div class="container">
        <h2 class="section-heading text-center">Les étapes du Hackathon</h2>
        <div class="hiw-row row">
          <div class="col-sm-6 col-md-3" data-animation="fadeIn">
            <div class="hiw-item">
              <img alt="le pitch" class="hiw-item-picture" src="images/contents/how1.jpg" />
              <div class="hiw-item-text">
                <span class="hiw-item-icon">1</span>
                <h4 class="hiw-item-title">Le Pitch</h4>
                <p class="hiw-item-description">
                  Les défis sont présentés aux participants par leur porteur
                  respectif.
                </p>
              </div>
            </div>
          </div>
          <!-- HOW IT WORKS - ITEM 2 -->
          <div class="col-sm-6 col-md-3" data-animation="fadeIn">
            <div class="hiw-item even">
              <img alt="le choix des projets" class="hiw-item-picture" src="images/contents/how2.jpg" />
              <div class="hiw-item-text">
                <span class="hiw-item-icon">2</span>
                <h4 class="hiw-item-title">Le choix des projets</h4>
                <p class="hiw-item-description">
                  Les gens votent pour les défis qui leur plaisent le plus, et
                  forment des équipes autour des projets.
                </p>
              </div>
            </div>
          </div>
          <div class="hidden-md hidden-lg clear"></div>
          <!-- HOW IT WORKS - ITEM 3 -->
          <div class="col-sm-6 col-md-3" data-animation="fadeIn">
            <div class="hiw-item">
              <img alt="la construction" class="hiw-item-picture" src="images/contents/how3.jpg" />
              <div class="hiw-item-text">
                <span class="hiw-item-icon">3</span>
                <h4 class="hiw-item-title">La construction</h4>
                <p class="hiw-item-description">
                  Les équipes travaillent sur leur projet.
                </p>
              </div>
            </div>
          </div>
          <!-- HOW IT WORKS - ITEM 4 -->
          <div class="col-sm-6 col-md-3" data-animation="fadeIn">
            <div class="hiw-item even">
              <img alt="présentation finale" class="hiw-item-picture" src="images/contents/how4.jpg" />
              <div class="hiw-item-text">
                <span class="hiw-item-icon">4</span>
                <h4 class="hiw-item-title">La présentation finale</h4>
                <p class="hiw-item-description">
                  Le projet est présenté face à un jury composé de
                  professionnels qui élisent les meilleurs projets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
<!-- KEYNOTES ===================================== -->
    <!-- <MaskableBlock :maskableblocks="maskableblocks"> -->
      <section v-if="checkVisibility('keynote')" class="section section-dark" id="keynotes">
        <div class="section-background">
          <div class="section-background-image parallax" data-stellar-ratio="0.4">
            <img alt="" src="images/backgrounds/background-keynote-hic.jpg" style="opacity: 0.08;" />
          </div>
        </div>
        <div class="container">
          <h2 class="section-heading text-center">Keynotes</h2>
          <p class="col-md-12 text-center">
            <!-- Des keynotes gratuites et <strong>ouvertes au public</strong> -->
            Gratuites et <strong>ouvertes au public</strong> (aucune obligation de participer au Hackathon)
          </p>

          <div class="row">
            <Keynote :keynote="keynote" v-for="keynote in keynotes" :key="keynote.id" />
          </div>

          <div style="margin-top: 30px">
            <a class="btn btn-primary" href="https://www.eventbrite.fr/o/alsace-digitale-3770132475" target="_blank">M'inscrire aux Keynotes</a>
            <!-- <a href="https://www.facebook.com/alsace.digitale/" target="_blank" style="margin-left: 20px"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" width="25px"/></a>
            <a href="https://twitter.com/AlsaceDigitale" target="_blank" style="margin-left: 20px"><img src="https://img.icons8.com/fluent/48/000000/twitter.png" width="25px"/></a> -->
          </div>
          <div style="margin-top: 10px">
            <a href="https://www.youtube.com/user/LaPlageDigitale/playlists" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/youtube-play.png" width="25px" style="margin-right: 10px; margin-top: -4px"/>Retrouvez les videos des conferences précédentes sur Youtube</a>
          </div>
        </div>
      </section>   
    <!-- </MaskableBlock> -->

<!-- The Planning ================================= -->
    <section v-if="checkVisibility('planning')" class="section" id="planning">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 closing-buttons" data-animation="tada">
            <a class="btn btn-lg btn-primary" href="planning.pdf" target="_blank">Consulter le planning complet</a>
          </div>
          <div class="col-md-6">
            <h3 class="closing-shout">
              Prêt à passer à l'action ? La première étape c'est de vous
              inscrire !
            </h3>
            <div class="closing-buttons" data-animation="tada">
              <a class="btn btn-lg btn-primary" href="https://www.eventbrite.fr/e/billets-hacking-industry-camp-2019-70600870103" target="_blank">J'y vais !</a>
            </div>
          </div>
          <div class="col-md-6">
            <h3 class="closing-shout">
              Inscris ? Consultez dès à présent la liste des défis, vous pouvez
              également proposer le vôtre !
            </h3>
            <div class="closing-buttons" data-animation="tada">
              <a class="btn btn-lg btn-primary" href="https://hic2021.sparkboard.com/" target="_blank">Voir les défis / Proposer un défi</a>
            </div>
          </div>
        </div>
      </div>
    </section>


<!-- COACH ======================================== --> 
    <!-- <MaskableBlock :maskableblocks="maskableblocks"> -->
      <section v-if="checkVisibility('coach')" class="section" id="coachs">
        <div class="container">
          <h2 class="section-heading text-center">Les Coachs</h2>
          <div class="team-row row">
            <CoachJury :coachjury="coach" v-for="coach in shuffle(coaches)" :key="coach.id" />
          </div>
        </div>
      </section>
    <!-- </MaskableBlock> -->
         
<!-- JURY ======================================== --> 
    <!-- <MaskableBlock :maskableblocks="maskableblocks"> -->
      <section v-if="checkVisibility('jury')" class="section" id="jury">
        <div class="container">
          <h2 class="section-heading text-center">Le Jury</h2>
          <div class="team-row row">
            <CoachJury :coachjury="jury" v-for="jury in shuffle(juries)" :key="jury.id" />
          </div>
        </div>
      </section>
    <!-- </MaskableBlock> -->

<!-- RESULT ====================================== --> 
    <section v-if="checkVisibility('result')" id="winners" class="section">
      <div class="container">
        <h2 class="section-heading text-center">Les résultats</h2>
        <p class="col-md-12 text-center">
          Pas moins de 12 prototypes de projets sont sortis de cette édition
          2020, et 9 d'entre eux ont été primés
        </p>
        <!-- Putting the list of winners in two part : -->
        <ul class="col-md-12" style="padding-left: 50px; list-style: none; text-align: left">
          <li v-for="result in results" :key="result.id" class="winner">
            <!-- The first part for the order -->
            <div class="col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-1 col-sm-6">
              <i class="fa fa-trophy"></i> {{ result.classement }} : 
            </div>
            <!-- The second for the prize -->
            <div class="col-lg-6 col-md-6 col-sm-6">
              <a :href="result.link" target="_blank">{{ result.title }}</a>
            </div>
          </li>
        </ul>
      </div>
    </section>


<!-- POST HACKATHON ============================== -->
    <!-- <section v-if="selectKeystep('Post')"> -->
    <div v-if="checkVisibility('process')">
      <section v-for="process in processes" :key="process.id">
        <div v-if="process.title === 'Post Hackathon'" :style="{backgroundColor: process.backgroundColor}" class="section" :id="process.title">
            <div class="container">
              <h1 class="section-heading text-center">{{ process.title }}</h1>
              <p v-if="process.stepIntroduction" style="margin-bottom: 10px">{{ process.stepIntroduction }}</p>
              <p v-if="process.stepOrder" style="margin-top: 0; margin-bottom: 30px">{{ process.stepOrder }}</p>

              <div class="row">
                <Keynote :keynote="keystep" v-for="keystep in process.keysteps" :key="keystep.order" />
              </div>

              <p v-if="process.stepDescription" style="margin-bottom: 10px; margin-top: 20px">{{ process.stepDescription }}</p>
              <p v-if="process.stepContact"><a href="contact@alsacedigitale.org" style="cursor: pointer">{{ process.stepContact }}</a></p>
            </div>
          </div>
      </section>
    </div>

<!-- HEADLINE ==================================== -->
    <section class="headline-section section" id="headline">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="section-heading text-center hidden">Tagline</h2>
            <div class="row">
              <div class="col-md-12">
                <div class="col-md-12">
                  <div class="testimonial-slider-row row" style="padding-top: 80px;">
                    <div class="col-md-8 col-md-offset-2">
                      <ul class="testimonial-slider rslides" data-auto="false" data-speed="800" data-timeout="4000">
                        <!-- TESTIMONIAL ITEM 1 -->
                        <li class="testimonial-slide">
                          <blockquote class="testimonial-quote">
                            <p>
                              C'est la troisième révolution industrielle. Je
                              défends l'idée qu'il y a eu un changement massif
                              de paradigme qui nécessite une culture économique,
                              sociale, industrielle différente, qui a bouleversé
                              notre économie et l'organisation de la société.
                            </p>
                          </blockquote>
                          <cite class="testimonial-cite">Gilles Babinet, Digital Champion</cite>
                        </li>
                        <!-- TESTIMONIAL ITEM 2 -->
                        <li class="testimonial-slide">
                          <blockquote class="testimonial-quote">
                            <p>
                              A mesure que le quotidien s’informatise, se
                              numérise, se robotise, l’innovation fait naître,
                              assez paradoxalement, une phénoménale bouffée
                              collaborative.
                            </p>
                          </blockquote>
                          <cite class="testimonial-cite">Jean Paul Viart, Humanoides</cite>
                        </li>
                        <!-- TESTIMONIAL ITEM 3 -->
                        <li class="testimonial-slide">
                          <blockquote class="testimonial-quote">
                            <p>
                              L'innovation consiste à socialiser des inventions
                              technologiques, elles-mêmes issues de découvertes
                              scientifiques. Innover, c'est produire du nouveau
                              (méthodes, objets, services) pour l'installer sur
                              un marché.
                            </p>
                          </blockquote>
                          <cite class="testimonial-cite">Bernard Stiegler, Ars Industrialis</cite>
                        </li>
                        <!-- TESTIMONIAL ITEM 4 -->
                        <li class="testimonial-slide">
                          <blockquote class="testimonial-quote">
                            <p>
                              Des prévisions réalisées par Cisco indiquent que
                              d’ici 2022, l’Internet des Objets générera 14 400
                              milliards de dollars en bénéfices et revenus. Une
                              autre étude de General Electric publiée en
                              novembre 2012 conclut que les gains en efficacité
                              et productivité induits par un système industriel
                              digitalisé rejailliront sur tous les secteurs
                              économiques d’ici 2025, impactant
                              approximativement une moitié de l’économie
                              globale.
                            </p>
                          </blockquote>
                          <cite class="testimonial-cite">Jeremy Rifkin, Economiste</cite>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


<!-- PARTNER ===================================== -->
    <!-- <MaskableBlock :maskableblocks="maskableblocks"> -->
      <section v-if="checkVisibility('partner')" class="section-dark section" id="sponsors" style="padding-bottom: 30px; padding-top: 30px;">
        <div class="container">
          <h2 class="section-heading text-center hidden">
            Partenaires et sponsors
          </h2>

          <PartnerCategory :partnerCategory="partnerCategory" v-for="partnerCategory in partnerCategories" :key="partnerCategory.id" />
        
        </div>
      </section>
    <!-- </MaskableBlock> -->

<!-- FAQ ========================================= -->
    <!-- <MaskableBlock :maskableblocks="maskableblocks"> -->
      <section v-if="checkVisibility('question')" class="faq-section section" id="faq">
        <div class="container">
          <h2 class="section-heading text-center">Foire aux questions</h2>
          <div class="faq-row row text-left">
            <div v-for="question in questions" :key="question.id" class="col-md-6 height">
              <div class="faq-item">
                <span class="faq-item-icon fa fa-question-circle"></span>
                <h4 class="faq-item-heading">{{ question.title }}</h4>
                <div class="faq-item-text">{{ question.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <!-- </MaskableBlock> -->

<!-- CONTACT + MAPS ============================== -->
    <section class="contact-maps-section" id="contact-maps">
      <div class="container">
        <div class="row">
          <div class="col-md-5 card">
            <h2 class="card-header section-heading">Le Lieu</h2>
            <div class="card-body">
              <h5>Cette année encore, le Hacking Industry Camp aura lieu à TPS</h5>
              <h5 class="card-title text-left"><i class="fa fa-university" aria-hidden="true"></i> Télécom Physique Strasbourg</h5>
              <p class="card-text text-left"><i class="fa fa-map-marker" aria-hidden="true"></i> Pôle API, 300 Bd Sébastien Brant, 67400 Illkirch-Graffenstaden</p>
              <p class="card-text text-left"><i class="fa fa-phone" aria-hidden="true"></i> 03 68 85 45 10</p>
            </div>
          </div>
          <div class="col-md-7">
            <Map />
          </div>
        </div>

      </div>
    </section>
        
<!-- CONTACT + MAPS ============================== -->
    <!-- <section class="contact-maps-section section" id="contact-maps">
      <div class="section-background"> -->
        <!-- MAPS BACKGROUND -->
        <!-- <div class="section-background-maps" style="background-image: url('images/contents/map.jpg')"></div>
        <div class="container">
          <div class="contact-maps-row row">
            <div class="col-md-7 col-md-offset-5">
              <div class="contact-maps-box" data-animation="fadeIn">
                <h2 class="section-heading">Le Lieu</h2>
                <p>
                  Cette année encore, le Hacking Industry Camp aura lieu à
                  l'INSA
                </p>
                <div class="row">
                  <address class="col-sm-6">
                    <strong>INSA</strong>
                    <ul class="fa-ul">
                      <li>
                        <i class="fa-li fa fa-home"></i>24 boulevard de la
                        Victoire <br />Strasbourg
                      </li>
                      <li>
                        <i class="fa-li fa fa-phone"></i>Téléphone :
                        03.88.41.86.95
                      </li>
                    </ul>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

<!-- FOOTER ====================================== -->
    <section class="footer-section section" id="footer">
      <div class="container">
        <!--<img src="images/contents/upper-rhine40.jpg" alt=""><br> passe en catégorie partenaire-->
        <!-- <img src="images/contents/interreg2018.jpg" alt=""><br> -->
        <h3 class="footer-hashtag">
          #HICamp
        </h3>
        <div style="display: block; margin-bottom: 40px; font-size: 18px;">
          <!-- <a href="https://drive.google.com/file/d/1j-l3JHPOevdKIlTub1AjhZm5dKnm9mHa/view?usp=sharing" target="_blank">Communiqué de presse</a> -
    <a href="https://drive.google.com/open?id=0B0S2y3rk51DNZ1BFNFI4cWFWUjQ2aThUblRBaVl5OWM3RmVv" target="_blank">Dossier de presse</a> -->
        </div>
        <!-- <div class="footer-socmed">
          <a href="http://facebook.com/alsace.digitale" target="_blank"><span class="fa fa-facebook"></span></a>
          <a href="https://twitter.com/AlsaceDigitale" target="_blank"><span class="fa fa-twitter"></span></a>
        </div> -->
        <div class="footer-copyright">
          <!-- <button class="btn btn-primary" data-toggle="modal" data-target="#mentionsLegales">Mentions Légales</button> -->
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
      </div>

      <!-- Modal -->
      <!-- <div class="modal fade" id="mentionsLegales" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Mentions Légales</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div> -->

    </section>
    <!-- </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

import api from "@/services/api";
import Keynote from "@/components/Keynote.vue";
import CoachJury from "@/components/CoachJury.vue";
import Announce from "@/components/Announce.vue";
import Process from "@/components/Process.vue";
import Hackathon from "@/components/Hackathon.vue";
import About from "@/components/About.vue";
import PartnerCategory from "@/components/PartnerCategory.vue";
import Navbar from "@/components/Navbar.vue";
import Map from "@/components/Map.vue";
// import MaskableBlock from "@/components/MaskableBlock.vue";

// import KeyStep from "@/components/KeyStep.vue";

export default {
  name: "Home",
  components: {
    Keynote,
    CoachJury,
    Announce,
    Process,
    Hackathon,
    About,
    PartnerCategory,
    Navbar,
    Map
    // MaskableBlock
    // KeyStep
  },
  data: function () {
    return {
      keynotes: [
        {
          _id: "keynode_id",
          Title: "keynote title",
          startTime: "2019-11-12T10:00:00.000Z",
          description:
            "Dans un contexte de globalisation, la transformation des entreprises s'opère souvent en tenant compte d’environnements multiculturels, de part la localisation des filiales, des fournisseurs, le recrutement des collaborateurs… la réussite de ces diverses situations nécessite d’avoir conscience des différences de point de vue, d’habitudes de travail, de process.\nVu de ce côté du Rhin, l’allemand serait vraiment plus pragmatique ? ",
          createdAt: "2020-05-09T18:35:24.791Z",
          updatedAt: "2020-05-09T18:35:24.791Z",
          id: "5eb6f7ece6b18200168a7e4e"
        }
      ],
      coaches: [
        {
          firstname: "Prénom",
          lastname: "NOM"
        }
      ],
      juries: [
        {
          firstname: "Prénom",
          lastname: "NOM"
        }
      ],
      announces: [
        {
          title: "titre",
          subTitle: "sous-titre"
        }
      ],
      processes: [
        {
          title: "titre",
          description: "description"
        }
      ],
      results: [
        {
          title: "titre"
        }
      ],
      questions: [
        {
          title: "titre",
          description: "description"
        }
      ],
      partnerCategories: [
        {
          title: "titre"
        }
      ],
      maskableblocks: [
        {
          name: "name"
        }
      ],
  
      menu: []
    };
  },
  mounted: function () {
    api.getKeynotes().then(resp => {
      this.keynotes = resp.data;
    });
    api.getCoaches().then(resp => {
      this.coaches = resp.data;
    });
    api.getJuries().then(resp => {
      this.juries = resp.data;
    });
    api.getAnnounces().then(resp => {
      this.announces = resp.data;
    });
    api.getProcesses().then(resp => {
      this.processes = resp.data;
    });
    api.getResults().then(resp => {
      this.results = resp.data;
    });
    api.getQuestions().then(resp => {
      this.questions = resp.data;
    });
    api.getPartnerCategories().then(resp => {
      this.partnerCategories = resp.data;
    });
    api.getMaskableBlocks().then(resp => {
      this.maskableblocks = resp.data;
    });
    
    // api.getKeySteps().then(resp => {
    //   this.keysteps = resp.data;
    // });
  },
  methods: {
    shuffle: function (arr) {
      let i, j, temp;
      for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return arr;    
    },
    checkVisibility : function(zoneName) {
      let zone = this.maskableblocks.find(element => element.name === zoneName);
      if (zone !== undefined) {
        if(zone.visible === true) {
          // console.log('this is true ' + zone.name + ' and ' + zone.visible);
          return true;
        } else {
          // console.log('this is false ' + zone.name + ' and ' + zone.visible);
          return false;
        }
      }  
    },
    selectKeystep : function(keyName) {
      let step = this.processes.find(element => element.name === keyName);
      if (step !== undefined) {
        return step;
      }  
    }
      // return this.maskableblocks.filter((element) => {
      //   if(element.name.match(zoneName)) {
      //     if (element.visible) {
      //       console.log(element.name + ' ' + element.visible);
      //       return true;
      //     } else {
      //       return false;
      //     }
          // console.log(element.visible + element.name);
        // }
        //   return true;
        // else
        //   return false;
      // });
  }
};
</script>

<style scoped>
  .height {
    height: 25vh;
  }
  @media screen and (max-width: 991px) {
    .height {
      height: auto;
    }
    .blog-sticky-logo img {
      width: 60px;
    }
    .logoSize {
      font-size: 17px;
    }
  }
  @media screen and (max-width: 991px) {
    .winner {
      margin-bottom: 5px;
    }
  }

</style>
