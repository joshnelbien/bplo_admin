require('dotenv').config();

module.exports = {
  supabase: {
    HOST: process.env.SUPABASE_DB_HOST,
    USER: process.env.SUPABASE_DB_USER,
    PASSWORD: process.env.SUPABASE_DB_PASSWORD,
    DB: process.env.SUPABASE_DB_NAME,
    dialect: "postgres",
    PORT: process.env.SUPABASE_DB_PORT,
  },
  local: {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    dialect: "postgres",
    PORT: process.env.DB_PORT,
  }
};
