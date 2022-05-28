import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/api";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodosStatus",
  async () => {
    const res = await api.todos.get();
    return res.data;
  }
);

export const setNewTodo = createAsyncThunk(
  "todos/setNewTodoStatus",
  async (description) => {
    console.log(description);
    const res = await api.todos.post({ description });
    return res.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodoStatus",
  async (id) => {
    await api.todos.delete(id);
    return id;
  }
);

export const isCompletedTodo = createAsyncThunk(
  "todos/isCompletedTodoStatus",
  async (id) => {
    await api.todos.putCompleted({
      id,
      completed: true,
    });
    return id;
  }
);

export const editTodo = createAsyncThunk(
  "todos/editTodoStatus",
  async (data) => {
    await api.todos.putEdit({
      id: data.id,
      description: data.description,
    });
    return data;
  }
);

const initialState = {
  array: [],
  selectedTodo: {},
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      const todo = state.array.filter((elem) => elem.id === action.payload);
      state.selectedTodo = todo[0];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      state.array = payload;
    });
    builder.addCase(setNewTodo.fulfilled, (state, { payload }) => {
      state.array.push(payload);
    });
    builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
      state.array = state.array.filter((elem) => elem.id !== payload);
    });
    builder.addCase(isCompletedTodo.fulfilled, (state, { payload }) => {
      state.array = state.array.map((elem) => {
        if (elem.id === payload && elem.completed !== true) {
          return {
            ...elem,
            completed: true,
          };
        }

        return elem;
      });
    });
    builder.addCase(editTodo.fulfilled, (state, { payload }) => {
      state.array = state.array.map((elem) => {
        if (elem.id === payload.id) {
          return {
            ...elem,
            description: payload.description,
          };
        }

        return elem;
      });
    });
  },
});

export const { setSelected } = todosSlice.actions;
export default todosSlice.reducer;
