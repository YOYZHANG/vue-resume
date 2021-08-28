<template>
    <div :class="{'is-completed':todo.done}">
        <input type="checkbox" v-on:change="changeStatus" :checked="item.done">
        <h3>{{todo.title}}</h3>
        <p>{{item.desc}}</p>
        <div>
            <span>预期完成时间： <span>{{item.endTime}}</span></span>
        </div>        
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
                this.todo.completed = !this.todo.done;
            }
        }
    }
</script>
<style>
.is-completed {
    text-decoration: line-through;
}

</style>