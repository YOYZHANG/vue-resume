<template>
    <div>
        <input placeholder="标题" v-model="todo.title"/>
        <br>
        <textarea v-model="todo.desc"></textarea>
        <ui-category :datasource="categories" @clickCategory="clickCategory"></ui-category>
        <!-- <add-category @click="startAddCategory">[+]</add-category> -->
        <!-- <edit-category @click="startEditCategory">[-]</edit-category> -->
        <div>
            预期完成时间：
            <ui-calendar :value="endTimeDate" @select="selectDate"></ui-calendar>
            <ui-timepicker :endTimeHour="endTimeHour"></ui-timepicker>
        </div>

        <div>
            <button @click="submit">提交</button>
        </div>
    </div>
</template>
<script>
import Category from '../components/Category.vue';
import Calendar from '../components/Calendar.vue';
import TimePicker from '../components/TimePicker.vue';
// import AddCategory from '../components/AddCategory.vue';
// import EditCategory from '../components/EditCategory.vue';

import service from '../service';

export default {
    components: {
        'ui-category': Category,
        'ui-calendar': Calendar,
        'ui-timepicker': TimePicker,
        // 'add-category': AddCategory,
        // 'edit-category': EditCategory
    },
    data() {
        return {
            datasource: [],
            todo: {
                id: 0,
                title: '',
                desc: '',
                endTime: new Date().getTime(),
                categoryId: null,
                done: false
            },
            endTimeDate: null,
            endTimeHour: null,
            categories: []
        }
    },
    props: ['id'],
    created() {
        // let id = this.$router.query.id;
        // if (id) {
        //     this.id = +id;
        //     this.todo = service.todo(this.id);
        // }

        this.endTimeDate = new Date(this.todo.endTime),
        this.endTimeHour = new Date(this.todo.endTime),

        this.updateCategories();

    },
    methods: {
        submit() {
            let todo = this.todo;
            if (todo.id) {
                service.editTodo(todo);
            }
            else {
                service.addTodo(todo);
            }
            this.$router.go(-1);
        },
        startAddCategory() {

        },
        startEditCategory() {

        },
        updateCategories() {
            this.categories = service.categories();
        },
        // 这个是不是可以用v-model替代？？？
        selectDate(date) {
            this.endTimeDate = date;
        },
        clickCategory(cateId) {
            this.todo.categoryId = cateId;
        }

    }
}
</script>
<style>

</style>