const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abhijitbhowmick2025:Diki@2025@cluster0.immlkie.mongodb.net/todos?retryWrites=true&w=majority');

const todoSchema = mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});
const todo = mongoose.model('todos', todoSchema);
module.exports ={
    todo
}