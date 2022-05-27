import { useState } from "react";
import TodoInput from "./TodoInput";

export default function AddTodoForm({ addNewTodo }) {
  const [newInput, setNewInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewTodo(newInput);
    setNewInput("");
  };

  const handleInputChange = (e) => {
    setNewInput(e.target.value);
  };
  return (
    <form className="w-full mb-2" onSubmit={handleSubmit}>
      <TodoInput newInput={newInput} onChange={handleInputChange} />
    </form>
  );
}
