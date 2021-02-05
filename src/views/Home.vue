<template>
  <div class="document" id="document">
    <!-- HEADER ======================================= -->
    <Navbar :process="process" :keynote="keynote" :planning="planning" :result="result" :partner="partner" :question="question" :specialzone="specialzone" />
    <!-- <MaskableBlock :maskableblocks="maskableblocks"> -->
    <!-- <Navbar :maskableblocks="maskableblocks" /> -->
    <!-- </MaskableBlock> -->

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

    <!-- ANNOUNCES ==================================== -->
    <MaskableBlock blockId="announce">
      <section class="headline-section section-accent section" style="padding: 0; margin-top: 2.5vh">
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <div class="row">
                <div class="col-sm-4 col-sm-offset-2">
                  <a
                    class="btn btn-lg btn-warning buttonColor"
                    href="https://hi2cms-dev.netlify.app/#/live"
                    style="margin-top: 20px"
                    >Accéder au direct</a
                  >
                </div>
                <div class="col-sm-4">
                  <a
                    class="btn btn-lg btn-warning buttonColor"
                    style="margin-top:20px; padding-left: 48px; padding-right: 48px"
                    href="blog.hackingindustry.camp"
                    >Plus d'infos</a
                  >
                </div>
              </div>
              
              
              <!-- <h3 class="text-center">
                L'édition 2019 est déjà terminée, mais ce n'est que le début pour
                vos projets !
              </h3> -->
              <!-- if the length of the array of the Announces is bigger then 1, apply the Carousel-->
              <div v-if="announces.length > 1">
                <Announce :announces="announces" />
              </div>
              <!-- if the length of the array of the Announces = 1, then just showing the announce -->
              <div v-else-if="announces.length === 1" style="height: 25vh">
                <!-- check if there is image added -->
                <div v-if="announces[0].thumbnail !== null" style="position: relative">
                  <img :alt="announces[0].title" :src="thumbUrl(announces[0])" width="100%" />
                  <h3 class="content">{{ announces[0].content }}</h3>
                </div>
                <div v-else>
                  <h3 class="contentWithoutImg">{{ announces[0].content }}</h3>
                </div>
              </div>
              <!-- <div v-else-if="announces.length === 1">
                <div v-if="announces[0].enabled">
                  <div style="position: relative">
                    <img :alt="announces[0].title" :src="thumbUrl(announces[0])" width="100%" />
                    <h3 class="title">{{ announces[0].title }}</h3>
                  </div>
                </div>
              </div> -->

              <!-- <div class="closing-buttons tada animated done-animation" target="_blank" data-animation="tada">
                <a href="https://medium.com/@AlsaceDigitale/en-direct-live-du-hacking-industry-camp-2019-cc06732d6491 " class="btn btn-lg btn-primary">REVIVRE L'EVENEMENT</a>
              </div> -->
            </div>
          </div>
        </div>
      </section>
    </MaskableBlock>

    <!-- PROCESS , KEYSTEPS , HACKATHON =============== -->
    <!-- <MaskableBlock :maskableblocks="maskableblocks"> -->
    <!-- Processes -->
    <!-- <MaskableBlock blockId="process" :zoneName="process" @zoneVisibility="process = $event"> -->
    <MaskableBlock blockId="process" @zoneVisibility="process = $event">
      <section id="process">
        <div class="container">
          <h1 class="hero-title" style="margin-bottom: 0; margin-top: 50px">
            Hacking Industry Camp
          </h1>
          <h3 style="margin-top: 0">LES ÉTAPES CLÉS</h3>

          <Process :processes="processes" />

          <h4 style="margin-top: 30px; margin-bottom: 30px">
            UN PARCOURS DE 6 MOIS <br />
            ET UN HACKATHON DE 54H POUR STIMULER L'INNOVATION <br />
            <a
              class="btn btn-lg btn-warning buttonColor"
              href="#Hackathon"
              style="margin-top: 20px;"
              >Aller à la section Hackathon</a
            >
            <!-- <a
              class="btn btn-lg btn-primary"
              href="https://www.helloasso.com/associations/alsace-digitale/evenements/hacking-industry-camp-1"
              style="margin-top: 20px;"
              target="_blank"
              >Je participe !</a
            > -->
          </h4>
        </div>
        <!-- </section> -->
        <!-- v-if="process.title != 'Hackathon' && process.title != 'Post'" -->
        <!-- KeySteps -->
        <!-- Define the section correspond to "key step" automatically -->
        <div v-for="process in processes" :key="process.id" style="border-top: 1px solid #444">
          <div v-if="
              process.title !== 'Hackathon' &&
              process.title !== 'Post Hackathon'
            " :style="{ backgroundColor: process.backgroundColor }" class="section" :id="process.title">
            <!-- class="section section-dark"  -->
            <!-- <div v-if="process.priority != 1"><hr></div> -->
            <div class="container">
              <h1 class="section-heading text-center">{{ process.title }}</h1>
              <p v-if="process.stepIntroduction" style="margin-bottom: 10px">
                {{ process.stepIntroduction }}
              </p>
              <p v-if="process.stepOrder" style="margin-top: 0; margin-bottom: 30px">
                {{ process.stepOrder }}
              </p>

              <div class="row">
                <Keynote :keynote="keystep" v-for="keystep in process.keysteps" :key="keystep.id" />
              </div>

              <p v-if="process.stepDescription" style="margin-bottom: 10px; margin-top: 20px">
                {{ process.stepDescription }}
              </p>
              <p v-if="process.stepContact" style="margin-bottom: 20px">
                <a href="mailto:contact@alsacedigitale.org" style="cursor: pointer">{{ process.stepContact }}</a>
              </p>
              <div v-if="process.stepLink" class="col-md-12 text-center">
                <a
                  class="btn btn-md btn-primary"
                  :href="process.stepLink"
                  target="_blank"
                  >{{ process.stepDescriptionLink }}</a
                >
              </div>
              <!-- <p v-if="process.stepContact">{{ process.stepContact }}  <a style="cursor: pointer" data-toggle="modal" :data-target="'#' + process.priority"> Contactez-nous</a></p> -->
            </div>
          </div>
          <div v-else-if="process.title === 'Hackathon'" :id="process.title" class="hero-section hero-layout-classic hero-layout-video-and-features-cta section section-dark" style="padding: 100px 0;background-image: url('images/backgrounds/motif2018.jpg'); background-position: center; background-repeat: no-repeat; background-size: cover;">
            <Hackathon :process="process" />
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
    </MaskableBlock>

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
              <img alt="le pitch" class="hiw-item-picture" src="images/contents/photo1.jpg" />
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
              <img alt="présentation finale" class="hiw-item-picture" src="images/contents/photo4.jpg" />
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
    <!-- <MaskableBlock blockId="keynote" :zoneName="keynote" @zoneVisibility="keynote = $event"> -->
    <MaskableBlock blockId="keynote" @zoneVisibility="keynote = $event">
      <section class="section section-dark" id="keynotes">
        <div class="section-background">
          <div class="section-background-image parallax" data-stellar-ratio="0.4">
            <img alt="" src="images/backgrounds/background-keynote-hic.jpg" style="opacity: 0.08;" />
          </div>
        </div>
        <div class="container">
          <h2 class="section-heading text-center">Keynotes</h2>
          <p class="col-md-12 text-center">
            <!-- Des keynotes gratuites et <strong>ouvertes au public</strong> -->
            Gratuites et <strong>ouvertes au public</strong> (aucune obligation
            de participer au Hackathon)
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
            <a href="https://www.youtube.com/user/LaPlageDigitale/playlists" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/youtube-play.png" width="25px" style="margin-right: 10px; margin-top: -4px" />Retrouvez les videos des conferences précédentes sur Youtube</a>
          </div>
        </div>
      </section>
    </MaskableBlock>

    <!-- The Planning ================================= -->
    <!-- <MaskableBlock blockId="planning" :zoneName="planning" @zoneVisibility="planning = $event"> -->
    <MaskableBlock blockId="planning" @zoneVisibility="planning = $event">
      <section class="section" id="planning">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 closing-buttons" data-animation="tada">
              <a class="btn btn-lg btn-primary" href="Planning-HIC-2021.pdf" target="_blank">Consulter le planning complet</a>
              <!-- <a class="btn btn-lg btn-primary" :href="pdfUrl(planningPDF)" target="_blank">Consulter le planning complet</a> -->
            </div>
            <div class="col-md-6">
              <h3 class="closing-shout">
                Prêt à passer à l'action ? La première étape c'est de vous
                inscrire !
              </h3>
              <div class="closing-buttons" data-animation="tada">
                <a class="btn btn-lg btn-primary" href="https://www.helloasso.com/associations/alsace-digitale/evenements/hacking-industry-camp-1" target="_blank">J'y vais !</a>
              </div>
            </div>
            <div class="col-md-6">
              <h3 class="closing-shout">
                Inscrit ? Consultez dès à présent la liste des défis, vous
                pouvez également proposer le vôtre !
              </h3>
              <div class="closing-buttons" data-animation="tada">
                <a class="btn btn-lg btn-primary" href="https://hic2021.sparkboard.com/" target="_blank">Voir les défis / Proposer un défi</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MaskableBlock>

    <!-- COACH ======================================== -->
    <MaskableBlock blockId="coach">
      <section class="section" id="coachs">
        <div class="container">
          <h2 class="section-heading text-center">Les Coachs</h2>
          <div class="team-row row">
            <CoachJury :coachjury="coach" v-for="coach in shuffle(coaches)" :key="coach.id" />
          </div>
        </div>
      </section>
    </MaskableBlock>

    <!-- JURY ======================================== -->
    <MaskableBlock blockId="jury">
      <section class="section" id="jury">
        <div class="container">
          <h2 class="section-heading text-center">Le Jury</h2>
          <div class="team-row row">
            <CoachJury :coachjury="jury" v-for="jury in shuffle(juries)" :key="jury.id" />
          </div>
        </div>
      </section>
    </MaskableBlock>

    <!-- RESULT ====================================== -->
    <!-- <MaskableBlock blockId="result" :zoneName="result" @zoneVisibility="result = $event"> -->
    <MaskableBlock blockId="result" @zoneVisibility="result = $event">
      <section id="winners" class="section">
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
    </MaskableBlock>

    <!-- POST HACKATHON ============================== -->
    <!-- <MaskableBlock blockId="process" :zoneName="process" @zoneVisibility="process = $event"> -->
    <MaskableBlock blockId="process" @zoneVisibility="process = $event">
      <section v-for="process in processes" :key="process.id">
        <div v-if="process.title === 'Post Hackathon'" :style="{ backgroundColor: process.backgroundColor }" class="section" :id="process.title">
          <div class="container">
            <h1 class="section-heading text-center">{{ process.title }}</h1>
            <p v-if="process.stepIntroduction" style="margin-bottom: 10px">
              {{ process.stepIntroduction }}
            </p>
            <p v-if="process.stepOrder" style="margin-top: 0; margin-bottom: 30px">
              {{ process.stepOrder }}
            </p>

            <div class="row">
              <Keynote :keynote="keystep" v-for="keystep in process.keysteps" :key="keystep.order" />
            </div>

            <p v-if="process.stepDescription" style="margin-bottom: 10px; margin-top: 20px">
              {{ process.stepDescription }}
            </p>
            <p v-if="process.stepContact">
              <a href="contact@alsacedigitale.org" style="cursor: pointer">{{
                process.stepContact
              }}</a>
            </p>
          </div>
        </div>
      </section>
    </MaskableBlock>

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

    <!-- Special Zone "Chair IA" ===================== -->
    <MaskableBlock blockId="specialzone" @zoneVisibility="specialzone = $event">
      <section class="headline-section section" id="specialZone">
        <SpecialZone :specialZone="specialZone" />
      </section>
    </MaskableBlock>

    <!-- PARTNER ===================================== -->
    <!-- <MaskableBlock :maskableblocks="maskableblocks"> -->
    <!-- <MaskableBlock blockId="partner" :zoneName="partner" @zoneVisibility="partner = $event"> -->
    <MaskableBlock blockId="partner" @zoneVisibility="partner = $event">
      <section class="section-dark section" id="sponsors" style="padding-bottom: 30px; padding-top: 30px;">
        <div class="container">
          <h2 class="section-heading text-center hidden">
            Partenaires et sponsors
          </h2>

          <PartnerCategory :partnerCategory="partnerCategory" v-for="partnerCategory in partnerCategories" :key="partnerCategory.id" />
        </div>
      </section>
    </MaskableBlock>

    <!-- FAQ ========================================= -->
    <!-- <MaskableBlock :maskableblocks="maskableblocks"> -->
    <!-- <MaskableBlock blockId="question" :zoneName="question" @zoneVisibility="question = $event"> -->
    <MaskableBlock blockId="question" @zoneVisibility="question = $event">
      <section class="faq-section section" id="faq">
        <div class="container">
          <h2 class="section-heading text-center">Foire aux questions</h2>
          <div class="faq-row row text-left">
            <div v-for="question in questions" :key="question.id" class="col-md-6 height">
              <div class="faq-item">
                <span class="faq-item-icon fa fa-question-circle"></span>
                <h4 class="faq-item-heading">{{ question.title }}</h4>
                <div class="faq-item-text">{{ question.answer }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MaskableBlock>

    <!-- CONTACT + MAPS ============================== -->
    <section class="contact-maps-section" id="contact-maps">
      <div class="container">
        <div class="row">
          <div class="col-md-5 card">
            <h2 class="card-header section-heading">Le Lieu</h2>
            <div class="card-body">
              <h5>{{ location.title }}</h5>
              <h5 class="card-title text-left">
                <i class="fa fa-university" aria-hidden="true"></i>
                {{ location.name }}
              </h5>
              <p class="card-text text-left">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                {{ location.address }}
              </p>
              <p class="card-text text-left">
                <i class="fa fa-phone" aria-hidden="true"></i>
                {{ location.phoneNumber }}
              </p>
            </div>
          </div>
          <div class="col-md-7">
            <Map :location="location" />
          </div>
        </div>
      </div>
    </section>

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
import MaskableBlock from "@/components/MaskableBlock.vue";
import SpecialZone from "@/components/SpecialZone.vue";

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
    Map,
    MaskableBlock,
    SpecialZone
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
          content: "content"
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
          title: "title",
          answer: "answer"
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
      location: {
        title: "TPS"
      },
      planningPDF: {
        title: "planning"
      },
      process: true,
      keynote: true,
      planning: true,
      result: true,
      partner: true,
      question: true,
      specialzone: true,
      apiVersion: "1.0",
      specialZone: {
        title: "Special Zone"
      }
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
    api.getLocation().then(resp => {
      this.location = resp.data;
    });
    api.getPlanningPDF().then(resp => {
      this.planningPDF = resp.data;
    });
    api.getSpecialZone().then(resp => {
      this.specialZone = resp.data;
    });
    // api.getKeySteps().then(resp => {
    //   this.keysteps = resp.data;
    // });
    api.getApiVersion().then(resp=> {
      this.apiVersion=resp.data
    });
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
    checkVisibility: function (zoneName) {
      let zone = this.maskableblocks.find(element => element.name === zoneName);
      if (zone !== undefined) {
        if (zone.visible === true) {
          // console.log('this is true ' + zone.name + ' and ' + zone.visible);
          return true;
        } else {
          // console.log('this is false ' + zone.name + ' and ' + zone.visible);
          return false;
        }
      }
      return false;
    },
    thumbUrl: function(announce) {
      if (announce.thumbnail != null) {
        return api.getMediaRoot() + announce.thumbnail.url;
      }
    },
    pdfUrl: function(filePDF) {
      if (filePDF.file[0].url !== null) {
        return api.getMediaRoot() + filePDF.file[0].url;
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

.content {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.3em;
  color: #dddddd !important;
  /* background-color: rgb(10,10,10,0.8);  */
  padding: 10px;
  width: fit-content;
  height: auto;
}
.buttonSize {
  padding-top: 4px;
  padding-bottom: 4px;
}
.contentWithoutImg {
  margin-top: 70px;
}

@media screen and (max-width: 576px) {
  .content {
    font-size: 1.2em;
    top: 30%;
  }
  .contentWithoutImg {
    font-size: 1.2em;
    margin-top: 57px;
  }
}

.buttonColor {
  color: #222222;
  background-color: #f7a611;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
