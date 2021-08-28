<template>
  <div>
    <router-link to='/add'>+</router-link>
    <ul class="category-list">
      <li v-for="cate in categories" :key="cate" :style="{'background':cate.color}">
        <p @click="() => {$router.push({name:'category',params: {cateId: cate.id}})}">{{cate.title}} </p>
      </li>
    </ul>
    <router-link to="/" :style="{'display': cateId ? '' : 'none'}">X</router-link>
    <ul>
      <TodoItem v-for="(item, index) in todos" :key="index" :item="item"/>
    </ul>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue';
import service from '../service';
// import AddTodo from '../components/AddTodo.vue';

export default {
  data() {
    return {
      todos: [],
      categories: []
    }
  },
  components: {
    TodoItem
  },
  watch: { 
     '$route.params.cateId': {
        handler: function(cateId) {
           this.todos = service.todos(cateId);
        },
        deep: true,
        immediate: true
      }
  },
  props: ['cateId'],
  created() {
    this.todos = service.todos(0);
    this.categories = service.categories();
  },
  methods: {
    addNew(item) {
      this.todo.push(item);
    }
  }
}
</script>

<style>
.category-list li {
  margin: 5px;
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;
  width: 50px;
  cursor: pointer;
}

</style>
