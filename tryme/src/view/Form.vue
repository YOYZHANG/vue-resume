<template>
    <div>
        <input placeholder="标题" v-model="todo.title"/>
        <br>
        <textarea v-model="todo.desc"></textarea>
        <ui-category :datasource="categories" :value="todo.categoryId"></ui-category>
        <!-- <add-category @click="startAddCategory">[+]</add-category> -->
        <!-- <edit-category @click="startEditCategory">[-]</edit-category> -->
        <div>
            预期完成时间：
            <ui-calendar :value="endTimeDate" @select="selectDate(date)"></ui-calendar>
            <ui-timepicker :endTimeHour="endTimeHour"></ui-timepicker>
        </div>

        <div>
            <button :click="submit">提交</button>
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
    computed: {
        todo() {
            // 这能拿到响应么
            if (this.id) {
                return service.todo(this.id);
            }

            return {
                id: 0,
                title: '',
                desc: '',
                endTime: new Date().getTime(),
                categoryId: null,
                done: false
            }
        },
        endTimeDate() {
            let endTime = new Date(this.todo.endTime);
            return new Date(
                endTime.getFullYear(),
                endTime.getMonth(),
                endTime.getDate()
            )
        },
        endTimeHour() {
            let endTime = new Date(this.todo.endTime);
            return endTime.getHours();
        }
    },
    data() {
        return {
            datasource: []
        }
    },
    methods: {
        created() {
            let id = this.$router.query.id;
            if (id) {
                this.id = +id;
            }

            this.updateCategories()
        },
        submit() {
            service.addTodo(this.todo);
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
        }

    }
}
</script>
<style>

</style>