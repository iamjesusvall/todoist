import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./todosSlice";

export default function generateStore() {
  const store = configureStore({
    reducer: {
      todos: todosReducer,
    },
  });
  return store;
}
