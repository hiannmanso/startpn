import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    dialect: "postgres",
    host: "localhost",
  }
);
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
export default sequelize;
