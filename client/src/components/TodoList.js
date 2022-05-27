import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ filter, todos }) {
  return (
    <div className="w-full py-2 border-t-2 border-lime-100">
      {todos.length > 0 ? (
        todos
          .filter((todo) => {
            if (!filter) return true;
            return todo.completed === true;
          })
          .map((todo) => (
            <TodoItem
              key={todo.id}
              description={todo.description}
              status={todo.completed}
            />
          ))
      ) : (
        <p>Write something above...</p>
      )}
    </div>
  );
}
