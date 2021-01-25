<template>
  <div v-if="keynote.visible" class="about-text col-md-4 col-sm-6">
    <!-- *** French version **--------------------* -->
    <!-- <div v-if="english == false"> -->
    <div style="border-top: solid 1px; margin-bottom: 20px"></div>

    <!-- ____ if only the video & the title is set ____ -->
    <div v-if="keynote.conferenceLink && keynote.title && !keynote.startTime && !keynote.endTime && !keynote.thumbnail">
      <!-- Show the video from Youtube -->
      <div class="video-embed" style="margin-top: 0">
        <iframe 
          width="560" 
          height="315" 
          :src="keynote.conferenceLink" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
      <!-- The title -->
      <div class="text-left title">
        <h4 style="line-height: 1.3em">
          {{ keynote.title }}
        </h4>
      </div>
      <div style="margin-bottom: 60px"></div>
    </div>

    <!-- ____ else, showing the normal format of keynote ou keystep ____ -->
    <div v-else>
      <!-- ____ if the time of the Keynote was passed, make the image gray ____ -->
      <div v-if="timeDifference(keynote.startTime)">
        <!-- The image, date & language -->
        <div style="position: relative">
          <!-- Show the image of the event -->
          <img
            class="imageGray"
            :alt="keynote.title"
            :src="thumbUrl(keynote)"
            :title="keynote.title"
            width="100%"
          />
          <!-- Verify if the keynote is in english or in german, if yes, show the flag correspond -->
          <div class="flag">
            <div
              v-if="keynote.keynoteInEnglish"
              class="small"
              style="color: #bbbbbb"
            >
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/gb.svg"
                width="14px"
                class="imageGray"
                style="padding-bottom: 3px"
              />
              En Anglais
            </div>
            <div
              v-if="keynote.keynoteInGerman"
              class="small"
              style="color: #bbbbbb"
            >
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/de.svg"
                width="14px"
                class="imageGray"
                style="padding-bottom: 3px"
              />
              En Allemand
            </div>
          </div>
          <!-- Show the date & the hours of the event -->
          <div v-if="keynote.startTime !== null" class="dateGray">
            {{ keynote.startTime | frStartTimeFormat1 | capitalize }}<br />
            <span style="float: right">{{
              keynote.startTime | frStartTimeFormat2
            }}</span>
          </div>
          <!-- if set, show the link of the conference of passed event -->
          <div v-if="keynote.conferenceLink" class="centered">
            <a class="btn btn-warning buttonSize buttonColor" :href="keynote.conferenceLink" target="_blank">Revoir</a>
          </div>
        </div>
        
        <!-- The title & the speakers name -->
        <div class="text-left title">
          <h4 style="line-height: 1.3em; color: #bbbbbb">
            {{ keynote.title }}<br /><span
              ><em class="small">{{ keynote.speaker }}</em></span
            >
          </h4>
        </div>

        <!-- Button of the description, when clicked, showing the event in modal -->
        <button
          type="button"
          class="btn btn-primary buttonSize"
          data-toggle="modal"
          :data-target="'#' + keynote.id"
        >
          Description
        </button>

        <!-- Button of the link to the event site -->
        <div style="margin: 10px; margin-bottom: 20px">
          <a
            class="btn btn-secondary buttonSize"
            style="color: white; background-color: #777777"
            >Evènement passé</a
          >
        </div>
      </div>

      <!-- _____ else, show the normal format _____ -->
      <div v-else>
        <div style="position: relative">
          <!-- Show the image of the event -->
          <img
            :alt="keynote.title"
            :src="thumbUrl(keynote)"
            :title="keynote.title"
            width="100%"
          />
          <!-- Verify if the keynote is in english or in german, if yes, show the flag correspond -->
          <div class="flag">
            <div
              v-if="keynote.keynoteInEnglish"
              class="small"
              style="color: white"
            >
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/gb.svg"
                width="14px"
                style="padding-bottom: 3px"
              />
              En Anglais
            </div>
            <div
              v-if="keynote.keynoteInGerman"
              class="small"
              style="color: white"
            >
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/de.svg"
                width="14px"
                style="padding-bottom: 3px"
              />
              En Allemand
            </div>
          </div>
          <!-- Show the date & the hours of the event -->
          <div v-if="keynote.startTime !== null" class="date">
            {{ keynote.startTime | frStartTimeFormat1 | capitalize }}<br />
            <span style="float: right">{{
              keynote.startTime | frStartTimeFormat2
            }}</span>
          </div>
        </div>

        <!-- The title & the speakers name -->
        <div class="text-left title">
          <h4 style="line-height: 1.3em">
            {{ keynote.title }}<br /><span
              ><em class="small">{{ keynote.speaker }}</em></span
            >
          </h4>
        </div>

        <!-- Button of the description, when clicked, showing the event in modal -->
        <button
          type="button"
          class="btn btn-primary buttonSize"
          data-toggle="modal"
          :data-target="'#' + keynote.id"
        >
          Description
        </button>

        <!-- Button of the link to the event site -->
        <div v-if="keynote.ticketsUrl" style="margin: 10px; margin-bottom: 20px">
          <a
            class="btn btn-primary buttonSize"
            :href="keynote.ticketsUrl"
            target="_blank"
            >J'y vais !</a
          >
        </div>
        <!-- Button of the link to the event site -->
        <div v-else-if="keynote.link" style="margin: 10px; margin-bottom: 20px">
          <a
            class="btn btn-primary buttonSize"
            :href="keynote.link"
            target="_blank"
            >J'y vais !</a
          >
        </div>
      </div>

      <!-- ***** Show the Modal when user has clicked the buttons of the description **** *** ** * -->
      <div
        class="modal fade"
        :id="keynote.id"
        tabindex="-1"
        role="dialog"
        aria-labelledby="keynoteModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <!-- The header -->
            <div class="modal-header">
              <h4
                class="modal-title"
                id="keynoteModalLongTitle"
                style="color: #222222"
              >
                {{ keynote.title }}
              </h4>
              <button
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                style="margin-top: -22px; color: red"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <!-- The body -->
            <div class="modal-body" style="color: #222222">
              <div>
                <img
                  :alt="keynote.title"
                  :src="thumbUrl(keynote)"
                  :title="keynote.title"
                  width="100%"
                />
              </div>
              <!-- The names of the speaker -->
              <div v-if="keynote.speaker" style="text-align: left; padding: 5px">
                <em class="small">Interlocuteur : {{ keynote.speaker }}</em>
              </div>
              <!-- Show the date & the hours of the event -->
              <div v-if="keynote.startTime !== null"
                style="color: #222222; text-align: left; font-weight: bold; padding-left: 5px"
              >
                Date : {{ keynote.startTime | frStartTimeFormat | capitalize }}
                {{ keynote.endTime | endTimeFormat }}
              </div>
              <div class="description">
                {{ keynote.description }}
              </div>
              <!-- Verify if the keynote is in english or in german, if yes, show the flag correspond -->
              <div
                style="color: #222222; text-align: left; font-weight: bold; padding-left: 5px"
              >
                <div v-if="keynote.keynoteInEnglish">
                  Keynote :
                  <img
                    src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/gb.svg"
                    width="14px"
                    style="padding-bottom: 3px"
                  />
                  En Anglais
                </div>
                <div v-if="keynote.keynoteInGerman">
                  Keynote :
                  <img
                    src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/de.svg"
                    width="14px"
                    style="padding-bottom: 3px"
                  />
                  En Allemand
                </div>
              </div>
              <div v-if="timeDifference(keynote.startTime)">
                <a
                  class="btn btn-primary buttonSize"
                  style="color: white; background-color: #777777"
                  >Evènement passé</a
                >
              </div>
              <div v-else>
                <div v-if="keynote.ticketsUrl">
                  <a
                    class="btn btn-primary buttonSize"
                    :href="keynote.ticketsUrl"
                    target="_blank"
                    >J'y vais !</a
                  >
                </div>
                <div v-else-if="keynote.link">
                  <a
                    class="btn btn-primary buttonSize"
                    :href="keynote.link"
                    target="_blank"
                    >J'y vais !</a
                  >
                </div>
              </div>
            </div>
            <!-- The footer -->
            <!-- <div class="modal-footer">
              <button type="button" class="btn btn-danger buttonSize" data-dismiss="modal">X</button>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- <hr style="margin-bottom: 20px"> -->
    <!-- </div> -->
    <!-- *** English version **--------------------* -->
    <!-- <div v-else-if="english"> -->
    <!-- Show the date, the start & end times & the duration in minutes of the event -->
    <!-- <h3 style="font-size: 20px; font-weight: bold;">
        {{ keynote.startTime | enStartTimeFormat | capitalize }} {{ keynote.endTime | endTimeFormat }}
        ({{ timeDiffrence(keynote.startTime, keynote.endTime) }} minutes)
      </h3>  -->
    <!-- Show the image of the event -->
    <!-- <img :alt="keynote.en_title" :src="thumbUrl(keynote)" style="width: 100%;" :title="keynote.en_title" /> -->
    <!-- The title -->
    <!-- <h3>{{ keynote.en_title }}</h3> -->
    <!-- The description -->
    <!-- <div class="lead text-left">
        <p style="font-size: 18px;">{{ keynote.en_description }}</p>
      </div> -->
    <!-- The button for showing the content of the event in french with fr flag -->
    <!-- <a class="btn btn-primary" @click="english = false"><img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/fr.svg" width="12px" alt=""> fr</a> -->
    <!-- Button & link to directing to the principle page of the event -->
    <!-- <a class="btn btn-primary" style="margin: 20px" :href="keynote.ticketsUrl" target="_blank">I'm going!</a> -->

    <!-- </div> -->
  </div>
