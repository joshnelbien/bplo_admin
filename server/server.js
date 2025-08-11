const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

// Local DB routes
app.use("/new", require("./routes/user.routes"));
app.use("/renew", require("./routes/renew.routes"));


app.use("/api/newapplication", require("./routes/applicationRoutes"));

(async () => {
  try {
    // Connect to Supabase
    await db.supabase.authenticate();
    console.log("Connected to Supabase Postgres!");

    // Connect to Local
    await db.local.authenticate();
    console.log("Connected to Local Postgres!");

    // Start server
    app.listen(5000, () => {
      console.log("Server running at http://localhost:5000");
    });
  } catch (err) {
    console.error("DB connection error:", err);
  }
})();
