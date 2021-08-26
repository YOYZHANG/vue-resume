<template>
    <form @submit.prevent="addNew">
        <input type="text" v-model="value"/>
        <input type="submit" value="submit"/>
    </form>
</template>
<script>
    export default {
        data() {
            return {
                value: ''
            }
        },
        methods: {
            addNew() {
                this.$emit('addNew', {
                    content: this.value,
                    complete: false
                });

                this.value = '';
            }
        }
    }
</script>
<style>
</style>