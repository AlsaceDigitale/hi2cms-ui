<template>
    <div v-if="partnerCategory.visible" class="sponsors-row" data-animation="bounceIn">
        <h4 style="font-size: 17px;">
            {{ partnerCategory.description }}
        </h4>
        <br />
        <div v-for="partner in partnerCategory.partners" :key="partner.id">
            <div v-if="partner.visible">
                <a :href="partner.link" target="_blank">
                    <img :style="{height: partnerCategory.imageHeight}" :alt="partner.name" :src="thumbUrl(partner)" :title="partner.name" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/services/api.js';

export default {
    name: "PartnerCategory",
    props: {
        partnerCategory: Object
    },
    methods: {
        thumbUrl: function (partner) {
            if (partner.logo != null) {
                return api.getMediaRoot() + partner.logo.url;
            }
        }
    }
}
</script>

<style scoped>

</style>