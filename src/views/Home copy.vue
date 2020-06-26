<template>
  <div class="document" id="document">
    <!-- HEADER
================================= -->
    <header class="header-section section section-dark navbar navbar-fixed-top" id="header" style="background: rgba(0,0,0,0.8);">
      <div class="container-fluid">
        <div class="navbar-header navbar-left">
          <!-- RESPONSIVE MENU BUTTON -->
          <button class="navbar-toggle" data-target="#navigation" data-toggle="collapse" type="button">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- HEADER LOGO -->
          <a class="navbar-logo navbar-brand anchor-link" href="#hero">
            <img alt="logo alsace digitale" src="images/logos/Logo_HIC_White.png" />
          </a>
        </div>
        <nav class="navigation navbar-collapse collapse navbar-right" id="navigation">
          <!-- NAVIGATION LINKS -->
          <ul class="nav navbar-nav" id="header-nav">
            <li><a href="#keynotes">Keynotes</a></li>
            <li><a href="#about">A Propos</a></li>
            <!--<li><a href="#videos">Vidéos</a></li>-->
            <li><a href="#how-it-works">Planning</a></li>
            <li>
              <a href="#coachs">Coachs &amp; Jury</a>
              <!--<li><a href="#prizes">Prix</a>-->
            </li>

            <li><a href="#winners">Résultats</a></li>
            <li><a href="#sponsors">Partenaires</a></li>
            <li><a href="#faq">FAQ</a></li>
            <!-- HEADER ACTION BUTTON -->
            <li class="header-action-button">
              <a class="btn btn-primary" href="https://www.eventbrite.fr/e/billets-hacking-industry-camp-2019-70600870103" target="_blank">S'inscrire</a>
            </li>
            <li class="header-action-button">
              <a class="btn btn-primary" href="http://hic2019.sparkboard.com" target="_blank">Les défis</a>
            </li>
            <li>
              <a aria-expanded="false" class="dropdown-toggle external language-choice" data-toggle="dropdown" href="#" role="button"><i class="fa fa-globe" style="font-size: 22px; vertical-align: -3px;"></i>&nbsp; FR <span class="caret"></span></a>
              <ul class="dropdown-menu dropdown-language" role="menu">
                <li>
                  <a href="/en/">EN</a>
                </li>
                <li>
                  <a href="/de/">DE</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="blog-sticky-logo">
      <a href="http://alsacedigitale.org" target="_blank">
        <img alt="logo alsacedigitale" src="images/logos/AD-logo-132x132.png" title="par AlsaceDigitale" />
      </a>
      <div style="font-size: 1.5em; margin-top: -12px; margin-right: 4px">
        <a style="color: #FF0000; margin-right: 4px" href="https://www.youtube.com/user/LaPlageDigitale/playlists" target="_blank"><i class="fab fa-youtube"></i></a>
        <a style="color: #3b5998; margin-right: 4px" href="https://www.facebook.com/alsace.digitale/" target="_blank"><i class="fab fa-facebook"></i></a>
        <a style="color: #1DA1F2" href="https://twitter.com/AlsaceDigitale" target="_blank"><i class="fab fa-twitter"></i></a>
      </div>
    </div>

<!-- Announces -->
<!-- Check the visibility of the Announces zone, if it's visible, show it, else not -->
    <div v-for="zone in zones" :key="zone.id">
      <section v-if="zone.name === 'announces' && zone.visible === true" class="headline-section section-accent section" style="padding: 0; margin-top: 2.5vh">
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
    </div>

<!-- Processes , Keysteps , Hackathon -->
<!-- Check the visibility of the processes zone, if it's visible, show it, else not -->
    <div v-for="zone in zones" :key="zone.id">
      <div v-if="zone.name === 'processes' && zone.visible === true">
        <!-- Plan of the Hacking Industry Camp "key steps" -->
        <section>
          <div class="container">
            <h1 class="hero-title" style="margin-bottom: 0">Hacking Industry Camp</h1>
            <h3 style="margin-top: 0">LES ÉTAPES CLÉS</h3>

            <Process :processes="processes" />

            <h4 style="margin-top: 30px; margin-bottom: 30px">
              UN PARCOURS DE 6 MOIS <br/>
              ET UN HACKATHON DE 54H POUR STIMULER L'INNOVATION
            </h4>
          </div>
        </section>
    
        <!-- Define the section correspond to "key step" automatically -->
        <section v-for="process in processes" :key="process.id" style="border-top: 1px solid #444">
          <div v-if="process.title != 'Hackathon'" class="section section-dark" :id="process.title">
            <!-- <div v-if="process.priority != 1"><hr></div> -->
            <div class="container">
              <h1 class="section-heading text-center">{{ process.title }}</h1>
              <p v-if="process.stepIntroduction" style="margin-bottom: 10px">{{ process.stepIntroduction }}</p>
              <p v-if="process.stepOrder" style="margin-top: 0; margin-bottom: 30px">{{ process.stepOrder }}</p>

              <div class="row">
                <Keynote :keynote="keystep" v-for="keystep in process.keysteps" :key="keystep.id" />
              </div>

              <p v-if="process.stepDescription" style="margin-bottom: 10px; margin-top: 20px">{{ process.stepDescription }}</p>
              <p v-if="process.stepContact">{{ process.stepContact }}</p>
            </div>
          </div>
        </section>

            <!-- HERO
        ================================= -->
        <section class="hero-section hero-layout-classic hero-layout-video-and-features-cta section section-dark" id="Hackathon" style="padding: 100px 0;background-image: url('images/backgrounds/motif2018.jpg'); background-position: center; background-repeat: no-repeat; background-size: cover;">
          <Hackathon />
        </section>
      </div>
    </div>
      <!-- <div class="section-background"> -->
        <!-- VIDEO BACKGROUND -->
        <!--<div class="section-background-video section-background-dot-overlay parallax" data-stellar-ratio="0.4">
<video preload="auto" autoplay loop muted poster="images/backgrounds/video-fallback-bg.jpg" style="opacity: 0.3;">
<source type="video/mp4" src="videos/video-bg.mp4">
<source type="video/ogg" src="videos/video-bg.ogv">
<source type="video/webm" src="videos/video-bg.webm">
</video>
</div>-->
        <!-- SLIDESHOW BACKGROUND -->
        <!--<ul class="section-background-slideshow parallax" data-stellar-ratio="0.4" data-speed="800" data-timeout="4000">
<li><img src="images/backgrounds/hero-bg-slideshow-1.jpg" alt="" style="opacity: 0.25;"></li>
<li><img src="images/backgrounds/hero-bg-slideshow-2.jpg" alt="" style="opacity: 0.25;"></li>
<li><img src="images/backgrounds/hero-bg-slideshow-3.jpg" alt="" style="opacity: 0.2;"></li>
</ul>-->
      <!-- </div> -->
      <!-- <div class="container">
        <div class="hero-content">
          <div class="hero-content-inner">
            <div class="hero-heading text-center row" data-animation="fadeIn"> -->
              <!--<div class="col-md-2">
<img src="images/logos/h2017.png" alt="logo hacking industry camp" />
</div>-->
              <!-- <div class="col-md-10 col-md-offset-1">
                <h1 class="section-heading text-center">HACKATHON</h1> -->
                <!-- <h1 class="hero-title">Hacking Industry Camp</h1> -->
                <!-- <h1 class="section-heading text-center">Du 5/6/7 février 2021 à TPS. Strasbourg </h1> -->
                <!-- <p class="hero-tagline">
                  Du 11 au 13 octobre 2019 à l'INSA Strasbourg
                </p> -->
              <!-- </div>
            </div> -->
            <!--<div class="newsbox col-md-10 col-md-offset-1">
