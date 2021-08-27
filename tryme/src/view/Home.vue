<template>
  <AddTodo @addNew="addNew"/>
  <ul>
    <TodoItem v-for="(item, index) in todo" :key="index" :item="item" @remove="todo.splice(index, 1)"/>
  </ul>
</template>

<script>
import TodoItem from '../components/TodoItem.vue';
import AddTodo from '../components/AddTodo.vue';

export default {
  data() {
    return {
      todo: [{
        content: 'fsdfdsfd',
        completed: true
      }, {
        content: 'dfsfgg',
        completed: false
      }, {
        content: 'ddhkjhkhk',
        completed: false
      }]
    }
  },
  components: {
    TodoItem,
    AddTodo
  },
  methods: {
    addNew(item) {
      console.log(item, 'item');
      this.todo.push(item);
    }
  }
}
</script>

<style>
</style>
