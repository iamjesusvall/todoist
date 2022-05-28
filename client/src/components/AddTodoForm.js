import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import { useSelector, useDispatch } from "react-redux";
import { editTodo } from "../redux/todosSlice";

export default function AddTodoForm({ addNewTodo }) {
  const dispatch = useDispatch();
  const selected = useSelector((store) => store.todos.selectedTodo);
  const [newInput, setNewInput] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (selected.hasOwnProperty("id")) {
      setNewInput(selected.description);
      setIsSelected(true);
    }
  }, [selected]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSelected) {
      if (newInput.trim("") !== "") {
        dispatch(
          editTodo({
            id: selected.id,
            description: newInput,
          })
        );
        setNewInput("");
        setIsSelected(false);
      } else {
        setIsError(true);
      }
    } else {
      if (newInput.trim("") !== "") {
        setIsError(false);
        addNewTodo(newInput);
        setNewInput("");
      } else {
        setIsError(true);
      }
    }
  };

  const handleInputChange = (e) => {
    setNewInput(e.target.value);
  };
  return (
    <form className="w-full mb-2" onSubmit={handleSubmit}>
      <TodoInput
        newInput={newInput}
        onChange={handleInputChange}
        selected={isSelected}
      />
      {isError ? (
        <p className=" my-2 text-red-700 text-sm font-semibold">
          Write a description...
        </p>
      ) : null}
    </form>
  );
}