<div style="font-size: 18px;color:#fff;padding-bottom: 10px;" class="text-center"><i class="fa fa-bullhorn"></i> &nbsp;Besoin de conseils pour pitcher votre projet ?</div>
<div class="row" style="margin-bottom: 15px;">
<div class="col-md-6">
<a class="btn btn-default" style="width: 100%;" href="https://fr.slideshare.net/LaPlageDigitale/8-conseils-pour-pitcher-comme-un-dieupptx/" target="_blank">8 conseils pour pitcher comme un dieu</a>
</div>
<div class="col-md-6">
<a class="btn btn-default" style="width: 100%;" href="http://hic2017.sparkboard.com/" target="_blank">Déposer mon projet sur le sparkboard</a>
</div>
</div>
</div>-->
            <!-- <div class="newsbox col-md-10 col-md-offset-1">
                         <div class="text-center" style="font-size: 18px;color:#fff;padding-bottom: 10px;"><i
                                 class="fa fa-calendar"></i> &nbsp;Événements organisés par nos partenaires (gratuits
                             mais sur inscription)
                         </div>
                         <div class="row" style="margin-bottom: 15px;">
                             <div class="col-md-6">
                                 <p style="margin: 0;">Dans le cadre de la journée des projets et de l'innovation de
                                     l'Ensisa, notre partenaire <a href="http://www.alsacetech.org/" target="_blank">Alace
                                         Tech</a> organise la conférence Alsace Tech 4.0 le 28/09 à 18h15 à l’ENGEES.<br><br>
                                 </p>
                                 <a class="btn btn-default btn-special" href="https://www.weezevent.com/conference-alsace-tech-40-28-septembre-2016-a-l-engees"
                                    style="width: 100%;"
                                    target="_blank">Conférence Alsace Tech 4.0 le 28/09 à 18h15</a>
                             </div>
                             <div class="col-md-6">
                                 <p style="margin: 0;">La fabrication additive vous intéresse ? Rendez-vous le 29
                                     septembre à 18h30 au Centre de culture numérique pour le prochain Créativ’Café #8
                                     organisé par <a href="http://www.creaccro.eu/" target="_blank">Accro</a>.<br><br>
                                 </p>
                                 <a class="btn btn-default btn-special" href="http://www.creaccro.eu/event/fabrication-additive-creativcafe-8-29-septembre/"
                                    style="width: 100%;"
                                    target="_blank">Creativ'Café #8 le 29/09 à 18h30</a>
                             </div>
                         </div>
                     </div>-->
            <!--    <div class="newsbox col-md-10 col-md-offset-1">
                            <div class="row" style="margin-bottom: 15px;">
                                <div class="col-md-12">
                                    <a class="btn btn-default"
                                       href="https://www.eventbrite.fr/e/billets-conference-hic-1-la-fabrique-du-droit-face-a-linnovation-74257679719"
                                       style="width: 100%;" target="_blank">12/10 à 16h30 : La fabrique du droit face à l'innovation</a>
                                </div>
                            </div>
                            <div class="row" style="margin-bottom: 15px;">
                                <div class="col-md-12">
                                    <a class="btn btn-default"
                                       href="https://www.eventbrite.fr/e/billets-hacking-industry-camp-2019-soiree-de-cloture-73389761753"
                                       style="width: 100%;" target="_blank">13/10 à 16h30 : Cérémonie de clôture</a>
                                </div>
                            </div>
                            <div class="text-center" style="font-size: 18px;color:#fff;padding-top: 8px;">
                                <i class="fa fa-video-camera"></i> &nbsp;Découvrez les Webinars, pour approfondir vos connaissances avant le HIC !
                            </div>
                            <br>
                            <div class="webinars row"
                                 style="margin-bottom: 15px; padding-right: -80px; margin-right: -80px; position: relative; width: 100%; left: 15px;">
                                <div class="col-md-4">
                                    <a class="btn btn-default"
                                       href="https://www.eventbrite.fr/e/billets-webinar1-hic-le-design-thinking-une-aide-a-la-transformation-71662204583"
                                       style="width: 100%;" target="_blank">19/09 à 12h30<br><span>Design thinking</span></a>
                                </div>
                                <div class="col-md-4">
                                    <a class="btn btn-default"
                                       href="https://www.eventbrite.fr/e/billets-webinar2-hic-la-connectivite-iot-71663470369"
                                       style="width: 100%;" target="_blank">29/09 à 12h30<br><span>La connectivité IOT</span></a>
                                </div>
                                <div class="col-md-4">
                                    <a class="btn btn-default"
                                       href="https://www.eventbrite.fr/e/billets-webinar3-hic-introduction-a-la-qualite-des-datas-techniques-71664136361"
                                       style="width: 100%; height: 100%;" target="_blank">03/10 à 12h30<br><span>Introduction à la qualité des datas techniques</span></a>
                                </div>
                                <div class="col-md-3">
    <a class="btn btn-default" style="width: 100%;" href="https://www.eventbrite.fr/e/billets-webinar4-hic-la-blockchain-a-quoi-sert-elle-vraiment-50345989209" target="_blank">11/10 à 12h<br><span>A quoi sert vraiment la Blockchain ?</span></a>
    </div>
    </div>
                                <div class="clear-columns clearfix visible-xs-block visible-sm-block"></div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <br>Et pour aller plus loin, découvrez les méthodes agiles SCRUM avec des LEGOs grâce à Sogeti...<br><br>
                                    <a class="btn btn-default"
                                       href="https://www.eventbrite.fr/e/billets-workshop-lego-for-scrum-71619735557"
                                       style="width: 100%;" target="_blank">Workshop Lego for SCRUM le 02/10 à 17h à Sogeti</a>
                                </div>
                            </div>
                        </div>-->
            <!-- <div class="hero-features row" style="margin-top: 45px;">
              <div class="hero-features-left col-md-6">
                <div class="video-embed"> -->
                  <!-- <iframe allowfullscreen height="315" src="https://www.youtube.com/embed/LdxzQsZE93Y" width="560"></iframe> -->
                  <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/QoWu4FlbYus" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
                </div> -->
                <!--<img src="images/contents/amphi2.jpg" style="width: 100%" alt="hacking industry camp 2017">-->
                <!-- <p class="lead">
                  <strong>54h pour stimuler l'innovation</strong> <br />La
                  cinquième édition du Hackathon dédié à l'Industrie en Alsace
                  <br />54h pour innover et inventer l'industrie 4.0
                  <span style="font-style: normal;font-size: 17px; padding-top: 6px;"><br />
                    <strong>Jetez un coup d'oeil aux éditions précédentes :
                    </strong>
                    <a href="http://2019.hackingindustry.camp/" target="_blank">2019</a>
                    -
                    <a href="http://2018.hackingindustry.camp/" target="_blank">2018</a>
                  </span>
                </p>
              </div>

              <div class="hero-features-right col-md-6" data-animation="fadeIn">
                <ul class="icon-list">
                  <li>
                    <span class="icon-list-icon" data-animation="bounceIn"><i class="fa fa-hand-o-up" aria-hidden="true"></i></span>
                    <h4 class="icon-list-title">Identifier les projets</h4>
                    <p>Créer des dynamiques d'innovation interne ou externe.</p>
                  </li>
                  <li>
                    
                    <span class="icon-list-icon" data-animation="bounceIn"><i class="fa fa-heart" aria-hidden="true"></i></span>
                    <h4 class="icon-list-title">Fédérer les potentiels</h4>
                    <p>
                      Un hackathon est un moment FUN. Le mode défi rassemble et
                      démultiplie les énergies.
                    </p>
                  </li>
                  <li>
                    
                    <span class="icon-list-icon" data-animation="bounceIn"><i class="fa fa-lightbulb-o" aria-hidden="true"></i></span>
                    <h4 class="icon-list-title">
                      Stimuler la créativité collective
                    </h4>
                    <p>
                      Découvertes, rencontres, surprises. Un hackathon c'est
                      sortir de sa zone de confort.
                    </p>
                  </li>
                </ul> -->
                <!-- <div class="hero-buttons col-md-12 text-center"> -->
                  <!--<a class="btn btn-lg btn-primary" href="planning.pdf" style="margin-top: 20px;" target="_blank">Voir le planning</a>-->
                  <!-- <a class="btn btn-lg btn-primary" href="https://www.eventbrite.fr/e/billets-hacking-industry-camp-2019-70600870103" style="margin-top: 20px;" target="_blank">Je participe au hackathon !</a> -->
                  <!--<a href="#winners" class="btn btn-lg btn-primary" style="margin-top: 20px;">Les résultats</a>
<a href="https://www.facebook.com/media/set/?set=a.1860170557331117.1073741850.114361761912014&type=1&l=735a14f260" target="_blank" class="btn btn-lg btn-primary" style="margin-top: 20px;">Les photos</a>-->
                  <!--<a href="#about" class="btn btn-lg btn-primary" style="margin-top: 20px;">Découvrir</a>-->
                  <!--<button disabled="disabled" class="btn btn-default">La billetterie ouvre bientôt !</button>-->
                <!-- </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    
<!-- KEYNOTES -->
<!-- Check the visibility of the processes zone, if it's visible, show it, else not -->
    <div v-for="zone in zones" :key="zone.id">
      <section v-if="zone.name === 'keynotes' && zone.visible === true" class="section section-dark" id="keynotes">
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
            <!-- <div>{{ keynotes.length }}</div> -->
            <Keynote :keynote="keynote" v-for="keynote in keynotes" :key="keynote.id" />
            <!-- <ServeDev :item="item" v-for="item in keynotes" :key="item.id" /> -->

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
    </div>
          <!--
          <div class="about-text col-md-3">
            <h3 style="font-size: 20px; font-weight: bold;">
              Samedi 12 octobre de 11h à 12h
            </h3>

            <img alt="Principes des organisations exponentielles" src="images/contents/conference2.jpg" style="width: 100%;" title="Principes des organisations exponentielles" />

            <h3>
              Les relations interculturelles entre la France et l’Allemagne dans
              l’Industrie 4.0
            </h3>

            <div class="lead">
              <p style="font-size: 18px;">
                Dans un contexte de globalisation, la transformation des
                entreprises s'opère souvent en tenant compte d’environnements
                multiculturels, de part la localisation des filiales, des
                fournisseurs, le recrutement des collaborateurs… la réussite de
                ces diverses situations nécessite d’avoir conscience des
                différences de point de vue, d’habitudes de travail, de process.
                Vu de ce côté du Rhin, l’allemand serait vraiment plus
                pragmatique ?
              </p>
            </div>
            <a>
              Keynote en Anglais
            </a>
            <br />
            </p>
                    <p>Conférence suivie d'une collation, organisée en partenariat avec <a href="http://alsace.cci.fr/"
                                                                                           target="_blank"><img
                            alt="CCI Alsace" src="images/contents/ccialsace.jpg" style="height: 33px;"></a></p>
            <div style="margin-bottom: 50px; margin-top: 20px;">
              <a class="btn btn-primary" href="https://www.eventbrite.fr/e/billets-conference-hic2-relations-interculturelles-74418027323" target="_blank">J'y vais !</a>
            </div>
          </div>

          <div class="about-text col-md-3">
            <h3 style="font-size: 20px; font-weight: bold;">
              Samedi 12 octobre de 16h30 à 17h30
            </h3>
            <img alt="La fabrique du droit face à l'innovation" src="images/contents/conference.jpg" style="width: 100%;" title="La fabrique du droit face à l'innovation" />
            <h3>La fabrique du droit face à l'innovation</h3>
            <div class="lead">
              <p style="font-size: 18px;">
                Le droit et les innovations sont encore aujourd’hui présentées
                comme opposés : les innovations ont besoin d’un environnement
                avec peu de régulation si nous voulons les voir émerger alors
                que le droit est censé les limité. Mais que se passerait-il si
                on commençait à concevoir le droit autrement ? Iris Champagne,
                chercheuse à l’Université Paris Dauphine propose de répondre à
                cette question en utilisant les théories de la conception afin
                de concevoir le droit pour supporter les innovations radicales.
              </p>
            </div>
            <p style="margin-bottom: 0;">Conférence donnée par Iris Champagne dans le cadre de sa thèse à l'Université Paris Dauphine</p><br>
                    <p>Organisée avec &nbsp;<a href="https://www.creaccro.eu/" target="_blank"><img alt="Creaccro" src="images/contents/creaccro-h.jpg" style="height: 35px;"></a>
                    </p>

            <div style="margin-bottom: 50px; margin-top: 20px;">
              <a class="btn btn-primary" href="https://www.eventbrite.fr/e/billets-conference-hic-1-la-fabrique-du-droit-face-a-linnovation-74257679719" target="_blank">J'y vais !</a>
            </div>
          </div>

          <div class="about-text col-md-3">
            <h3 style="font-size: 20px; font-weight: bold;">
              Samedi 12 octobre de 14h30 à 15h30
            </h3>

            <img alt="DAM-PIM-CMS, la relation client dans l'industrie 4.0" src="images/contents/conference3.jpg" style="width: 100%;" title="DAM-PIM-CMS, la relation client dans l'industrie 4.0" />

            <h3>DAM-PIM-CMS, la relation client dans l'industrie 4.0</h3>

            <div class="lead">
              <p style="font-size: 18px;">
                Augmenter sa performance business à l’heure du 4.0, c’est
                intégrer toute la chaîne du produit dans son process de
                digitalisation de la mise en vente à la commande, de la
                production à la livraison. La qualité du fil numérique ainsi
                conçu est essentiel à la réussite de la transformation.
              </p>
              <div class="read_more">
                            <a class="read_more_button" href="javascript:void(0)">En savoir plus</a>
                            <div class="read_more_content">
                                <p>Véritable expert travaillant pour de nombreux clients et sur différentes solutions,
                                    Patrick Meyer a récemment été récompensé d'un Award par IBM pour son travail autour de
                                    Watson.</p>
                            </div>
                        </div>
            </div>
            <p>Keynote de Frederic Sanuy<br /></p>
            <p><a href="https://www.soprasteria.com/" target="_blank"><img alt="Sopra Steria" src="images/contents/sopra.jpg" style="height: 33px;"></a></p>
            <div style="margin-bottom: 50px; margin-top: 0;">
              <a class="btn btn-primary" href="https://www.eventbrite.fr/e/billets-conference-hic3-dam-pim-cms-la-relation-client-dans-lindustrie-40-74423684243" target="_blank">J'y vais !</a>
            </div>
          </div>
          <div class="about-text col-md-3">
            <h3 style="font-size: 20px; font-weight: bold;">
              Dimanche 13 octobre de 16h30 à 19h
            </h3>

            <img alt="Soirée de clôture" src="images/contents/cloture.jpg" style="width: 100%;" title="Soirée de clôture" />

            <h3>Soirée de clôture</h3>

            <div class="lead">
              <p style="font-size: 18px;">
                Ils ont travaillé 54h non stop ! Ils sont allés au bout de leur
                idée. Ensemble, ils ont trouvé une solution et sont prêts à la
                partager avec le public et à la soumettre au verdict du jury.
                Suspens !
              </p>

            </div>
            <div style="margin-bottom: 50px; margin-top: 0;">
              <a class="btn btn-primary" href="https://www.eventbrite.fr/e/billets-hacking-industry-camp-2019-soiree-de-cloture-73389761753" target="_blank">J'y vais !</a>
            </div>
          </div>
          -->
        
