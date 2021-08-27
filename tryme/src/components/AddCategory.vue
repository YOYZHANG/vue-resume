<template>
    <div class="ui-layer add-category-layer" :style="{width: 200, top: top, left: left}">
        <ui-addcategory san-ref="add" on-finished="finish($event)"></ui-addcategory>
    </div>
</template>
<script>
export default {
    data() {
        return {
            top: 200,
            left: -1000
        }
    },
    show() {

    }

}
</script>
<style>
</style>