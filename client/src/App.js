import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: "41b4d4b0-dd68-11ec-b2ba-0bdd38285bfb",
      description: "First todo",
      completed: true,
      createdAt: "2022-05-27T02:53:59.000Z",
      updatedAt: "2022-05-27T02:53:59.000Z",
    },
    {
      id: "bb0420f0-dd68-11ec-aa40-ff5e44b018d7",
      description: "Second todo",
      completed: false,
      createdAt: "2022-05-27T02:57:22.000Z",
      updatedAt: "2022-05-27T02:57:22.000Z",
    },
  ]);

  const [showCompleted, setShowCompleted] = useState(false);

  const addNewTodo = (newInput) => {
    setTodos((prevState) => [
      ...prevState,
      {
        id: "bb0420f0-dd68-11ec-aa40-ff5e44b018d6",
        description: newInput,
        completed: false,
        createdAt: "2022-05-28T02:57:22.000Z",
        updatedAt: "2022-05-28T02:57:22.000Z",
      },
    ]);
  };

  const handleFilter = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div className="h-screen w-screen bg-teal-50 pt-16">
      <div className="w-1/2 h-fit mx-auto bg-white px-8 py-6 rounded-lg shadow-md">
        <AddTodoForm addNewTodo={addNewTodo} />
        <TodoFilter status={showCompleted} onClick={handleFilter} />
        <TodoList filter={showCompleted} todos={todos} />
      </div>
    </div>
  );
}

export default App;
