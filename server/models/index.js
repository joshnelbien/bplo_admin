// models/index.js
require('dotenv').config();
const { Sequelize } = require('sequelize');
const dbConfig = require("../config/db.config.js");

// Supabase DB connection
const supabaseSequelize = new Sequelize(
  dbConfig.supabase.DB,
  dbConfig.supabase.USER,
  dbConfig.supabase.PASSWORD,
  {
    host: dbConfig.supabase.HOST,
    dialect: dbConfig.supabase.dialect,
    port: dbConfig.supabase.PORT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  }
);

// Local DB connection
const localSequelize = new Sequelize(
  dbConfig.local.DB,
  dbConfig.local.USER,
  dbConfig.local.PASSWORD,
  {
    host: dbConfig.local.HOST,
    dialect: dbConfig.local.dialect,
    port: dbConfig.local.PORT,
    logging: false,
  }
);

// Main export object
const db = {};
db.Sequelize = Sequelize;

db.supabase = supabaseSequelize;
db.local = localSequelize;

db.renewApplication = require("./renewApplication")(supabaseSequelize, Sequelize);
db.NewApplication = require("./newApplicationCloud")(supabaseSequelize, Sequelize);
db.User = require("./newApplication")(localSequelize, Sequelize);
db.renew = require("./renewApplication")(localSequelize, Sequelize);
db.Backroom = require("./backroom")(localSequelize, Sequelize)



module.exports = db;
