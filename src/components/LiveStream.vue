<template>
  <div>
    <!-- Add a placeholder for the Twitch embed -->
    <div id="twitch-embed"></div>

    <!-- Load the Twitch embed script -->
    <script src="https://embed.twitch.tv/embed/v1.js"></script>

      <!-- Create a Twitch.Embed object that will render within the "twitch-embed" root element. -->
      <script type="text/javascript">
        new Twitch.Embed("twitch-embed", {
          width: 854,
          height: 480,
          channel: "alsacedigitale",
          // only needed if your site is also embedded on embed.example.com and othersite.example.com 
          parent: ["hackingindustry.camp", "hi2cms-dev.netlify.app/"]
        });
      </script>
    </div>
</template>

<script>
export default {
  name: "LiveStream",
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