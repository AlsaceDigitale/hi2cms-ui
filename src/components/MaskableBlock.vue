<template>
    <div>
        <div v-for="maskableblock in maskableblocks" :key="maskableblock.id">
            <!-- If the property "visible" of the block (zone) Process is true, show the block, else don't showing it -->
            <div v-if="maskableblock.name === 'process' && maskableblock.visible">
                <slot name="process"></slot>
            </div>
            <!-- Block "Keynote" = "visible" -->
            <div v-if="maskableblock.name === 'keynote' && maskableblock.visible">
                <slot name="keynote"></slot>
            </div>
            <!-- Block "Coach" = "visible" -->
            <div v-if="maskableblock.name === 'coach' && maskableblock.visible">
                <slot name="coach"></slot>
            </div>
            <!-- Block "Jury" = "visible" -->
            <div v-if="maskableblock.name === 'jury' && maskableblock.visible">
                <slot name="jury"></slot>
            </div>
            <!-- Block "Question" = "visible" -->
            <div v-if="maskableblock.name === 'question' && maskableblock.visible">
                <slot name="question"></slot>
            </div>
            <!-- Block "Partner" = "visible" -->
            <div v-if="maskableblock.name === 'partner' && maskableblock.visible">
                <slot name="partner"></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "MaskableBlock",
    props: {
        maskableblocks: Array
    }
}
</script>

<style scoped>

</style>