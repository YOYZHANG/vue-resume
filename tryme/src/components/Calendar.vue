<template>
    <div @click="mainClick">
        {{dateValue}}
        <ui-layer v-if="isLayer" :value="value" @select="select"></ui-layer>
    </div>
</template>
<script>
import Layer from './CalendarLayer.vue'; 
export default {
    data() {
        return {
            isLayer: false,
            dateValue: this.value
        }
    },
    computed() {
    },
    props: ['value'],
    methods: {
        mainClick() {
            this.isLayer = !this.isLayer;
        },
        select(dateValue) {
            this.dateValue = dateValue;
            this.$emit('select', this.dateValue);
        }
    },
    components: {
        'ui-layer': Layer
    }
}
</script>
<style>
</style>