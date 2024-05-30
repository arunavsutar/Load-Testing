async function ping(req, res) {
    res.status(200).send("PONG");
}

async function createTodo(req, res) {
    const { todoService } = this;
    const response = await todoService.create(req.body);
    console.log("Inside controller - ", response)
    res.status(201).send({
        success: "true",
        msg: "Todo Created successfully",
        err: {},
        data: response
    });
}

async function getTodo(req, res) {
    const { todoService } = this;
    const response = await todoService.getOne(req.params.id);
    res.status(200).send({
        success: "true",
        msg: "Todo retrieved successfully",
        err: {},
        data: response
    });
}
async function getTodos(req, res) {
    const { todoService } = this;
    const response = await todoService.getAll();
    res.status(200).send({
        success: "true",
        msg: "All Todo retrieved successfully",
        err: {},
        data: response
    });
}

async function deleteTodo(req, res) {
    const { todoService } = this;
    const response = await todoService.deleteOne(req.params.id);
    res.status(200).send({
        success: "true",
        msg: "Todo Deleted successfully",
        err: {},
        data: response
    });
}

async function updateTodo(req, res) {
    const { todoService } = this;
    const response = await todoService.updateOne(req.params.id, req.body);
    res.status(200).send({
        success: "true",
        msg: "Todo updated successfully",
        err: {},
        data: response
    });
}

module.exports = {
    ping,
    createTodo,
    getTodo,
    getTodos,
    deleteTodo,
    updateTodo
}