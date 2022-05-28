import axios from "axios";

const requestHelper = axios.create({
  baseURL: "http://localhost:4000/api",
});

const api = {
  todos: {
    get: () =>
      requestHelper({
        url: "todos",
        method: "get",
      }),
    post: (data) =>
      requestHelper({
        url: "todos",
        method: "post",
        data,
      }),
    putCompleted: (data) =>
      requestHelper({
        url: "todos/" + data.id,
        method: "put",
        data: {
          completed: data.completed,
        },
      }),
    putEdit: (data) =>
      requestHelper({
        url: "todos/" + data.id,
        method: "put",
        data: {
          description: data.description,
        },
      }),
    delete: (id) =>
      requestHelper({
        url: "todos/" + id,
        method: "delete",
      }),
  },
};

export default api;
