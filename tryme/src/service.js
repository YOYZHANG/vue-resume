import data from './data';
// 为什么数据都要immutable呢？？
export default {
    todos(category) {
        let categoryMap = {};
        for (let cate of data.category) {
            categoryMap[cate.id] = cate;
        }
        let todos = data.list;
        let result = [];
        for (let todo of todos) {
           if (!category || +todo.categoryId === +category) {
               todo = Object.assign({}, todo);
               result.push(todo);

               if (category) {
                    todo.category = Object.assign({}, categoryMap[category]);
               }
           }
        }

        return result;
    },
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
    editTodo(todo) {
        todo = Object.assign({}, todo);
        for (const [index, item] of data.list.entries()) {
            if (item.id === todo.id) {
                data.list[index] = item;
                break;
            }
        }
    },

    addCategory() {},
    removeCategory() {},
    editCategory() {},
}