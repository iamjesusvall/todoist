import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";
import TodosModel from "../models/todos.js";

dotenv.config({
  path: "variables.env",
});

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_REMOTE,
    dialect: "mysql",
  }
);

const Todos = TodosModel(sequelize, DataTypes);
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Tables Sync");
  })
  .catch((err) => {
    console.log({ err });
  });

export default Todos;
