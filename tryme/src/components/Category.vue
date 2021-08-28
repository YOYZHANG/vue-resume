<template>
    <ul class="ui-picker">
        <li 
            v-for="item in datasource" 
            :key="item"
            @click="itemClick(item.id)"
            :style="{'background': item.color}"
            :class="{'selected:': item.id == value}">
            {{item.title}}
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
            this.$emit('clickCategory', id);
        }
    }

}
</script>
<style>
.ui-picker li{
    display: inline-block;
    margin: 5px;
    border-radius: 3px;
    cursor: pointer;
}

.selected {
    box-shadow: 0 0 0 2px #ddd inset;
}


</style>