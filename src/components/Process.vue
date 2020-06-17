<template>
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
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
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
        processes: Object
    },
    methods: {
        thumbUrl: function (process) {
            return api.getMediaRoot() + process.image[0].url;
        }
    }
}
</script>

<style>

</style>