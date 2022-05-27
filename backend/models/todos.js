export default (sequelize, type) => {
  return sequelize.define("todos", {
    id: {
      type: type.UUID,
      defaultValue: type.UUIDV1,
      primaryKey: true,
    },
    description: type.STRING,
    completed: {
      type: type.BOOLEAN,
      defaultValue: false,
    },
  });
};
