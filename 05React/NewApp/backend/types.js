const zod = require("zod");

const createTodo = zod.object({
    tittle: zod.string().min(1, "Title is required"),
    description: zod.string().min(1, "Description is required")
});
const updateTodo = zod.object({
    id: zod.string().min(1, "ID is required"),
    tittle: zod.string().min(1, "Title is required"),
    description: zod.string().min(1, "Description is required")
});
const completeTodo = zod.object({
    id: zod.string().min(1, "ID is required"),
    completed: zod.boolean()
});
module.exports = {
    createTodo : createTodo,    
    updateTodo : updateTodo,
    completeTodo : completeTodo
};