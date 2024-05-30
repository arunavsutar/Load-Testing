
class TodoService {
    constructor(repo) {
        this.todorepository = repo
    }
    async create(todoText) {

        const response = await this.todorepository.create(todoText);
        console.log(response);
        return response;
    }
    async getOne(id) {
        return this.todorepository.getOne(id);
    }
    async getAll() {
        const response= await this.todorepository.getAll();
        console.log(response);
        return response;
    }
    async deleteOne(id) {
        return this.todorepository.deleteOne(id);
    }
    async updateOne(id, text) {
        return this.todorepository.updateOne(id, text);
    }
}

module.exports = TodoService;