</template>

<script>
import api from "@/services/api.js";
import moment from "moment";

export default {
  name: "Keynote",
  data: function() {
    return {
      // english: false,
      // show: false
    };
  },
  props: {
    keynote: Object
  },
  methods: {
    thumbUrl: function(keynote) {
      if (keynote.thumbnail != null) {
        return api.getMediaRoot() + keynote.thumbnail.url;
      }
    },
    timeDifference: function(date) {
      // const eventTime = moment(date);
      const diff = moment().diff(date, "hours");
      if (diff > 0) {
        return true;
      } else {
        return false;
      }

      //   let startHours = parseInt(moment(startTime).format("H"), 10);
      //   let startMinutes = parseInt(moment(startTime).format("m"), 10);
      //   let startTotalMin = startHours * 60 + startMinutes;

      //   let endHours = parseInt(moment(endTime).format("H"), 10);
      //   let endMinutes = parseInt(moment(endTime).format("m"), 10);
      //   let endTotalMin = endHours * 60 + endMinutes;

      //   return endTotalMin - startTotalMin;
      // },
      // mouseOver: function(){
      //   this.active = !this.active;
    }
  }
};
</script>

<style scoped>
.flag {
  position: absolute;
  top: 0%;
  right: 0%;
  padding: 0 2px;
  background-color: rgba(80, 83, 90, 0.808);
}
.date {
  position: absolute;
  bottom: -16px;
  right: 0px;
  color: #222222;
  background-color: #f7a611;
  line-height: 1.2;
  font-size: 0.8em;
  padding: 3px 10px;
  font-weight: bold;
}
.dateGray {
  position: absolute;
  bottom: -16px;
  right: 0px;
  color: #bbbbbb;
  background-color: #444444;
  line-height: 1.2;
  font-size: 0.8em;
  padding: 3px 10px;
  font-weight: bold;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title {
  margin-top: 20px;
  height: 5em;
  padding: 0 5px;
}
/* .description {
    position: absolute;
    background-color: lightgrey;
    color: #222222;
    height: auto;
    z-index: 1;
    width: 100%;
  } */
.description {
  padding: 10px 5px 10px 5px;
  text-align: justify;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.buttonSize {
  padding-top: 4px;
  padding-bottom: 4px;
}
.buttonColor {
  color: #222222;
  background-color: #f7a611;
  font-size: 0.8em;
  font-weight: bold;
}
/* .buttonClose {
  float: right;
  margin: 0 10px 10px 0;
  padding: 0 6px;
} */
.imageGray {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
</style>
