<template>
<div class="about-text col-md-4 col-sm-6">

    <div style="border-top: solid 1px; margin-bottom: 20px">

    </div>
<!-- ____ if the time of the Keystep was passed, make the image gray ____ -->
    <div v-if="timeDifference(keystep.startTime)">
        <!-- The image, date & language -->
        <div style="position: relative">
            <!-- Show the image of the event -->
            <img class="imageGray" :alt="keystep.title" :src="thumbUrl(keystep)" :title="keystep.title" width="100%" />
            <!-- Show the date & the hours of the event -->
            <div class="dateGray">
                {{ keystep.startTime | frStartTimeFormat1 | capitalize }}<br/>
                <span style="float: right">{{ keystep.startTime | frStartTimeFormat2 }}</span> 
            </div>
        </div>

        <!-- The title  -->
        <div class="text-left title">
            <h4 style="line-height: 1.3em; color: #bbbbbb">{{ keystep.title }}</h4>
        </div> 

        <!-- Button of the description, when clicked, showing the event in modal -->
        <button type="button" class="btn btn-primary buttonSize" style="color: white; background-color: #777777" data-toggle="modal" :data-target="'#' + keystep.id">Description</button>

        <!-- Link to the event on a site correspond -->
        <div style="margin: 10px; margin-bottom: 20px">
            <a class="btn btn-primary buttonSize" style="color: white; background-color: #777777">J'y vais !</a>
        </div>
    </div>
<!-- _____ else, show the normal format _____ -->
    <div v-else>
        <div style="position: relative">
            <!-- Show the image of the event -->
            <img :alt="keystep.title" :src="thumbUrl(keystep)" :title="keystep.title" width="100%" />
            <!-- Show the date & the hours of the event -->
            <div class="date">
                {{ keystep.startTime | frStartTimeFormat1 | capitalize }}<br/>
                <span style="float: right">{{ keystep.startTime | frStartTimeFormat2 }}</span> 
            </div>
        </div>

        <!-- The title  -->
        <div class="text-left title">
            <h4 style="line-height: 1.3em">{{ keystep.title }}</h4>
        </div> 

        <!-- Button of the description, when clicked, showing the event in modal -->
        <button type="button" class="btn btn-primary buttonSize" data-toggle="modal" :data-target="'#' + keystep.id">Description</button>

        <!-- Link to the event on a site correspond -->
        <div style="margin: 10px; margin-bottom: 20px">
            <a class="btn btn-primary buttonSize" :href="keystep.link" target="_blank">J'y vais !</a>
        </div>
    </div>

<!-- ***** Show the Modal when user clicked the buttons of the description **** *** ** * -->
    <div class="modal fade" :id="keystep.id" tabindex="-1" role="dialog" aria-labelledby="keystepModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
               
                <div class="modal-header">
                    <h4 class="modal-title" id="keystepModalLongTitle" style="color: #222222">{{ keystep.title }}</h4>
                    <button class="close" data-dismiss="modal" aria-label="Close" style="margin-top: -22px; color: red">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
               
                <div class="modal-body" style="color: #222222">
                    <div>
                        <img :alt="keystep.title" :src="thumbUrl(keystep)" :title="keystep.title" width="100%"/>
                    </div>
                   
                    <div style="color: #222222; text-align: left; font-weight: bold; padding-left: 5px">
                        Date : {{ keystep.startTime | frStartTimeFormat | capitalize }} {{ keystep.endTime | endTimeFormat }}
                    </div>
                    <div class="description">
                        {{ keystep.description }}
                    </div>
                    <div v-if="timeDifference(keystep.startTime)">
                        <a class="btn btn-primary buttonSize" style="color: white; background-color: #777777">J'y vais !</a>
                    </div>
                    <div v-else>
                        <a class="btn btn-primary buttonSize" :href="keystep.link" target="_blank">J'y vais !</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import api from '@/services/api.js';
import moment from "moment";

export default {
    name: "KeyStep",
    props: {
        keystep: Object
    },
    methods: {
        thumbUrl: function (keystep) {
            return api.getMediaRoot() + keystep.thumbnail.url;
        },
        timeDifference: function(date) {
            const diff = moment().diff(date, 'hours');
            if (diff > 0) {
                return true;
            } else {
                return false;
            }  
        }
    }
}
</script>

<style scoped>
    .date {
        position: absolute; 
        bottom: -16px; 
        right: 0px;
        color: #222222;
        background-color: #F7A611;
        line-height: 1.2;
        font-size: 0.8em;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 3px;
        padding-bottom: 3px;
        font-weight: bold;
    }
    .title {
        margin-top: 20px; 
        height: 5em; 
        padding-left: 5px;
        padding-right: 5px;
    }
    .buttonSize {
        padding-top: 4px;
        padding-bottom: 4px;
    }
    .imageGray {
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
    }
    .dateGray {
        position: absolute; 
        bottom: -16px; 
        right: 0px;
        color: #bbbbbb;
        background-color: #444444;
        line-height: 1.2;
        font-size: 0.8em;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 3px;
        padding-bottom: 3px;
        font-weight: bold;
    }
    /* .description {
        color: #555555;
    }
    .description:hover {
        color: #222222;
    }
    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8vw;
        background-color: rgba(6, 6, 6, 0.6);
        font-weight: bold;
        color: #dddddd;
    } */
</style>