
const TodoService = require('../services/todo.service')
const TodoRepositories = require('../repositories/todo.repository')

const todoService = new TodoService(new TodoRepositories);

function getTodos(req, res) {
    const todos = todoService.getAllTodo();
    return res.status(200).json({
        success: true,
        message: "All Todos Retrieved Succesfully.",
        error: {},
        data: todos
    });
}

function createTodos(req, res) {
    const todo = todoService.create(req.body);
    return res.status(201).json({
        success: true,
        message: "Todo Added Succesfully.",
        error: {},
        data: todo
    });
}
function getOneTodo(req, res) {
    const todo = todoService.getOneTodo(req.params.id);
    return res.status(200).json({
        success: true,
        message: "Todo retrieved Succesfully.",
        error: {},
        data: todo
    });
}
function deleteOneTodo(req, res) {
    const todo = todoService.deleteOneTodo(req.params.id);
    return res.status(200).json({
        success: true,
        message: "Todo Deleted Succesfully.",
        error: {},
        data: todo
    });
}
function updateOneTodo(req, res) {
    const todo = todoService.updateOneTodo(req.params.id, req.body);
    return res.status(200).json({
        success: true,
        message: "Todo Updated Succesfully.",
        error: {},
        data: todo
    });
}

module.exports = {
    getTodos, createTodos, getOneTodo, getTodos, deleteOneTodo, updateOneTodo
}