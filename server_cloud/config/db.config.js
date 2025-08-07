require('dotenv').config();

module.exports = {
  HOST: process.env.SUPABASE_DB_HOST,
  USER: process.env.SUPABASE_DB_USER,
  PASSWORD: process.env.SUPABASE_DB_PASSWORD,
  DB: process.env.SUPABASE_DB_NAME,
  dialect: "postgres",
  PORT: process.env.SUPABASE_DB_PORT,
};