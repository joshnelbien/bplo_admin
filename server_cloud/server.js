require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();  

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

app.use(express.json());



const applicationRoutes = require("./routes/applicationRoutes");
app.use("/applications", applicationRoutes);


db.sequelize.sync().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});

