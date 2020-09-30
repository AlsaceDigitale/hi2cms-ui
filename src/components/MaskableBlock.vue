<template>
  <div v-if="checkVisibility(this.blockId)">
    <slot></slot>
    <!-- <div v-for="maskableblock in maskableblocks" :key="maskableblock.id"> -->
    <!-- If the property "visible" of the block (zone) Process is true, show the block, else don't showing it -->
    <!-- <div v-if="maskableblock.name === 'process' && maskableblock.visible">
        <slot name="process"></slot>
      </div> -->
    <!-- Block "Keynote" = "visible" -->
    <!-- <div v-if="maskableblock.name === 'keynote' && maskableblock.visible">
        <slot name="keynote"></slot>
      </div> -->
    <!-- Block "Coach" = "visible" -->
    <!-- <div v-if="maskableblock.name === 'coach' && maskableblock.visible">
        <slot name="coach"></slot>
      </div> -->
    <!-- Block "Jury" = "visible" -->
    <!-- <div v-if="maskableblock.name === 'jury' && maskableblock.visible">
        <slot name="jury"></slot>
      </div> -->
    <!-- Block "Question" = "visible" -->
    <!-- <div v-if="maskableblock.name === 'question' && maskableblock.visible">
        <slot name="question"></slot>
      </div> -->
    <!-- Block "Partner" = "visible" -->
    <!-- <div v-if="maskableblock.name === 'partner' && maskableblock.visible">
        <slot name="partner"></slot>
      </div>
    </div> -->
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "MaskableBlock",
  props: {
    blockId: String,
    // zoneName: Boolean
  },
  data: function() {
    return {
      maskableblocks: []
    };
  },
  methods: {
    checkVisibility: function(zoneName) {
      //   console.log(zoneName);
      // console.log(this.maskableblocks);
      let zone = this.maskableblocks.find(element => element.name === zoneName);
      if (zone !== undefined) {
        if (zone.visible === true) {
          //   this.zoneName = true;
          this.$emit("zoneVisibility", true);
          return true;
        } else {
          //   this.zoneName = false
          this.$emit("zoneVisibility", false);
          return false;
        }
      }
      return false;
    }
  },
  mounted: function() {
    api.getMaskableBlocks().then(resp => {
      this.maskableblocks = resp.data;
    });
  }
};
</script>

<style scoped></style>
