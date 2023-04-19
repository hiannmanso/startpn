import { Sequelize } from "sequelize";
import database from "../../config/database.js";
import Folder from "./folder.js";

const Note = database.define("note", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  sendBy: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  consultationDate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  size: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Note;
