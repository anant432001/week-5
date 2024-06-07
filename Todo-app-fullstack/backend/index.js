const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");

app.use(express.json());

// Returns all the stored Todo's
app.get("/todos", function (req, res) {});

// Saves a new Todo to the backend
app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "Invalid Inputs",
    });
    return;
  }
});

// Updates a given Todo
app.put("/completed", function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "Invalid Inputs",
    });
    return;
  }
});
