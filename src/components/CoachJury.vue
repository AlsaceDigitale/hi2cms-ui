<template>
  <div
    v-if="coachjury.visible"
    class="col-sm-4 col-md-3 col-lg-2"
    style="padding: 7px"
  >
    <!-- <div class="col-sm-6 col-md-4 col-lg-2" data-animation="fadeIn">
            <div class="team-member even boxShadow">
                <img class="team-member-picture img-thumbnail" :src="thumbUrl(coachjury)" :alt="coachjury.firstname" />
                <div class="team-member-text" style="padding-bottom: 12px">
                    <h4 class="team-member-name">{{ coachjury.firstname }} {{ coachjury.lastname }}</h4>
                    <div class="team-member-position">
                        {{ coachjury.position }} 
                    </div>
                    <a :href="coachjury.twitterUrl" target="_blank"><img src="https://img.icons8.com/fluent/20/000000/twitter.png"/></a>
                    <a :href="coachjury.linkedInUrl" target="_blank" style="margin-left: 20px"><img src="https://img.icons8.com/color/20/000000/linkedin.png"/></a>
                </div>
            </div>
        </div> -->

    <div class="card boxShadow">
      <img
        class="card-img-top"
        width="500px"
        :src="thumbUrl(coachjury)"
        :alt="coachjury.firstname"
      />
      <div class="card-body">
        <h5 class="card-title name small">
          {{ coachjury.firstname }} {{ coachjury.lastname }}
        </h5>
        <p class="card-text position small">{{ coachjury.position }}</p>
        <div>
          <!-- Icon of the company -->
          <a
            v-if="coachjury.companyUrl"
            :href="coachjury.companyUrl"
            :title="coachjury.companyName"
            target="_blank"
            style="color: #4393CF; font-size: 16px"
            ><i class="fas fa-building iconEffect"></i
          ></a>
          <a v-else style="color: gray; font-size: 16px"
            ><i class="fas fa-building"></i
          ></a>
          <!-- Icon of twitter -->
          <a
            v-if="coachjury.twitterUrl"
            :href="coachjury.twitterUrl"
            target="_blank"
            class="iconActive"
            ><i class="fab fa-twitter iconEffect"></i
          ></a>
          <a v-else class="iconInactive"
            ><i class="fab fa-twitter" style="color: gray"></i
          ></a>
          <!-- Icon of linkedin -->
          <a
            v-if="coachjury.linkedInUrl"
            :href="coachjury.linkedInUrl"
            target="_blank"
            class="iconActive"
            ><i class="fab fa-linkedin iconEffect"></i
          ></a>
          <a v-else class="iconInactive"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.js";

export default {
  name: "CoachJury",
  props: {
    coachjury: Object
  },
  methods: {
    thumbUrl: function(coachjury) {
      return api.getMediaRoot() + coachjury.photo[0].url;
    }
  }
};
</script>

<style>
@import url("https://use.fontawesome.com/releases/v5.13.0/css/all.css");
.boxShadow {
  padding: 10px;
  background-color: whitesmoke;
  /* padding-top: 12px; */
  /* padding-bottom: 12px; */
  /* box-shadow: 2px 2px 5px 1px #888888; */
  /* margin: 10px; */
}
.name {
  height: 25px;
  margin-bottom: 0;
}
.position {
  margin-bottom: 0;
  height: 50px;
}
.iconActive {
  color: #4393cf;
  margin-left: 20px;
  font-size: 18px;
}
.iconInactive {
  color: gray;
  margin-left: 20px;
  font-size: 18px;
}
.iconEffect:hover {
  animation: iconScale 0.5s linear 1;
}
@keyframes iconScale {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.5);
  }
  50% {
    transform: scale(2);
  }
  75% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
