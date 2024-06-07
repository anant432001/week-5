const express = require("express");
const app = express();
const cors = require('cors')
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

app.use(cors(), express.json());

// Returns all the stored Todo's
app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.status(200).json(todos);
});

// Saves a new Todo to the database
app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "Invalid Inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.status(201).json({
    message: "Todo Created",
  });
});

// Updates a given Todo to completed
app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "Invalid Inputs",
    });
    return;
  }
  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.status(200).json({
    message: "Todo marked as completed",
  });
});

app.listen(3000);
