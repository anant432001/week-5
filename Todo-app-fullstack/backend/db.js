const mongoose = require("mongoose");
const { boolean } = require("zod");
const uri = "mongodb+srv://admin:admin%40123@cluster0.8wnnoy6.mongodb.net/";

// Connect to MongoDB
mongoose.connect(uri + "todo_app");

// Define schemas
const todoSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
