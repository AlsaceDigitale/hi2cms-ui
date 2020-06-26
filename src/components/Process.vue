<template>
<!-- if the steps number <= 4 use the normal form -->
    <div v-if="countSteps()" class="row">
        <div v-for="process in processes" :key="process.id" class="col-md-3 col-sm-4">
            <a :href="'#' + process.title">
                <!-- Show the image of the event -->
                <div style="position: relative">
                    <img :alt="process.title" :src="thumbUrl(process)" :title="process.title" width="100%"/>
                    <div class="center">{{ process.duration }}</div>
                </div>
                <!-- The title -->
                <h4 style="font-weight: bold; margin-bottom: 5px">{{ process.title }}</h4>
                <!-- Link to more info -->
                <div class="description">
                    {{ process.description }}
                </div>
            </a>
        </div>   
    </div>

<!-- else, use the Hooper carousel for show the more steps in same lign & show the arrow for the next steps -->
    <div v-else>
        <hooper :settings="hooperSettings" style="height: auto">
            <slide  v-for="(process, indx) in processes" :key="indx" :index="indx">
                <a :href="'#' + process.title">
                    <div style="position: relative">
                        <img :alt="process.title" :src="thumbUrl(process)" :title="process.title" width="95%"/>
                        <div class="center">{{ process.duration }}</div>
                    </div>
                    <!-- The title -->
                    <h4 style="font-weight: bold; margin-bottom: 5px">{{ process.title }}</h4>
                    <!-- Link for more info -->
                    <div class="description">
                        {{ process.description }}
                    </div>
                </a>
            </slide>

            <hooper-navigation slot="hooper-addons" class="hooper-next hooper-prev"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
    </div>
    
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
import api from '@/services/api.js';

export default {
    name: "Process",
    data: function () {
        return {
            hooperSettings: {
                // infiniteScroll: true,
                // centerMode: true,
                // autoPlay: true,
                // playSpeed: 3500,
                breakpoints: {
                    // 2400: { // 2400px ~
                    //     itemsToShow: 5
                    // },
                    // 1800: { // 1800px ~ 2400px
                    //     itemsToShow: 4
                    // },
                    // 1500: { // 1500px ~ 1800px
                    //     itemsToShow: 3
                    // },
                    // 1200: { // 1100px ~ 1500px
                    //     itemsToShow: 4
                    // },
                    992: { // > 992px 
                        itemsToShow: 4
                    },
                    768: { // 768px ~ 991px
                        itemsToShow: 3
                    },
                    0: {
                        itemsToShow: 1
                    }
                }
            }
        }
    },
    components: {
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination
    },
    props: {
        processes: Array
    },
    methods: {
        thumbUrl: function (process) {
            if (process.image != null) {
                return api.getMediaRoot() + process.image.url;
            }
        },
        countSteps: function () {
            if (this.processes.length <= 4) {
                return true;
            }
        }
    }
}
</script>

<style scoped>
    .description {
        color: #555555;
        margin: 0 5px;
    }
    .description:hover {
        color: #222222;
    }
    .center {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10vw;
        background-color: #F7A611;
        font-weight: bold;
        color: #222222;
        width: auto;
        padding: 0 5px;
    }
    .hooper-next {
        right: -4%;
        top: 60%;
    }
    .hooper-prev {
        left: -4%;
        top: 60%;
    }
    .hooper-pagination {
        bottom: -9%;
    }
</style>