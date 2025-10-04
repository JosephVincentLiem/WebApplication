import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    productID: DataTypes.STRING,
    productName: DataTypes.STRING,
    amount: DataTypes.STRING,
    customerName: DataTypes.STRING,
    status: DataTypes.INTEGER,
    transactionDate: DataTypes.DATE,
    createBy: DataTypes.STRING,
    createOn: DataTypes.DATE,
    // name: DataTypes.STRING,
    // email: DataTypes.STRING,
    // gender: DataTypes.STRING,
  },
  { freezeTableName: true }
);

export default User;

(async () => {
  await db.sync();
})();
