<template>
  <hooper
    :centerMode="true"
    :autoPlay="true"
    :playSpeed="4000"
    :infiniteScroll="true"
  >
    <slide v-for="(announce, indx) in announces" :key="indx" :index="indx">
      <div v-if="announce.enabled">
        <div v-if="announce.thumbnail !== null" style="position: relative">
          <img :alt="announce.title" :src="thumbUrl(announce)" width="100%" />
          <h3 class="title">{{ announce.title }}</h3>
        </div>
        <div v-else>
          <h3 class="titleWithoutImg">{{ announce.title }}</h3>
        </div>

        <!-- <img :alt="announce.title" :src="thumbUrl(announce)" :title="announce.title" width="100%"/> -->
        <!-- <h3 v-if="announce.title" class="title" style="margin-bottom: 0;line-height: 1.3em">{{ announce.title }}</h3> -->

        <!-- <div style="position: relative">
                <div v-if="announce.subTitle" class="subTitle" style="margin-bottom: 5px">{{ announce.subTitle }}</div>
                
                <div v-if="announce.startDate" class="subTitle" style="margin-bottom: 14px">
                    {{ announce.startDate | frStartTimeFormat | capitalize }} {{ announce.endDate | endTimeFormat }}
                </div>
                
                <a v-if="announce.link" class="btn btn-primary buttonSize" :href="announce.link" target="_blank">J'y vais !</a>
                

                <div v-if="announce.thumbnail != ''" class="imgPosition" style="position: absolute">
                    <img :alt="announce.title" :src="thumbUrl(announce)" :title="announce.title" width="25%"/>
                </div>
            </div> -->
      </div>
      <!-- <div>
            <a class="btn btn-primary buttonSize" :href="announce.link" target="_blank">J'y vais !</a>
        </div> -->

      <!-- <div v-else>
            {{ hooper.slideNext() }}
        </div> -->
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination
} from "hooper";
import "hooper/dist/hooper.css";
import api from "@/services/api.js";

export default {
  name: "Announce",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  },
  props: {
    announces: Array
  },
  methods: {
    thumbUrl: function(announce) {
      if (announce.thumbnail != null) {
        return api.getMediaRoot() + announce.thumbnail.url;
      }
    }
  }
};
</script>

<style scoped>
.title {
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
.titleWithoutImg {
  margin-top: 70px;
}

@media screen and (max-width: 576px) {
  .title {
    font-size: 1.2em;
    top: 30%;
  }
  .titleWithoutImg {
    font-size: 1.2em;
    margin-top: 57px;
  }
}
/* @media screen and (min-width: 768px) {
        .title {
            height: 70px;
        }
        .imgPosition {
            left:-35%; 
            top: 0%;
        }
        .subTitle {
            text-align: left; 
            margin-left: 270px;
        }
    }
    @media screen and (min-width: 992px) {
        .imgPosition {
            left:-34%; 
            top: 0%;
        }
        .subTitle {
            text-align: center; 
            margin-left: 0;
        }      
    }
    @media screen and (min-width: 1200px) {
        .imgPosition {
            left:-27%; 
            top: 0%;
        }
        .subTitle {
            text-align: center; 
            margin-left: 0;
        }      
    } */
</style>
