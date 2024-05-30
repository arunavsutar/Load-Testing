const express = require('express');
const { createTodos, getOneTodo, getTodos, deleteOneTodo, updateOneTodo } = require('../../controllers/todo.controller');
const todoRouter = express.Router();

todoRouter.get('/getAll', getTodos);
todoRouter.post('/', createTodos);
todoRouter.get('/:id', getOneTodo);
todoRouter.delete('/:id', deleteOneTodo);
todoRouter.put('/:id', updateOneTodo);

module.exports = todoRouter;