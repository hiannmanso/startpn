import { Sequelize } from "sequelize";
import database from "../../config/database.js";
import Folder from "./folder.js";
const User = database.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
  },
});

export default User;
