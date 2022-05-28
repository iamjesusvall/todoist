import { useState, useEffect } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, setNewTodo } from "./redux/todosSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const todos = useSelector((store) => store.todos.array);

  const [showCompleted, setShowCompleted] = useState(false);

  const addNewTodo = (newInput) => {
    dispatch(setNewTodo(newInput));
  };

  const handleFilter = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div className="h-screen w-screen bg-teal-50 pt-16">
      <div className="mx-auto container md:w-1/2 h-fit mx-auto bg-white px-8 py-6 rounded-lg shadow-md">
        <AddTodoForm addNewTodo={addNewTodo} />
        <TodoFilter status={showCompleted} onClick={handleFilter} />
        <TodoList filter={showCompleted} todos={todos} />
      </div>
    </div>
  );
}

export default App;
