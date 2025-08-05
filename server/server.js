const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/client.application", require("./routes/client.application"));


// Connect to DB and sync
db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
  });
});
