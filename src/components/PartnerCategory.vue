<template>
    <div v-if="partnerCategory.visible" class="sponsors-row" data-animation="bounceIn">
        <h4 style="font-size: 17px;">
            {{ partnerCategory.description }}
        </h4>
        <br />
        <div v-for="partner in partnerCategory.partners" :key="partner.id">
            <div v-if="partner.visible">
                <a :href="partner.link" target="_blank">
                    <div v-if="partnerCategory.maxImageHeight">
                        <div v-if="partner.height && (partner.height <= partnerCategory.maxImageHeight)">
                            <img :style="{height: partner.height + 'px'}" :alt="partner.name" :src="thumbUrl(partner)" :title="partner.name" />
                        </div>
                        <div v-else-if="partner.height && (partner.height > partnerCategory.maxImageHeight)">
                            <img :style="{height: partnerCategory.maxImageHeight + 'px'}" :alt="partner.name" :src="thumbUrl(partner)" :title="partner.name" /> 
                        </div>
                        <div v-else-if="partner.logo.height && (partner.logo.height > partnerCategory.maxImageHeight)">
                            <img :style="{height: partnerCategory.maxImageHeight + 'px'}" :alt="partner.name" :src="thumbUrl(partner)" :title="partner.name" /> 
                        </div>
                        <div v-else>
                            <img :alt="partner.name" :src="thumbUrl(partner)" :title="partner.name" />
                        </div>
                    </div>
                    <div v-else-if="partner.height">
                        <img :style="{height: partner.height + 'px'}" :alt="partner.name" :src="thumbUrl(partner)" :title="partner.name" />
                    </div>
                    <div v-else>
                        <img :alt="partner.name" :src="thumbUrl(partner)" :title="partner.name" />
                    </div>
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