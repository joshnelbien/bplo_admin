// models/index.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.SUPABASE_DB_NAME,
  process.env.SUPABASE_DB_USER,
  process.env.SUPABASE_DB_PASSWORD,
  {
    host: process.env.SUPABASE_DB_HOST,
    port: process.env.SUPABASE_DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;




const NewApplication = require("./newApplication")(sequelize, Sequelize.DataTypes);
db.NewApplication = NewApplication;

module.exports = db;
