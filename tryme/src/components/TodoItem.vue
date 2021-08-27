<template>
    <div :class="{'is-completed':todo.completed}">
        <input type="checkbox" v-on:change="changeStatus" :checked="item.completed">
        {{item.content}}
        <button @click="$emit('remove')">del</button>
    </div>
</template>
<script>
    export default {
        props: ['item'],
        data() {
            return {
                todo: this.item
            }
        },
        methods: {
            changeStatus() {
                console.log('inchange', this.todo.completed);
                this.todo.completed = !this.todo.completed;
            }
        }
    }
</script>
<style>
.is-completed {
    text-decoration: line-through;
}

</style>