<template>
  <hooper class="hooperAnnounce" :centerMode="true" :autoPlay="true" :playSpeed="4000" :infiniteScroll="true">
    <slide  v-for="(announce, indx) in announces" :key="indx" :index="indx">
        <div v-if="announce.enabled">
            <div style="position: relative">
                <img :alt="announce.title" :src="thumbUrl(announce)" :title="announce.title">
                <!-- <div class="card-body"> -->
                    <h4 class="title">{{ announce.title }}</h4>
                <!-- </div> -->
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
import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
import api from '@/services/api.js';

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
        thumbUrl: function (announce) {
            if (announce.thumbnail != null) {
                return api.getMediaRoot() + announce.thumbnail.url;
            }
        },
        // slideNext() {
        // this.$refs.carousel.slideNext();
        // }
    }
}
</script>

<style scoped>
    .title {
        position:absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        line-height: 1.3em; 
        color: #dddddd !important;
        background-color: rgb(10,10,10,0.8); 
        padding: 10px;
        width: fit-content;
        height: auto;
    }
    .buttonSize {
        padding-top: 4px;
        padding-bottom: 4px;
    }
    /* .hooperAnnounce {
        height: 30vh;
    } */
    @media screen and (max-width: 767px) {
        .title {
            font-size: 1em;
            top: 42%;
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