
class TodoRepository {
    constructor(db) {
        this.db = db;
    }
    async create(todoText) {
        const todo = {
            todo: todoText,
            id: this.db.todos.length
        }
        this.db.todos.push(todo);
        return todo;
    }
    async getOne(id) {
        const todo = this.db.todos.find(todo => todo.id == id);
        if (todo) {
            return todo;
        }
        else {
            throw new Error(`No TODO pressent having id - ${id}`);
        }
    }
    async getAll() {
        return this.db.todos;
    }
    async deleteOne(id) {
        const index = this.db.todos.findIndex(item => item.id == id);
        if (index !== -1) {
            const todo = this.db.todos.find(todo => todo.id == id);
            this.db.todos.splice(index, 1);
            return todo;
        } else {
            throw new Error(`Object with id ${id} not found`);
        }
    }
    async updateOne(id, text) {
        const index = this.db.todos.findIndex(item => item.id == id);
        if (index !== -1) {
            this.db.todos[index].todo = text;
            const todo = this.db.todos.find(todo => todo.id == id);
            console.log(todo);
            return todo;
        } else {
            throw new Error(`Object with id ${id} not found`);
        }
    }
}

module.exports = TodoRepository;