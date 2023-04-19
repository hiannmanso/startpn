import { Sequelize } from "sequelize";
import database from "../../config/database.js";
import User from "./user.js";
import Note from "./note.js";

const Folder = database.define("user", {
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
});

export default Folder;