<!-- DESCRIPTION
================================= -->
<!-- Check the visibility of the About zone, if it's visible, show it, else not -->
    <div v-for="zone in zones" :key="zone.id">
      <section v-if="zone.name === 'about' && zone.visible === true" class="about-section section-gray section" id="about">
        <About />
      </section>
    </div>
      <!-- <div class="container">
        <h2 class="section-heading text-center">A Propos</h2>
        <div class="about-row row"> -->
          <!-- DESCRIPTION IMAGE -->
          <!-- <div class="about-image col-md-6" data-animation="fadeIn">
            <img alt="a propos" src="images/contents/a-propos.jpg" />
          </div> -->
          <!-- DESCRIPTION TEXT -->
          <!-- <div class="about-text col-md-6">
            <p class="lead" style="font-size: 18px;padding-top: 0;">
              Le
              <strong>Hacking Industry Camp par
                <a href="http://alsacedigitale.org/" target="_blank">Alsace Digitale</a></strong>
              est un hackathon dédié à l’industrie, un évènement destiné à
              bousculer les idées et à faire émerger de nouveaux projets. Des
              équipes aux divers talents s’affrontent pendant tout un week-end
              pour concevoir des prototypes d’applications, d’objets connectés…
              C’est un espace-temps où les communautés se croisent et
              fourmillent d’idées avec pour objectif l’innovation !
            </p>
            <ul class="icon-list">
              <li> -->
                <!-- <span class="icon-list-icon fa fa-hand-o-up" data-animation="bounceIn"></span> -->
                <!-- <span class="icon-list-icon" data-animation="bounceIn"><i class="fa fa-hand-o-up" aria-hidden="true"></i></span>
                <h4 class="icon-list-title">Pointer les projets émergents</h4>
                <p>
                  54 h pour participer à l’aventure Usine 4.0. Déplacer
                  l’industrie dans ses fondements, l’interroger sur ses process,
                  la rendre plus agile, plus inventive.
                </p>
              </li>
              <li> -->
                <!-- <span class="icon-list-icon fa fa-heart-o" data-animation="bounceIn"></span> -->
                <!-- <span class="icon-list-icon" data-animation="bounceIn"><i class="fa fa-heart" aria-hidden="true"></i></span>
                <h4 class="icon-list-title">Génération Même pas peur</h4>
                <p>
                  54 h pour innover à plusieurs. Un concentré d’énergie créative
                  de tous bords : développeurs, ingénieurs, designers,
                  bricoleurs, utilisateurs, marketeurs…
                </p>
              </li>
              <li> -->
                <!-- <span class="icon-list-icon fa fa-lightbulb-o" data-animation="bounceIn"></span> -->
                <!-- <span class="icon-list-icon" data-animation="bounceIn"><i class="fa fa-lightbulb-o" aria-hidden="true"></i></span>
                <h4 class="icon-list-title">
                  Idées d'aujourd'hui, Entreprises de demain
                </h4>
                <p>
                  54 h pour démultiplier les idées, les faire émerger, les
                  concrétiser et donner naissance à des projets innovants qui se
                  poursuivront, soit par la création de start up, soit au sein
                  d’entreprises existantes.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div> -->
    

