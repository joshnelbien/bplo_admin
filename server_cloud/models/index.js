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


db.Test = require("./userApplication")(sequelize, Sequelize);


module.exports = db;
