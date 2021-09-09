<template>
  <header
    class="header-section section section-dark navbar navbar-fixed-top"
    id="header"
    style="background: rgba(0,0,0,0.8); z-index: 1010"
  >
    <div class="container-fluid">
      <div class="navbar-header navbar-left">
        <!-- RESPONSIVE MENU BUTTON -->
        <button
          class="navbar-toggle"
          data-target="#navigation"
          data-toggle="collapse"
          type="button"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- HEADER LOGO -->
        <a class="navbar-logo navbar-brand anchor-link" href="#hero">
          <img
            alt="logo alsace digitale"
            src="images/logos/Logo_HIC_White.png"
          />
        </a>
      </div>
      <nav
        class="navigation navbar-collapse collapse navbar-right"
        id="navigation"
      >
        <!-- NAVIGATION LINKS -->
        <ul class="nav navbar-nav" id="header-nav">
          <li v-if="process"><a href="#process">Process</a></li>
          <li v-if="process"><a href="#Hackathon">Hackathon</a></li>
          <li v-if="keynote"><a href="#keynotes">Keynotes</a></li>
          <li v-if="planning"><a href="#planning">Planning</a></li>
          <li v-if="result"><a href="#winners">Résultats</a></li>
          <li v-if="specialzone"><a href="#specialZone">Chaire IA</a></li>
          <li v-if="partner"><a href="#sponsors">Partenaires</a></li>
          <li v-if="question"><a href="#faq">FAQ</a></li>
          <!-- HEADER ACTION BUTTON -->
          <li class="header-action-button">
            <a
              class="btn btn-danger btn"
              href="https://702421b7.sibforms.com/serve/MUIEANLOWfsvFG5gr0BWwHFpNFThKBSLjDs6sOxCjuolXRQ1nQpsFXEO78_kW5mISoM52VelpLr68WFAP_cg5sy5tVUx5LMTzKfFw5FCU3gRFN1j9vgLuUS-fxIytNbtc7x9QucVx_EjxYmyRIFlx5R1uDn1lBEH4j4cHF7pAdnQdvdGj_Cl3PLDsnQumLOUP-S7WRPoG1mhZAhK"
              target="_blank"
              >Suivre
            </a>
          </li>
          <li class="header-action-button">
            <a
              class="btn btn-primary"
              href=""
              target="_blank"
              >Les défis</a
            >
          </li>

          <!-- ****************************************************************** -->
          <!-- Comment this item until preparing the pages for English and Germany -->
          <!-- <li>
            <a
              aria-expanded="false"
              class="dropdown-toggle external language-choice"
              data-toggle="dropdown"
              href="#"
              role="button"
              ><i
                class="fas fa-globe-europe iconSize"
                style="font-size: 20px; vertical-align: -2px;"
              ></i
              >&nbsp; FR <span class="caret"></span
            ></a> -->
            <!-- Icon of the languages -->
            <!-- <ul class="dropdown-menu dropdown-language" role="menu">
              <li>
                <a href="/en/">EN</a>
              </li>
              <li>
                <a href="/de/">DE</a>
              </li>
            </ul>
          </li> -->
          <!-- ****************************************************************** -->

        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    process: Boolean,
    keynote: Boolean,
    planning: Boolean,
    result: Boolean,
    partner: Boolean,
    question: Boolean,
    specialzone: Boolean
  }
};
</script>

<style scoped>

.btn:hover, .btn:focus {
  background-color: #d9534f;
}

.header-section.floating .navbar-nav .language-choice {
  padding-top: 0;
}

@media screen and (max-width: 991px) {
  .navbar-logo img {
    height: 31px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1122px) {
  .navbar-logo img {
    height: 31px;
  }
  .navbar-nav > li {
    padding: 30px 9px;
    font-size: 11px;
  }
  .navbar-nav > li.header-action-button {
    margin-top: -5px;
    margin-right: 7px;
  }
  .navbar-nav > li.header-action-button > a {
    padding: 5px 7px;
    font-size: 10px;
  }
  .iconSize {
    font-size: 17px;
    vertical-align: -2px;
  }
  .navbar-nav > li > .dropdown-menu {
    margin-top: -5px;
    margin-right: -15px;
  }
  .header-section.floating .navbar-nav > li.header-action-button {
    padding-top: 20px;
  }
}
@media screen and (min-width: 1123px) and (max-width: 1308px) {
  .navbar-logo img {
    height: 31px;
  }
  .navbar-nav > li {
    padding: 30px 11px;
    font-size: 13px;
  }
  .navbar-nav > li.header-action-button {
    margin-top: -5px;
  }
  .navbar-nav > li.header-action-button > a {
    padding: 5px 9px;
    font-size: 10px;
  }
  .iconSize {
    font-size: 17px;
    vertical-align: -2px;
  }
  .navbar-nav > li > .dropdown-menu {
    margin-top: -5px;
    margin-right: -10px;
  }
  .header-section.floating .navbar-nav > li.header-action-button {
    padding-top: 20px;
  }
}
</style>