<!-- HOW IT WORKS ================================= -->
<!-- Check the visibility of the About zone, if it's visible, show it, else not -->
    <div v-for="zone in zones" :key="zone.id">
      <div v-if="zone.name === 'steps' && zone.visible === true">
        <section class="how-it-works-section section" id="how-it-works">
          <div class="container">

            <!-- <h2 class="section-heading text-center">Comment ça marche</h2> -->
            <h2 class="section-heading text-center">Les étapes du Hackathon</h2>
            <div class="hiw-row row">
              <!-- HOW IT WORKS - ITEM<section class="section section-dark" id="keynotes">

            <div class="section-background">
                <div class="section-background-image parallax" data-stellar-ratio="0.4">
                    <img alt="" src="images/backgrounds/background-keynote-hic.jpg" style="opacity: 0.08;">
                </div>
            </div>
            <div class="container">

                <h2 class="section-heading text-center">Keynotes</h2>
                <p class="col-md-12 text-center">Des keynotes gratuites et <strong>ouvertes au public</strong></p>

                <div class="row">
                    <div class="about-text col-md-3">
                        <h3 style="font-size: 20px; font-weight: bold;">Samedi 12 octobre de 16h30 à 17h30</h3>
                        <img alt="La fabrique du droit face à l'innovation" src="images/contents/keynote-design.jpg"
                            style="width: 100%;" title="La fabrique du droit face à l'innovation"/>

                        <h3>La fabrique du droit face à l'innovation</h3>

                        <div class="lead">
                            <p style="font-size: 18px;">Le droit et les innovations sont encore aujourd’hui présentées comme opposés : les innovations ont besoin d’un environnement avec peu de régulation si nous voulons les voir émerger alors que le
                                droit
                                est censé les limité. Mais que se passerait-il si on commençait à concevoir le droit autrement ? Iris Champagne, chercheuse à l’Université Paris Dauphine propose de répondre à cette question en utilisant les théories de la
                                conception afin de concevoir le droit pour supporter les innovations radicales.</p>
                        </div>
          1 -->
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

        <section class="section" id="planning">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-md-offset-3 closing-buttons" data-animation="tada">
                <a class="btn btn-lg btn-primary" href="planning.pdf" target="_blank">Consulter le planning complet</a>
              </div>
              <!--</div>
                    </div>
                    </section>



                    <section id="closing" class="closing-section section-dark section">

                    <div class="section-background">

                    <div class="section-background-image parallax" data-stellar-ratio="0.4">
                    <img src="images/backgrounds/MakerBot_Replicator_2.jpg" alt="" style="opacity: 0.15;">
                    </div>

                    </div>

                    <div class="container">
                    <div class="row">
                    <div class="col-md-12">
                    <h3 class="closing-shout">L'événement #HICamp 2017 est fini, revivez l'événement à travers les photos prises par nos bénévoles !</h3>

                    <div class="closing-buttons" target="_blank" data-animation="tada"><a href="https://www.facebook.com/media/set/?set=a.1860170557331117.1073741850.114361761912014&type=1&l=735a14f260"class="btn btn-lg btn-primary" target="_blank">Voir les photos</a></div>
                    </div>-->
              <div class="col-md-6">
                <h3 class="closing-shout">
                  Prêt à passer à l'action ? La première étape c'est de vous
                  inscrire !
                </h3>
                <!--<div class="closing-buttons" data-animation="tada">
    <button class="btn btn-default" disabled="disabled">La billetterie ouvre bientôt !</button>
    </div>-->
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
                  <a class="btn btn-lg btn-primary" href="http://hic2019.sparkboard.com/" target="_blank">Voir les défis / Proposer un défi</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- HEADLINE
    ================================= -->
        <section class="headline-section section" id="headline">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="section-heading text-center hidden">Tagline</h2>
                <div class="row">
                  <div class="col-md-12">
                    <!-- <p class="headline-text">
                      A <strong>hackathon</strong> (also known as a hack day,
                      hackfest or codefest) is an event in which computer
                      programmers and others involved in software development and
                      hardware development, including graphic designers, interface
                      designers and project managers, collaborate intensively on
                      software projects. Occasionally, there is a hardware component
                      as well.
                    </p> -->
                    <!--<div class="col-md-12 text-center" style="margin-bottom: 20px;">
    <div id="fb-root"></div><script>(function(d, s, id) {  var js, fjs = d.getElementsByTagName(s)[0];  if (d.getElementById(id)) return;  js = d.createElement(s); js.id = id;  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";  fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));</script><div class="fb-video" data-allowfullscreen="1" data-href="https://www.facebook.com/alsace.digitale/videos/1168785789802934/"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/alsace.digitale/videos/1168785789802934/"><a href="https://www.facebook.com/alsace.digitale/videos/1168785789802934/">Encouragement Gilles Babinet HICamp www.hackingindustry.camp</a><p>#Gift les encouragements de  Gilles Babinet pour le Hacking industry Camp ! On adore.</p>Posted by <a href="https://www.facebook.com/alsace.digitale">Alsace Digitale</a> on Friday, October 2, 2015</blockquote></div></div>
    </div>-->
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
              <!--
    <div class="col-md-3 text-center">
    <a class="twitter-timeline" href="https://twitter.com/hashtag/hicamp" data-widget-id="651805371405848580">#hicamp Tweets</a>
    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
    </div>
    -->
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- VIDEOS
================================= -->
    <!--<section id="videos" class="about-section section-gray section">

<div class="container">

<h2 class="section-heading text-center">Vidéos</h2>

<div class="hero-features row" style="margin-top: 45px;">

<div class="hero-features-left col-md-6">

<div class="video-embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/zVNlhuMTR70" frameborder="0" allowfullscreen></iframe>
</div>

</div>

<div class="hero-features-right col-md-6">

<ul class="icon-list">
<li>
<span class="icon-list-icon fa fa-youtube-play" data-animation="bounceIn"></span>
<h4 class="icon-list-title">Suivez-vous en vidéo !</h4>
<p>Rendez-vous sur <a href="https://www.youtube.com/user/LaPlageDigitale/home" target="_blank">notre chaîne Youtube</a> pour découvrir nos meet up, interviews, challenges et bien d'autres encore.</p>
</li>
<li>
<span class="icon-list-icon fa fa-facebook-square" data-animation="bounceIn"></span>
<h4 class="icon-list-title">Restez informés !</h4>

<p>Pour suivre tous nos évènements n'hésitez pas à suivre <a href="https://www.facebook.com/alsace.digitale/" target="_blank">notre page Facebook</a>.</p>
</li>
</ul>

<div class="hero-buttons col-md-12 text-center">
<a href="planning.pdf" target="_blank" class="btn btn-lg btn-primary" style="margin-top: 20px;">Voir le planning</a>-->
    <!--<a class="btn btn-lg btn-primary" href="https://www.eventbrite.fr/e/billets-hacking-industry-camp-2019-70600870103" style="margin-top: 20px;">J'y vais !</a>-->
    <!--<a href="#winners" class="btn btn-lg btn-primary" style="margin-top: 20px;">Les résultats</a>
<a href="https://www.facebook.com/media/set/?set=a.1860170557331117.1073741850.114361761912014&type=1&l=735a14f260" target="_blank" class="btn btn-lg btn-primary" style="margin-top: 20px;">Les photos</a>-->
    <!--<a href="#about" class="btn btn-lg btn-primary" style="margin-top: 20px;">Découvrir</a>-->
    <!--<button disabled="disabled" class="btn btn-default">La billetterie ouvre bientôt !</button>
</div>

</div>

</div>

</div>-->
    <!--<div class="row">

</div>
</section>-->
    <!-- KEYNOTES -->
    <!-- TEAM ================================= -->
    <!-- Lundi 17/06/2019 en attente de coachs/jury-->

<!-- Check the visibility of the Coaches zone, if it's visible, show it, else not -->
    <div v-for="zone in zones" :key="zone.id">
      <section v-if="zone.name === 'coaches' && zone.visible === true" class="section" id="coachs">
        <div class="container">
          <h2 class="section-heading text-center">Les Coachs</h2>
          <div class="team-row row">
            <!--<div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
                      <div class="team-member">
                          <img alt="Quentin PELTIER" class="team-member-picture"
            src="images/contents/coach/quentin-peltier.jpg">
                          <div class="team-member-text">
                              <h4 class="team-member-name">Quentin PELTIER</h4>
                              <div class="team-member-position">Droit</div>
                          </div>
                      </div>
                  </div>-->
            <CoachJury :coachjury="coach" v-for="coach in shuffle(coaches)" :key="coach.id" />
          </div>
        </div>
      </section>
    </div>
          <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member even">
              <img alt="Jérôme LEHMANN" class="team-member-picture" src="images/contents/coach/jerome-lehmann.jpg" />
              <div class="team-member-text" style="padding-bottom: 12px">
                <h4 class="team-member-name">Jérôme LEHMANN</h4>
                <div class="team-member-position">
                  Marketing | Communication
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member">
              <img alt="Lysiane FREYS" class="team-member-picture" src="images/contents/coach/lysiane-freys.jpg" />
              <div class="team-member-text">
                <h4 class="team-member-name">Lysiane FREYS</h4>
                <div class="team-member-position">Graphisme</div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member even">
              <img alt="Pascal BASTIEN" class="team-member-picture" src="images/contents/coach/pascal-bastien.jpg" />
              <div class="team-member-text" style="padding-bottom: 30px">
                <h4 class="team-member-name">Pascal BASTIEN</h4>
                <div class="team-member-position">
                  Explorateur du futur | Mana Mana
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member">
              <img alt="Tristan CENIER" class="team-member-picture" src="images/contents/coach/tristan-cenier.jpg" />
              <div class="team-member-text">
                <h4 class="team-member-name">Tristan CENIER</h4>
                <div class="team-member-position">Innovation</div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member even">
              <img alt="Aurelie DEVANT" class="team-member-picture" src="images/contents/coach/aurelie-devant.jpg" />
              <div class="team-member-text">
                <h4 class="team-member-name">Aurelie DEVANT</h4>
                <div class="team-member-position">Pitch</div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member">
              <img alt="David BRUCHLEN" class="team-member-picture" src="images/contents/coach/david-bruchlen.jpg" />
              <div class="team-member-text">
                <h4 class="team-member-name">David BRUCHLEN</h4>
                <div class="team-member-position">Pitch</div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member even">
              <img alt="Isabelle BOTZKOWITZ" class="team-member-picture" src="images/contents/coach/isabelle-botzkowitz.jpg" />
              <div class="team-member-text" style="padding-bottom: 30px">
                <h4 class="team-member-name">Isabelle BOTZKOWITZ</h4>
                <div class="team-member-position">
                  Gestion de projet | Alsace Tech
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member">
              <img alt="Guillaume CLAUS" class="team-member-picture" src="images/contents/coach/guillaume-claus.jpg" />
              <div class="team-member-text" style="padding-bottom: 30px">
                <h4 class="team-member-name">Guillaume CLAUS</h4>
                <div class="team-member-position">
                  UX Design | Impact Positif
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member even">
              <img alt="Virginie ATHIAS" class="team-member-picture" src="images/contents/jury/virginie-athias.jpg" />
              <div class="team-member-text">
                <h4 class="team-member-name">Virginie ATHIAS</h4>
                <div class="team-member-position">Business Model</div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member">
              <img alt="Julien BRODIER" class="team-member-picture" src="images/contents/coach/nophoto.png" style="max-height: 315px;" />
              <div class="team-member-text">
                <h4 class="team-member-name">Julien BRODIER</h4>
                <div class="team-member-position">Blockchain</div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member even">
              <img alt="Axel NEVEUX" class="team-member-picture" src="images/contents/coach/axel-neveux.jpg" />
              <div class="team-member-text">
                <h4 class="team-member-name">Axel NEVEUX</h4>
                <div class="team-member-position">
                  Gestion de projet | xFive
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member">
              <img alt="François KORMANN" class="team-member-picture" src="images/contents/jury/francois-kormann.jpg" />
              <div class="team-member-text" style="padding-bottom: 30px">
                <h4 class="team-member-name">François KORMANN</h4>
                <div class="team-member-position">Prototypage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="team-section section" style="padding-top: 0;">
      <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
        <div class="team-member even">
          <img alt="Pasquine CONSTANT" class="team-member-picture" src="images/contents/coach/pasquine-constant.jpg" />
          <div class="team-member-text" style="padding-bottom: 30px">
            <h4 class="team-member-name">Pasquine CONSTANT</h4>
            <div class="team-member-position">Marketing | Project Manager</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
        <div class="team-member">
          <img alt="Matthieu VAILLY" class="team-member-picture" src="images/contents/coach/matthieu-vailly.jpg" />
          <div class="team-member-text">
            <h4 class="team-member-name">Matthieu VAILLY</h4>
            <div class="team-member-position"></div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
        <div class="team-member even">
          <img alt="Frédéric CAMBECEDES" class="team-member-picture" src="images/contents/coach/frederic-cambecedes.jpg" />
          <div class="team-member-text">
            <h4 class="team-member-name" style="white-space: nowrap">
              Frédéric CAMBECEDES
            </h4>
            <div class="team-member-position"></div>
          </div>
        </div>
      </div> -->
      <!--<div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member">
                <img alt="Olivier GROSSE" class="team-member-picture" src="images/contents/coach/olivier-grosse.jpg">
                <div class="team-member-text">
                    <h4 class="team-member-name">Olivier GROSSE</h4>
                    <div class="team-member-position"></div>
                </div>
            </div>
        </div>-->
      <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
        <div class="team-member">
          <img alt="Alexis MARTIN" class="team-member-picture" src="images/contents/coach/alexis-martin.jpg" />
          <div class="team-member-text">
            <h4 class="team-member-name">Alexis MARTIN</h4>
            <div class="team-member-position"></div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
        <div class="team-member even">
          <img alt="Arnaud PHILIBERT" class="team-member-picture" src="images/contents/coach/arnaud-philibert.jpg" />
          <div class="team-member-text">
            <h4 class="team-member-name">Arnaud PHILIBERT</h4>
            <div class="team-member-position"></div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
        <div class="team-member">
          <img alt="Niels KOLMER" class="team-member-picture" src="images/contents/coach/niels-kolmer.jpg" />
          <div class="team-member-text">
            <h4 class="team-member-name">Niels KOLMER</h4>
            <div class="team-member-position">Business Model</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
        <div class="team-member">
          <img alt="Widad ZAGHLOUL" class="team-member-picture" src="images/contents/coach/widad-zaghloul.jpg" />
          <div class="team-member-text">
            <h4 class="team-member-name">Widad ZAGHLOUL</h4>
            <div class="team-member-position"></div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
        <div class="team-member">
          <img alt="Jonathan HURTER" class="team-member-picture" src="images/contents/coach/jonathan-hurter.jpg" />
          <div class="team-member-text">
            <h4 class="team-member-name">Jonathan HURTER</h4>
            <div class="team-member-position">Scalingo</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
        <div class="team-member">
          <img alt="Eric NIAKISSA" class="team-member-picture" src="images/contents/coach/eric-niakissa.jpg" />
          <div class="team-member-text">
            <h4 class="team-member-name">Eric NIAKISSA</h4>
            <div class="team-member-position"></div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
        <div class="team-member">
          <img alt="Gilles NOEPPEL" class="team-member-picture" src="images/contents/coach/gilles-noeppel.jpg" />
          <div class="team-member-text">
            <h4 class="team-member-name">Gilles NOEPPEL</h4>
            <div class="team-member-position"></div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
        <div class="team-member">
          <img alt="Frédéric SOULIER" class="team-member-picture" src="images/contents/coach/nophoto.png" />
          <div class="team-member-text">
            <h4 class="team-member-name">Frédéric SOULIER</h4>
            <div class="team-member-position"></div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
        <div class="team-member">
          <img alt="Thomas AMSTOUTZ" class="team-member-picture" src="images/contents/coach/thomas-amstoutz.jpg" />
          <div class="team-member-text">
            <h4 class="team-member-name">Thomas AMSTOUTZ</h4>
            <div class="team-member-position"></div>
          </div>
        </div>
      </div> -->
        
    <!--
    <section class="team-section section" style="padding-top: 0;">

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member even">
    <img class="team-member-picture" src="images/contents/coach/aurelie-devant.jpg" alt="Aurelie DEVANT">
    <div class="team-member-text">
    <h4 class="team-member-name">Aurelie DEVANT</h4>
    <div class="team-member-position">Marketing</div>
    </div>
    </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/thomas-guillier.jpg" alt="Thomas GUILLIER">
    <div class="team-member-text">
    <h4 class="team-member-name">Thomas GUILLIER</h4>
    <div class="team-member-position">Coach technique | Sogeti</div>
    </div>
    </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member even">
    <img class="team-member-picture" src="images/contents/coach/jonathan-hurter.jpg" alt="Jonathan HURTER">
    <div class="team-member-text">
    <h4 class="team-member-name">Jonathan HURTER</h4>
    <div class="team-member-position">Coach technique | Scalingo</div>
    </div>
    </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/yannick-jost.jpg" alt="Yannick Jost">
    <div class="team-member-text">
    <h4 class="team-member-name">Yannick JOST</h4>
    <div class="team-member-position">Objets connectés | Strataggem</div>
    </div>
    </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member even">
    <img class="team-member-picture" src="images/contents/coach/yann-klis.jpg" alt="Yann KLIS">
    <div class="team-member-text">
    <h4 class="team-member-name">Yann KLIS</h4>
    <div class="team-member-position">Coach technique | Scalingo</div>
    </div>
    </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/alexis-martin.jpg" alt="Alexis MARTIN">
    <div class="team-member-text">
    <h4 class="team-member-name">Alexis MARTIN</h4>
    <div class="team-member-position">Propriété Industrielle | INPI</div>
    </div>
    </div>
    </div>
    -->
    <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member even">
    <img class="team-member-picture" src="images/contents/coach/franck-hoonakker.jpg" alt="Franck HOONAKKER">
    <div class="team-member-text">
    <h4 class="team-member-name">Franck HOONAKKER</h4>
    <div class="team-member-position">Croissanceo</div>
    </div>
    </div>
    </div> -->
    <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/arnaud-laprevote.jpg" alt="Arnaud LAPRÉVOTE">
    <div class="team-member-text">
    <h4 class="team-member-name">Arnaud LAPRÉVOTE</h4>
    <div class="team-member-position">Développement de projet </div>
    </div>
    </div>
    </div> -->
    <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/nophoto.png" alt="Fabrice LIEGEY">
    <div class="team-member-text">
    <h4 class="team-member-name">Fabrice LIEGEY</h4>
    <div class="team-member-position">Lean et innovation</div>
    </div>
    </div>
    </div> -->
    <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/nophoto.png" alt="Johann MICHEL">
    <div class="team-member-text">
    <h4 class="team-member-name">Johann MICHEL</h4>
    <div class="team-member-position">Mécatronique, innovation</div>
    </div>
    </div>
    </div>	 -->
    <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member even">
    <img class="team-member-picture" src="images/contents/coach/frederic-mossmann.jpg" alt="Frédéric MOSSMANN">
    <div class="team-member-text">
    <h4 class="team-member-name">Frédéric MOSSMANN</h4>
    <div class="team-member-position">Coach développement et électronique</div>
    </div>
    </div>
    </div> -->
    <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/antoine-parmentier.jpg" alt="Antoine PARMENTIER">
    <div class="team-member-text">
    <h4 class="team-member-name">Antoine PARMENTIER</h4>
    <div class="team-member-position">Business Developpement / Marketing</div>
    </div>
    </div>
    </div> -->
    <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/cyril-rayot.jpg" alt="Cyril RAYOT">

    <div class="team-member-text">
    <h4 class="team-member-name">Cyril RAYOT</h4>
    <div class="team-member-position">Coach technique, ITS Future</div>
    </div>
    </div>
    </div> -->
    <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member even">
    <img class="team-member-picture" src="images/contents/coach/florence-remy.jpg" alt="Florence REMY">
    <div class="team-member-text">
    <h4 class="team-member-name">Florence REMY</h4>
    <div class="team-member-position">Marketing</div>
    </div>
    </div>
    </div> -->
    <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member even">
    <img class="team-member-picture" src="images/contents/coach/bestien-stella.jpg" alt="Bastien STELLA">
    <div class="team-member-text">
    <h4 class="team-member-name">Bastien STELLA</h4>
    <div class="team-member-position">Expert comptable</div>
    </div>
    </div>
    </div> -->
    <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/pascal-thisse.jpg" alt="Pascal THISSE">
    <div class="team-member-text">
    <h4 class="team-member-name">Pascal THISSE</h4>
    <div class="team-member-position">Data privacy</div>
    </div>
    </div>
    </div> -->
    <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/alban-petit.jpg" alt="Alban PETIT">
    <div class="team-member-text">
    <h4 class="team-member-name">Alban PETIT</h4>
    <div class="team-member-position">CCI</div>
    </div>
    </div>
    </div> -->
    <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/aude-plassard.jpg" alt="Aude PLASSARD">
    <div class="team-member-text">
    <h4 class="team-member-name">Aude PLASSARD</h4>
    <div class="team-member-position">Créativité</div>
    </div>
    </div>
    </div> -->
    <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member even">
    <img class="team-member-picture" src="images/contents/coach/celine-poloce-winter.jpg" alt="Céline POLOCE-WINTER">
    <div class="team-member-text">
    <h4 class="team-member-name">Céline POLOCE-WINTER</h4>
    <div class="team-member-position">Ingénieur télécom</div>
    </div>
    </div>
    </div> -->
    <!-- Lundi 17/06/2019 en attente de coachs/jury
    </section>-->
    <!--   <section class="team-section section" style="padding-top: 0;">

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/horacio-miranda.jpg" alt="Horacio MIRANDA DE OLIVEIRA">
    <div class="team-member-text">
    <h4 class="team-member-name">Horacio MIRANDA DE OLIVEIRA</h4>
    <div class="team-member-position">Gestion de projet | Kreavizio</div>
    </div>
    </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/florian-petit.jpg" alt="Florian PETIT">

    <div class="team-member-text">
    <h4 class="team-member-name">Florian PETIT</h4>
    <div class="team-member-position">Coach technique | ITS Future</div>
    </div>
    </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member even">
    <img class="team-member-picture" src="images/contents/coach/arnaud-philibert.jpg" alt="Arnaud PHILIBERT">
    <div class="team-member-text">
    <h4 class="team-member-name">Arnaud PHILIBERT</h4>
    <div class="team-member-position">Gestion de projet</div>
    </div>
    </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/benoit-potty.jpg" alt="Benoît POTTY">
    <div class="team-member-text">
    <h4 class="team-member-name">Benoît POTTY</h4>
    <div class="team-member-position">Expert, Conseil, Formation | Capcod</div>
    </div>
    </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member even">
    <img class="team-member-picture" src="images/contents/coach/joel-roessner.jpg" alt="Joel ROESSNER">
    <div class="team-member-text">
    <h4 class="team-member-name">Joel ROESSNER</h4>
    <div class="team-member-position">Objets connectés | Strataggem</div>
    </div>
    </div>
    </div>
    </section>-->
    <!--
    <section class="team-section section" style="padding-top: 0;">

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member even">
    <img class="team-member-picture" src="images/contents/coach/philippe-roser.jpg" alt="Philippe ROSER">

    <div class="team-member-text">
    <h4 class="team-member-name">Philippe ROSER</h4>
    <div class="team-member-position">UX Design | Impact Positif</div>
    </div>
    </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/eddie-soulier.jpg" alt="Eddie SOULIER">
    <div class="team-member-text">
    <h4 class="team-member-name">Eddie SOULIER</h4>
    <div class="team-member-position">Innovation | UTT Troyes</div>
    </div>
    </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member even">
    <img class="team-member-picture" src="images/contents/coach/leo-unbekandt.jpg" alt="Léo UNBEKANDT">
    <div class="team-member-text">
    <h4 class="team-member-name">Léo UNBEKANDT</h4>
    <div class="team-member-position">Coach technique | Scalingo</div>
    </div>
    </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/teddy-wilhelm.jpg" alt="Teddy WILHELM">

    <div class="team-member-text">
    <h4 class="team-member-name">Teddy WILHELM</h4>
    <div class="team-member-position">UX Design | Impact Positif</div>
    </div>
    </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member even">
    <img class="team-member-picture" src="images/contents/coach/djeinaba-yall.jpg" alt="Djeinaba YALL">
    <div class="team-member-text">
    <h4 class="team-member-name">Djeinaba YALL</h4>
    <div class="team-member-position">Innovation | UTT Troyes</div>
    </div>
    </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member even">
    <img class="team-member-picture" src="images/contents/coach/manuel-yguel.jpg" alt="Manuel YGUEL">
    <div class="team-member-text">
    <h4 class="team-member-name">Manuel YGUEL</h4>
    <div class="team-member-position">Objets connectés | Strataggem</div>
    </div>
    </div>
    </div>
    </section>

    <section class="team-section section" style="padding-top: 0;">
    <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
    <div class="team-member">
    <img class="team-member-picture" src="images/contents/coach/widad-zaghloul.jpg" alt="Widad ZAGHLOUL">
    <div class="team-member-text">
    <h4 class="team-member-name">Widad ZAGHLOUL</h4>
    <div class="team-member-position">Fablab INSA</div>
    </div>
    </div>
    </div>
    </section>
    -->
<!-- Check the visibility of the Juries zone, if it's visible, show it, else not -->
    <div v-for="zone in zones" :key="zone.id">
      <section v-if="zone.name === 'juries' && zone.visible === true" class="section" id="jury">
        <div class="container">
          <h2 class="section-heading text-center">Le Jury</h2>

          <div class="team-row row">
  <!-- *-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* -->
            <!-- <Jury :jury="jury" v-for="jury in shuffle(juries)" :key="jury.id" /> -->
            <CoachJury :coachjury="jury" v-for="jury in shuffle(juries)" :key="jury.id" />
            <!-- <Coach :coach="jury" v-for="jury in shuffle(juries)" :key="jury.id" /> -->
          </div>
        </div>
      </section>
    </div>
          <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member">
              <img alt="Michel HUSSHER" class="team-member-picture" src="images/contents/jury/michel-hussherr.jpg" />
              <div class="team-member-text" style="padding-bottom: 30px">
                <h4 class="team-member-name">Michel HUSSHERR</h4>
                <div class="team-member-position"></div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member even">
              <img alt="Pascal WESPISER" class="team-member-picture" src="images/contents/jury/pascal-wespiser.jpg" />
              <div class="team-member-text">
                <h4 class="team-member-name">Pascal WESPISER</h4>
                <div class="team-member-position"></div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member">
              <img alt="Daniel WAGNER" class="team-member-picture" src="images/contents/jury/daniel-wagner.jpg" />
              <div class="team-member-text">
                <h4 class="team-member-name">Daniel WAGNER</h4>
                <div class="team-member-position"></div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member even">
              <img alt="Yann LEDU" class="team-member-picture" src="images/contents/coach/nophoto.png" />
              <div class="team-member-text">
                <h4 class="team-member-name">Yann LEDU</h4>
                <div class="team-member-position"></div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member">
              <img alt="Anne-Marie JEAN" class="team-member-picture" src="images/contents/jury/anne-marie-jean.jpg" />
              <div class="team-member-text">
                <h4 class="team-member-name">Anne-Marie JEAN</h4>
                <div class="team-member-position"></div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member even">
              <img alt="Nathalie GARTISER" class="team-member-picture" src="images/contents/coach/nophoto.png" style="max-height: 320px" />
              <div class="team-member-text">
                <h4 class="team-member-name">Nathalie GARTISER</h4>
                <div class="team-member-position"></div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member">
              <img alt="Muriel HUBER" class="team-member-picture" src="images/contents/jury/muriel-huber.jpg" style="max-height: 320px" />
              <div class="team-member-text">
                <h4 class="team-member-name">Muriel HUBER</h4>
                <div class="team-member-position"></div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member even">
              <img alt="Lina TREMISI" class="team-member-picture" src="images/contents/jury/lina-tremisi.jpg" />
              <div class="team-member-text">
                <h4 class="team-member-name">Lina TREMISI</h4>
                <div class="team-member-position"></div>
              </div>
            </div>
          </div> -->
       
    <!-- PRICES -->
    <!--
    <section id="prizes" class="section section-dark">

    <div class="section-background">
    <div class="section-background-image parallax" data-stellar-ratio="0.4">
    <img src="images/backgrounds/background-pitch.jpg" alt="" style="opacity: 0.08;">
    </div>
    </div>

    <div class="container">

    <h2 class="section-heading text-center">Prix</h2>

    <p class="col-md-12 text-center">Le jury décernera les différents prix des sponsors à la fin de l'événement, cette cérémonie est ouverte au public</strong></p>

    <div class="row">
    <div class="about-text col-md-6">
    <div class="row">
    <div class="col-xs-3" style="text-align: right; font-size: 60px;"><i class="fa fa-trophy"></i></div>
    <div class="col-xs-9">
    <h3>Prix ÉS</h3>
    <p>12 séances d’1h30 réparties sur 6 mois avec des experts d’ÉS</p>
    </div>
    </div>
    <div class="row">
    <div class="col-xs-3" style="text-align: right; font-size: 60px;"><i class="fa fa-trophy"></i></div>
    <div class="col-xs-9">
    <h3>Prix STRATAGGEM</h3>
    <p>Accès à la passerelle IoT LoRa et 150€ de crédits sur la plateforme IoT Wavebricks</p>
    </div>
    </div>
    <div class="row">
    <div class="col-xs-3" style="text-align: right; font-size: 60px;"><i class="fa fa-trophy"></i></div>
    <div class="col-xs-9">
    <h3>Prix LA FABRIQUE</h3>
    <p>Les lauréats La Fabrique du Hacking Industry Camp recevront un abonnement à La Fabrique dont ils pourront disposer pour réaliser les versions futures de leurs prototypes. La Fabrique ouvrira ses portes et sa communauté de makers à l'équipe gagnante pour les accompagner tant sur les aspects conception que réalisation.</p>
    </div>
    </div>
    <div class="row">
    <div class="col-xs-3" style="text-align: right; font-size: 60px;"><i class="fa fa-trophy"></i></div>
    <div class="col-xs-9">
    <h3>Prix MANA MANA</h3>
    <p>- 3 équipes bénéficieront d’un accompagnement de nos coachs. Pour faire avancer vos projets radicaux, vous aurez besoin d’apprendre à créer une vision partagée d’équipe, à co-créer avec vos parties prenantes, à développer la motivation entre vous, à apprendre de vos erreurs !<br>- Chez Mana Mana, certains de nos clients sont de grands industriels de l’agrobusiness, du rail, de l’énergie. Nous vous proposons d’aller tester vos idées, vos prototypes à leur contact et d’apprendre.<br>- Mana Mana vous propose 3 mois d’accompagnement à raison de deux sessions d’une demi journée par mois.</p>
    </div>
    </div>
    <div class="row">
    <div class="col-xs-3" style="text-align: right; font-size: 60px;"><i class="fa fa-trophy"></i></div>
    <div class="col-xs-9">
    <h3>Prix BLOCKCHAIN VALLEY</h3>
    <p></p>-->
    <!-- enlever prices suites -->
    <!--
    </div>
    </div>
    </div>
    <div class="about-text col-md-6">
    <div class="row">
    <div class="col-xs-3" style="text-align: right; font-size: 60px;"><i class="fa fa-trophy"></i></div>
    <div class="col-xs-9">
    <h3>Prix ALSACE DIGITALE</h3>
    <p>Les lauréats Alsace Digitale auront accès à l’espace Flex pendant 6 mois pour tous les membres de l’équipe, ainsi qu’un accès gratuit au Startup Weekend Strasbourg du 23 au 25 novembre.</p>
    </div>
    </div>
    <div class="row">
    <div class="col-xs-3" style="text-align: right; font-size: 60px;"><i class="fa fa-trophy"></i></div>
    <div class="col-xs-9">
    <h3>Prix ITS FUTURE + AGORA CALYCE</h3>
    <p>Mise à disposition de la plateforme Cloud IoT Agora gratuitement pour 10 devices pendant 1 an et accompagnement d'Agora Calycé + 2 demi-journées d'accompagnement par un expert ITS Future dans les projets IoT</p>
    </div>
    </div>
    <div class="row">
    <div class="col-xs-3" style="text-align: right; font-size: 60px;"><i class="fa fa-trophy"></i></div>
    <div class="col-xs-9">
    <h3>Prix THURMELEC</h3>
    <p>Coaching et accès à la chaîne de prototypage</p>
    </div>
    </div>
    <div class="row">
    <div class="col-xs-3" style="text-align: right; font-size: 60px;"><i class="fa fa-trophy"></i></div>
    <div class="col-xs-9">
    <h3>Prix WILD CODE SCHOOL</h3>
    <p>Le développement du projet dans le cadre de nos projets-clients</p>
    </div>
    </div>
    <div class="row">
    <div class="col-xs-3" style="text-align: right; font-size: 60px;"><i class="fa fa-trophy"></i></div>
    <div class="col-xs-9">
    <h3>Prix ORANGE</h3>
    </div>
    </div>
    <div class="row">
    <div class="col-xs-3" style="text-align: right; font-size: 60px;"><i class="fa fa-trophy"></i></div>
    <div class="col-xs-9">
    <h3>Prix SCALINGO</h3>
    <p> La société Scalingo, service cloud d'hébergement web, propose deux prix. Pour le premier, 1000€ de crédits utilisables sur la plateforme, et pour les deuxième et troisième 500€ de crédits utilisables sur la plateforme.</p>
    </div>
    </div>
    <div class="row">
    <div class="col-xs-3" style="text-align: right; font-size: 60px;"><i class="fa fa-trophy"></i></div>
    <div class="col-xs-9">
    <h3>Prix GRAND E-NOV + SEMIA</h3>
    <p>Adhésion Alsace Innovation<br> 1/2 journée de diagnostique innovation</p>
    </div>
    </div>
    </div>

    </div>

    <h2 class="section-heading text-center" style="margin-top: 70px;"><i class="fa fa-smile-o"></i> Prix FUN - Nouveauté HIC 2019</h2>

    <p class="col-md-8 col-md-offset-2 text-center">En plus des prix d'accompagnements et de mises à disposition de ressources, nous avons avec le soutien de nos partenaires souhaité proposer des récompenses un peu différentes...<br>
    <ul class="col-md-8 col-md-offset-2" style="padding-left: 110px;">
    <li>Sopra Steria : Adhesion et accès au Fablab de la Fabrique pour 5 séances</li>
    <li>ES : Billets « Allez Racing » pour assister à un match de Ligue 1 du RCS</li><li>Technologie et Stratégie :  Instaxmini de Fujifilm bleu clairs ou imprimante photo</li>
    <li>RS Components : 10 Raspberry Pi</li>
    <li>Orange : Casque VR</li>
    <li>Sogeti : 6 assistants vocaux Google Home</li>
    </ul>
    </div>

    </section> -->

<!-- List of winners -->
<!-- Check the visibility of the Results zone, if it's visible, show it, else not -->
    <div v-for="zone in zones" :key="zone.id">
      <section v-if="zone.name === 'results' && zone.visible === true" id="winners" class="section">
        <div class="container">
          <h2 class="section-heading text-center">Les résultats</h2>

          <p class="col-md-12 text-center">
            Pas moins de 12 prototypes de projets sont sortis de cette édition
            2020, et 9 d'entre eux ont été primés
          </p>

          <ul class="col-md-8 col-md-offset-2" style="padding-left: 50px; list-style: none; text-align: left">
            <li v-for="result in results" :key="result.id">
              <i class="fa fa-trophy"></i> {{ result.classement }} : 
              <a :href="result.link" target="_blank">{{ result.title }}</a>
            </li>
          </ul>
        </div>
      </section>
    </div>

        <!-- <ul class="col-md-8 col-md-offset-2" style="padding-left: 50px;">
          <li>
            <i class="fa fa-trophy"></i> Premier prix :
            <a href="https://hic2019.sparkboard.com/project/5d5174bccb58c30024e55f8b" target="_blank">
              #4 - "SOS Environnement"</a>
          </li>
          <li>
            <i class="fa fa-trophy"></i> Deuxième prix :
            <a href="https://hic2019.sparkboard.com/project/5d970c495413670024060e1a" target="_blank">#26 - "Réduire les retards des trains"</a>
          </li>
          <li>
            <i class="fa fa-trophy"></i> Troisième prix :
            <a href="https://hic2019.sparkboard.com/project/5d77682c53126300243fc9f9  " target="_blank">#6 - "Inside Renov"</a>
          </li>
          <li>
            <i class="fa fa-trophy"></i> Mention meilleure innovation :
            <a href="https://hic2019.sparkboard.com/project/5d795fac8d9dc500248f84ee" target="_blank">#10 - "LIoT Secure"</a>
          </li>
          <li>
            <i class="fa fa-trophy"></i> Mention meilleure solution service :
            <a href="https://hic2019.sparkboard.com/project/5d7a0ed5aff6130024622d27" target="_blank">#12 - "Gymnase Intelligent 4.0"</a>
          </li>
          <li>
            <i class="fa fa-trophy"></i> Mention meilleure proposition IOT :
            <a href="https://hic2019.sparkboard.com/project/5d80d6615ad10f0024d36109" target="_blank">
              #16 - "GreatAir"</a>
          </li>
          <li>
            <i class="fa fa-trophy"></i> Mention meilleure solution Tech4good :
            <a href="https://hic2019.sparkboard.com/project/5d9f9fd96369610024c403fe" target="_blank">#31 - "Compost-IT"</a>
          </li>
          <li>
            <i class="fa fa-trophy"></i> Mention meilleur pitch :
            <a href="https://hic2019.sparkboard.com/project/5d959879e711020024ccc800" target="_blank">#25 - "Okazoo"</a>
          </li>
          <li>
            <i class="fa fa-trophy"></i> Mention surprise :
            <a href="https://hic2019.sparkboard.com/project/5d444fe75063e80024d7056a" target="_blank">#3 - "Visu Van"</a>
          </li>
        </ul> -->
      
<!-- SPONSORS
================================= -->
<!-- Check the visibility of the Partners zone, if it's visible, show it, else not -->
    <div v-for="zone in zones" :key="zone.id">
      <section v-if="zone.name === 'partners' && zone.visible === true" class="section-dark section" id="sponsors" style="padding-bottom: 30px; padding-top: 30px;">
        <!--<div class="section-background">

      <div class="section-background-image parallax" data-stellar-ratio="0.4">
      <img alt src="images/backgrounds/arduino.jpg" style="opacity: 0.20;">
      </div>

      </div>-->
        <div class="container">
          <h2 class="section-heading text-center hidden">
            Partenaires et sponsors
          </h2>

          <PartnerCategory :partnerCategory="partnerCategory" v-for="partnerCategory in partnerCategories" :key="partnerCategory.id" />
        
        </div>
      </section>
    </div>

        <!-- <div class="sponsors-row" data-animation="bounceIn">
          <p style="font-size: 17px;">
            Dans le cadre de son soutien au Hacking Industry Camp, ÉS est partie
            prenante de l'organisation de l'évènement.
          </p>
          <br />
          <a href="http://www.es-groupe.fr/" target="_blank"><img alt="ES" src="images/contents/logo ES2.jpg" /></a>
        </div>
        <div class="sponsors-row" data-animation="bounceIn">
          <h3 style="font-size: 17px;">Gold Sponsors</h3>
          <br />
          <a href="http://www.socomec.fr/Accueil_fr.html" target="_blank"><img alt="Socomec France" src="images/contents/socomec.png" /></a> -->

          <!--<a href="http://www.strasbourg.port.fr/" target="_blank"><img src="../images/contents/pas.png" alt="Port Autonome de Strasbourg"></a>-->
          <!-- <a href="http://strasbourg.eu/" target="_blank"><img alt="Strasbourg.eu" src="images/contents/banner-stras.png" /></a>
        </div>
        <div class="sponsors-row" data-animation="bounceIn">
          <h3 style="font-size: 17px;">Silver Sponsors</h3>
          <br /> -->
          <!--<a href="http://www.caisse-epargne.fr/" target="_blank"><img alt="Caisse d'Epargne Alsace" src="images/contents/caisse-epargne.jpg"></a>-->
          <!--<a href="http://www.hagergroup.com/" target="_blank"><img alt="Hager"
                                                                          src="images/contents/hager-group.png"></a>-->
          <!-- <a href="http://www.rhenatic.eu/" target="_blank"><img alt="Rhénatic" src="images/contents/rhenatic.png" style="width: 180px;" /></a>

          <a href="http://www.strataggem.com/" style="background: white; padding: 8px;" target="_blank"><img alt="Strataggem" src="images/contents/strataggem.png" /></a>

          <a href="http://www.insa-strasbourg.fr/" target="_blank"><img alt="INSA Strasbourg" src="images/contents/insa.png" /></a>

          <a href="https://www.orange.fr/" target="_blank"><img alt="orange" src="images/contents/orange.png" /></a>

          <a href="http://www.cushabitat.fr/" target="_blank"><img alt="Ophéa" height="300" src="images/contents/ophea.jpg" width="300" /></a>

          <a href="https://its-future.com/" target="_blank"><img alt="its future" src="images/contents/its.png" /></a> -->

          <!--<a href="http://www.alsacechampagneardennelorraine.eu/" target="_blank"><img src="images/contents/regiongrandest.png" alt="Région Grand Est"></a>
    <a href="https://www.interregeurope.eu/" target="_blank"><img src="images/contents/interreg.jpg" alt="Interreg Europe"></a>-->
        <!-- </div>
        <div class="sponsors-row" data-animation="bounceIn">
          <h3 style="font-size: 17px;">Bronze Sponsors</h3>
          <br />
          <a href="http://scalingo.com" target="_blank"><img alt="Scalingo" src="images/contents/scalingo.svg" width="220" /></a>

          <a href="http://www.agoracalyce.com/" target="_blank"><img alt="Agora Calycé" src="images/contents/agora.png" /></a>

          <a href="https://www.thurmelec.fr/" target="_blank"><img alt="thurmelec" src="images/contents/thurmelec.jpg" /></a>

          <a href="https://fr.rs-online.com/web/" target="_blank"><img alt="rs" src="images/contents/rs.png" /></a>

          <a href="http://technologyandstrategy.group/" target="_blank"><img alt="ts" src="images/contents/ts.jpg" /></a>

          <a href="https://www.soprasteria.com/" target="_blank"><img alt="sopra steria" src="images/contents/sopra.jpg" /></a>

          <a href="https://www.fr.sogeti.com/" target="_blank"><img alt="sogeti" src="images/contents/sogeti.jpg" /></a>
        </div>
        <div class="sponsors-row" data-animation="bounceIn">
          <h3 style="font-size: 17px;">
            Ces entreprises / associations / institutions soutiennent
            l'événement
          </h3>
          <br />
          <a href="http://www.alsacetech.org/" target="_blank"><img alt="Alsace Tech" src="images/contents/alsacetech.jpg" style="width: 220px;" /></a>

          <a href="http://www.creaccro.eu/" target="_blank"><img alt="Accro" src="images/contents/accro.jpg" /></a>

          <a href="http://alsace.com/" target="_blank"><img alt="Agence Attractivité Alsace" src="images/contents/aaa.jpg" /></a>

          <a href="http://lafab.org" target="_blank"><img alt="La Fabrique" src="images/contents/lafabrique.jpg" /></a>

          <a href="http://www.lafrenchtech-alsace.eu/" target="_blank"><img alt="La French Tech Alsace" src="images/contents/fta2.png" style="height: 150px;" /></a>

          <a href="http://alsace.cci.fr/" target="_blank"><img alt="CCI Alsace" src="images/contents/ccialsace.jpg" /></a>

          <a href="http://adira.com/" target="_blank"><img alt="Adira" src="images/contents/adira.png" /></a>

          <a href="https://www.grandenov.fr/" target="_blank"><img alt="Grand E-nov" src="images/contents/grandenov.png" style="background: white;" /></a>

          <a href="http://maddyness.com/" target="_blank"><img alt="Maddyness" src="images/contents/maddyness.jpg" /></a>

          <a href="http://www.xfive.be/" target="_blank"><img alt="XFive" src="images/contents/xfive.jpg" /></a> -->

          <!--<a href="http://cpc-analytics.fr" target="_blank"><img alt="Cpc Analytics"
                                                                       src="images/contents/cpc-analytics.jpg"></a>-->
          <!-- <a href="http://duipi.unistra.fr/" target="_blank"><img alt="IPI" src="images/contents/ipi.png" /></a> -->

          <!--<a href="http://innovationweek.org/france/" target="_blank"><img src="images/contents/innoweek.png" alt="Innoweek"></a>-->
          <!-- <a href="http://marque.alsace/" target="_blank"><img alt="Marque Alsace" src="images/contents/acoeur.png" /></a>

          <a href="http://www.strasbourgaimesesetudiants.eu/" target="_blank"><img alt="Strasbourg aime ses étudiants" src="images/contents/strasbourg-etudiants.png" /></a> -->

          <!--<a href="http://alsacalcul.unistra.fr/" target="_blank"><img alt="Alsa Calcul"
                                                                             src="images/contents/alsacalcul.jpg"></a>-->
          <!-- <a href="http://www.conectus.fr/" target="_blank"><img alt="satt connectus" src="images/contents/satt.png" style="background: white; height: 90px; padding: 5px;" /></a> -->

          <!--<a href="https://www.federation-industries-alsace.com/" target="_blank"><img style="background: white; height: 90px; padding: 5px;" src="images/contents/fia.png" alt="fia"></a>
    <a href="http://prglobalmedia.com/" target="_blank" style="background: white; padding: 0 5px;"><img src="images/contents/prglobalmedia.png" alt="PR Global Media"></a>-->
          <!-- <a href="http://http://epitech.eu/" target="_blank"><img alt="Epitech" src="images/contents/epitech.png" style="background: white; height: 90px; padding: 5px;" /></a>

          <a href="http://www.reck.fr/" target="_blank"><img alt="Cafés Reck" src="images/contents/cafe-reck.jpg" /></a>

          <a href="https://sciencemeup.com/" target="_blank"><img alt="Science Me Up" src="images/contents/sciencemeup.png" /></a>

          <a href="https://www.eifer.kit.edu/" target="_blank"><img alt="Eifer" src="images/contents/eifer.png" style="background: #fff" /></a>

          <a href="https://www.edf.fr/" target="_blank"><img alt="EDF" src="images/contents/edf.png" /></a>
          <a href="http://capcod.eu/" target="_blank"><img alt="Capcod" src="images/contents/capcod.png" style="height: 75px;" /></a>

          <a href="http://blockchain-valley.io/" target="_blank"><img alt="Blockchain Valley" src="images/contents/blockchain-valley.png" /></a>

          <a href="https://upperrhine40.eu/" target="_blank"><img alt="UpperRhine4.0" src="images/contents/upper-rhine40.jpg" /></a>

          <a href="https://www.impact-positif.fr/" target="_blank"><img alt="Impact positif" src="images/contents/logo-square.jpg" width="160" /></a>

          <a href="https://www.strasbourgaimesesetudiants.eu/" target="_blank"><img alt="Strasbourg aime ses étudiants" src="images/contents/strasetudiants.png" width="300" /></a>
          <a href="http://www.espacealpin.fr/" target="_blank"><img alt="Interreg Alpine Space" src="images/contents/interregspace.jpg" width="300" /></a> -->
          <!-- devient partenaire Lundi 17/06/2019 -->
          <!-- <a href="https://upperrhine40.eu/" target="_blank"><img alt="" src="images/contents/interreg2018.jpg" /><br /></a> -->
          <!-- inclus dans upper rhine-->
        <!-- </div> -->
        <!--<div class="sponsors-row" data-animation="bounceIn">
    <h3 style="font-size: 17px;"></h3><br>
    <div class="row">
    <p>Intéressés pour devenir sponsor ?</p>

    <a target="_blank" href="https://drive.google.com/open?id=0B0S2y3rk51DNRnJrRGNRV1h1OUU" class="btn btn-primary">Présentation HIC</a> &nbsp; <a target="_blank" href="https://drive.google.com/open?id=0B0S2y3rk51DNQnJuZldfaFdHMlU" class="btn btn-primary">Devenir sponsor</a>
    </div>
    </div>-->
      
<!-- FAQ
================================= -->
<!-- Check the visibility of the Questions zone, if it's visible, show it, else not -->
    <div v-for="zone in zones" :key="zone.id">
      <section v-if="zone.name === 'questions' && zone.visible === true" class="faq-section section" id="faq">
        <div class="container">
          <h2 class="section-heading text-center">Foire aux questions</h2>
          <div class="faq-row row">
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
    </div>
          <!-- 
            <div class="faq-item-text">
                L'événement est ouvert à tous. Quel que soient votre profil ou
                vos compétences, vous pouvez prendre part au challenge en
                équipe. Que vous soyez développeurs, designers, entrepreneurs,
                ingénieurs ou utilisateurs. Tous les superpouvoirs sont
                bienvenus.
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="faq-item">
              <span class="faq-item-icon fa fa-question-circle"></span>
              <h4 class="faq-item-heading">
                Quel état d'avancement du projet ?
              </h4>
              <div class="faq-item-text">
                Vous pouvez développer un projet from scratch cad développer un
                projet existant maximun au stade de concept.
              </div>
            </div>
          </div>
        </div>
        <div class="faq-row row">
          <div class="col-md-6">
            <div class="faq-item">
              <span class="faq-item-icon fa fa-question-circle"></span>
              <h4 class="faq-item-heading">
                Comment trouver mes co-équipiers ?
              </h4>
              <div class="faq-item-text">
                Une équipe peut contenir de 6 à 10 membres. Vous pouvez venir au
                hackathon avec une équipe déjà formée (partiellement ou
                complètement) ou bien venir seul pour trouver des coéquipiers
                sur place.
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="faq-item">
              <span class="faq-item-icon fa fa-question-circle"></span>
              <h4 class="faq-item-heading">Les défis</h4>
              <div class="faq-item-text">
                Pour participer vous pouvez soit proposer un défi, soit choisir
                un défi posté par un autre participant et integrer l'équipe.
              </div>
            </div>
          </div>
        </div>
        <div class="faq-row row">
          <div class="col-md-6">
            <div class="faq-item">
              <span class="faq-item-icon fa fa-question-circle"></span>
              <h4 class="faq-item-heading">Quel matériel ?</h4>
              <div class="faq-item-text">
                Chacun ramène son PC et si possible une multiprise.
                <br />
                <br /> -->
                <!--<strong>Nos partenaires mettent à disposition un kit technique</strong> : <br> - l'INSA permet l'accès à son FabLab.<br>- La startup Strataggem propose l'accès à la plateforme LoRa Wavebricks, a du matériel électronique pour réaliser des objets connectés et du coaching durant le week-end.<br>- ITS Future et AGORA CALYCE mettent à disposition la plateforme cloud IoT Agora.<br> - Scalingo vous permettra d'héberger vos applications web !-->
              <!-- </div>
            </div>
            <div class="faq-item">
              <span class="faq-item-icon fa fa-question-circle"></span>
              <h4 class="faq-item-heading">
                Dimanche j'ai foot. Je peux participer ?
              </h4>
              <div class="faq-item-text">
                Si vous devez vous absenter un moment : aquaponey, dentiste,
                repas avec la belle-mère, pas de soucis ! Il suffit que vous en
                informiez votre équipe et que vous vous organisiez
                collectivement. -->
                <!--<strong>Nos partenaires mettent à disposition un kit technique</strong> : <br> - l'INSA permet l'accès à son FabLab.<br>- La startup Strataggem propose l'accès à la plateforme LoRa Wavebricks, a du matériel électronique pour réaliser des objets connectés et du coaching durant le week-end.<br>- ITS Future et AGORA CALYCE mettent à disposition la plateforme cloud IoT Agora.<br> - Scalingo vous permettra d'héberger vos applications web !-->
              <!-- </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="faq-item">
              <span class="faq-item-icon fa fa-question-circle"></span>
              <h4 class="faq-item-heading">Organisation</h4>
              <div class="faq-item-text">
                Vous devrez règler vos repas pour confirmer votre participation.
                Vous pouvez dormir sur place. N'hésitez pas à ramener votre
                matelas et votre bonnet de nuit.
              </div>
            </div>
            <div class="faq-item">
              <span class="faq-item-icon fa fa-question-circle"></span>
              <h4 class="faq-item-heading">
                Le hashtag et les réseaux sociaux
              </h4>
              <div class="faq-item-text">
                Faites du bruit autour de l'événement en utilisant le hashtag
                #HICamp et en mentionnant @AlsaceDigitale et @ES_Strasbourg
              </div>
            </div>
          </div> -->
        
    <!-- CONTACT + MAPS
    ================================= -->
    <section class="contact-maps-section section" id="contact-maps">
      <div class="section-background">
        <!-- MAPS BACKGROUND -->
        <div class="section-background-maps" style="background-image: url('images/contents/map.jpg')"></div>
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
    </section>
    <!-- FOOTER
    ================================= -->
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
        <div class="footer-socmed">
          <a href="http://facebook.com/alsace.digitale" target="_blank"><span class="fa fa-facebook"></span></a>
          <a href="https://twitter.com/AlsaceDigitale" target="_blank"><span class="fa fa-twitter"></span></a>
        </div>
        <div class="footer-copyright">
          &copy; 2019
          <a href="http://www.alsacedigitale.org/" target="_blank" title="Alsace Digitale">Alsace Digitale</a>
          •
          <strong>Précédentes éditions :</strong>
          <a href="http://2015.hackingindustry.camp/" target="_blank">2015</a> -
          <a href="http://2016.hackingindustry.camp/" target="_blank">2016</a> -
          <a href="http://2017.hackingindustry.camp/" target="_blank">2017</a> -
          <a href="http://2018.hackingindustry.camp/" target="_blank">2018</a>
        </div>
      </div>
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
    PartnerCategory
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
      zones: [
        {
          name: "zone"
        }
      ]
      // keysteps: [
      //   {
      //     title: "titre",
      //     description: "description"
      //   }
      // ]
    };
  },
  mounted: function () {
    console.log(api.getApiRoot());
    console.log(api.getProcessEnv());
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
    api.getZones().then(resp => {
      this.zones = resp.data;
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
    }
  }
};
</script>

<style scoped>
  .height {
    height: 25vh;
  }
  @media screen and (max-width: 992px) {
    .height {
      height: auto;
  }
  }
</style>
