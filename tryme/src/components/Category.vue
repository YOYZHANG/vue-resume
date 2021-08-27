<template>
    <ul class="ui-picker">
        <li 
            v-for="item in datasource" 
            :key="item">{{item.value}}
            @click="itemClick(item.id)"
            :style="{'background': item.color}"
            :class="{'selected:': item.id == value}"
        </li>
    </ul>
</template>
<script>
export default {
    props:['datasource'],
    data() {
        return {
            value: ''
        }
    },
    methods: {
        itemClick(id) {
            this.value = id;
        }
    }

}
</script>
<style>
.ui-picker {
    display: inline-block;
}

.selected {
    box-shadow: 0 0 0 2px #ddd inset;
}


</style>