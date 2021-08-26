<template>
<div>
    <input :class="{'complete' : item.completed}" type="checkbox" checked="{{item.completed}}">
    {{item.content}}
    <button @click="$emit('remove')">del</button>
</div>
</template>
<script>
    export default {
        props: ['item']
    }
</script>
<style>
.completed {
    text-decoration: line-through;
}

</style>