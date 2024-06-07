// import { z } from "zod";
const { z } = require("zod");

const createTodo = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

const updateTodo = z.object({
  id: z.string().min(1)
});

module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};
