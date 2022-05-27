import express from "express";
import Todos from "../../config/db.js";

const router = express.Router();

// http://localhost:4000/api/todos
// Create
router.post("/", async (req, res) => {
  const post = await Todos.create(req.body);
  res.json(post);
});

// Read
router.get("/", async (req, res) => {
  const todos = await Todos.findAll();
  res.json(todos);
});
router.get("/:todoId", async (req, res) => {
  const todo = await Todos.findAll({
    where: {
      id: req.params.todoId,
    },
  });
  res.json(todo);
});

// Update (http://localhost:4000/api/todos/:todoId)
router.put("/:todoId", async (req, res) => {
  await Todos.update(req.body, {
    where: {
      id: req.params.todoId,
    },
  });
  res.json({ success: "Todo note has been modified." });
});

// Delete (http://localhost:4000/api/todos/:todoId)
router.delete("/:todoId", async (req, res) => {
  await Todos.destroy({
    where: {
      id: req.params.todoId,
    },
  });
  res.json({ success: "Todo note has been deleted" });
});

export default router;
