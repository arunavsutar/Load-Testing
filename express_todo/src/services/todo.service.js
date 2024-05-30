class todoService {

    constructor(todoRepositories) {
        this.todoRepositories = todoRepositories;
    }
    create(todotext) {
        todotext = todotext.trim().toUpperCase();
        return this.todoRepositories.insert(todotext);
    }
    getOneTodo(id) {
        return this.todoRepositories.get(id);
    }
    getAllTodo() {
        return this.todoRepositories.getAll();
    }
    deleteOneTodo(id) {
        return this.todoRepositories.delete(id);
    }
    updateOneTodo(id, textTodo) {
        return this.todoRepositories.update(id, textTodo)
    }
}

module.exports = todoService;