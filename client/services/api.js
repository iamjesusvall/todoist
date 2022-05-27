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
  },
};

export default api;
