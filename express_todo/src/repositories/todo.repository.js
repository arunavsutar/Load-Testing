// Here we have to create actual database represenationn.
//For now we are createing inmemory todo.
const todos = [];




class todoRepository {
    insert(todoText) {
        const todo = {
            todo: todoText,
            id: todos.length
        }
        todos.push(todo);
        return todo;
    }
    getAll() {
        return todos;
    }
    get(id) {
        const todo = todos.find(todo => todo.id == id);
        if (todo) {
            return todo;
        }
        else {
            throw new Error(`No TODO present having id - ${id}`);
            //console.error(`No TODO present having id - ${id}`);
        }
    }
    delete(id) {
        const index = todos.findIndex(item => item.id == id);
        if (index !== -1) {
            const todo = todos.find(todo => todo.id == id);
            todos.splice(index, 1);
            return todo;
        } else {
            throw new Error(`Object with id ${id} not found`);
        }
    }
    update(id, text) {
        const index = todos.findIndex(item => item.id == id);
        if (index !== -1) {
            todos[index].todo = text;
            const todo = todos.find(todo => todo.id == id);
            console.log(todo);
            return todo;
        } else {
            throw new Error(`Object with id ${id} not found`);
        }
    }
}

module.exports = todoRepository;