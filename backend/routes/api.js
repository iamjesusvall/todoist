import express from "express";
import apiTodoRouter from "./api/todos.js";

const router = express.Router();

router.use("/todos", apiTodoRouter);

export default router;
