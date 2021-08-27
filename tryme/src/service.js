import data from './data';
// 为什么数据都要immutable呢？？
export default {
    todos() {},
    todo(id) {
        let categoryMap = {};
        for (let cate of data.category) {
            categoryMap[cate.id] = cate;
        }
        let todos = data.list;
        for (let todo of todos) {
            if (todo.id === id) {
                if (todo.categoryId) {
                    todo = Object.assign({}, todo);
                    todo.category = Object.assign({}, categoryMap[todo.categoryId]);
                }

                return todo;
            }
        }

        return null;
    },
    categories() {
        return data.category.slice(0);
    },

    doneTodo() {},
    addTodo(item) {
        let todo = Object.assign({}, item);
        let id = 1;
        if (data.list[0]) {
            id = data.list[0].id + 1;
        }
        todo.id = id;
        data.list.unshift(todo);
    },
    removeTodo() {},
    editTodo() {},

    addCategory() {},
    removeCategory() {},
    editCategory() {},
}