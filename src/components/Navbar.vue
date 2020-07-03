<template>
    <header class="header-section section section-dark navbar navbar-fixed-top" id="header" style="background: rgba(0,0,0,0.8); z-index: 1010">
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
            <!-- <li v-if="checkMaskableBlock('process')"><a href="#process">Process</a></li>
            <li v-if="checkMaskableBlock('process')"><a href="#Hackathon">Hackathon</a></li>
            <li v-if="checkMaskableBlock('keynote')"><a href="#keynotes">Keynotes</a></li>
            <li><a href="#planning">Planning</a></li>
            <li><a href="#winners">Résultats</a></li>
            <li v-if="checkMaskableBlock('partner')"><a href="#sponsors">Partenaires</a></li>
            <li v-if="checkMaskableBlock('question')"><a href="#faq">FAQ</a></li> -->
            <li><a href="#process">Process</a></li>
            <li><a href="#Hackathon">Hackathon</a></li>
            <li><a href="#keynotes">Keynotes</a></li>
            <li><a href="#planning">Planning</a></li>
            <li><a href="#winners">Résultats</a></li>
            <li><a href="#sponsors">Partenaires</a></li>
            <li><a href="#faq">FAQ</a></li>
            <!-- HEADER ACTION BUTTON -->
            <li class="header-action-button">
                <a class="btn btn-danger" href="https://702421b7.sibforms.com/serve/MUIEANLOWfsvFG5gr0BWwHFpNFThKBSLjDs6sOxCjuolXRQ1nQpsFXEO78_kW5mISoM52VelpLr68WFAP_cg5sy5tVUx5LMTzKfFw5FCU3gRFN1j9vgLuUS-fxIytNbtc7x9QucVx_EjxYmyRIFlx5R1uDn1lBEH4j4cHF7pAdnQdvdGj_Cl3PLDsnQumLOUP-S7WRPoG1mhZAhK" 
                    target="_blank">Suivre
                </a>
            </li>
            <li class="header-action-button">
              <a class="btn btn-primary" href="https://hic2021.sparkboard.com/" target="_blank">Les défis</a>
            </li>
            <li>
              <a aria-expanded="false" class="dropdown-toggle external language-choice" data-toggle="dropdown" href="#" role="button"><i class="fas fa-globe-europe iconSize" style="font-size: 20px; vertical-align: -2px;"></i>&nbsp; FR <span class="caret"></span></a>
            <!-- Icon of the languages -->
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
    
</template>

<script>
export default {
    name: "Navbar",
    props: {
        maskableblocks: Array
    },
    methods: {
        getVisibleBlocks : function() {
            let zone = this.maskableblocks.filter(element => element.visible === true);
            console.log(zone);


            // if (zone !== undefined) {
            //     if(zone.visible === true) {
            //         return true;
            //     } else {
            //         return false;
            //     }
            // }  
        }
    }
    //     checkMaskableBlock : function (itemName) {
    //         this.maskableblocks.forEach(function(element) {
    //             if (element.name === itemName && element.visible === true) {
    //                 console.log("item name is " + itemName);
    //                 console.log(element);
    //                 return true;
    //             } else {
    //                 return false;
    //             }
    //             // else if(element.name === itemName && element.visible === false) {
    //             //      console.log("element undefined");
    //             //     //  console.log("item name is " + itemName);
    //             //     //  console.log(element);
    //             //     return false;
    //             // }
    //         });
    //     }
    // }
}
</script>

<style scoped>
    .header-section.floating .navbar-nav .language-choice {
        padding-top: 0;
    }

    @media screen and (max-width: 991px) 
    {
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

