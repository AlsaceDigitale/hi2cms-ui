<template>
  <div>
     <twitch-player
    :channel="channel"
  ></twitch-player>
</template>

<script>

import VueTwitchPlayer from 'vue-twitch-player';

export default {
  components: {
      VueTwitchPlayer,
    },
  name: "LiveStream",
  data () {
      return {
        channel: 'alsacedigitale',
      };
  }
};
</script>

<style scoped>
/* @media screen and (min-width: 992px) and (max-width: 1200px){
  .divMargin {
    margin-top: 120px;
  }
}

@media screen and (min-width: 1200px) {
  .liMargin {
    margin-bottom: 20px;
  }
  .divMargin {
    margin-top: 160px;
  }
} */

</style>