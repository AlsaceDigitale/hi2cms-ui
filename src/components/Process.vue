<template>
<!-- if the steps number <= 4 use the normal form -->
    <div v-if="countSteps()" class="row">
        <div v-for="process in processes" :key="process.id" class="col-md-3">
            <!-- Show the image of the event -->
            <div style="position: relative">
                <img :alt="process.title" :src="thumbUrl(process)" :title="process.title" width="100%"/>
                <div class="center">{{ process.duration }}</div>
            </div>
            <!-- The title -->
            <h4 style="font-weight: bold; margin-bottom: 5px">{{ process.title }}</h4>
            <!-- Link to more info -->
            <div>
                <a class="description" :href="'#' + process.title" >{{ process.description }}</a>
            </div>
        </div>   
    </div>






<!-- else, use the Hooper carousel for show the more steps in same lign & show the arrow for the next steps -->
    <div v-else>
        <hooper :itemsToShow="4">
            <slide  v-for="(process, indx) in processes" :key="indx" :index="indx">
                <div class="card" >
                    <img class="card-img-top" width="500px" :src="thumbUrl(process)" :alt="process.title" />
                    <div class="card-body">
                        <h5 class="card-title small" >{{ process.title }}</h5>
                        <p class="card-text small" >{{ process.description }}</p>
                        <p>{{ process.duration }}</p>
                    </div>
                </div>
            </slide>
            <div></div>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
    </div>
    
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';
import api from '@/services/api.js';

export default {
    name: "Process",
    components: {
        Hooper,
        Slide,
        // HooperNavigation,
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
    }
</style>