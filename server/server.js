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
    await db.supabase.authenticate();
    console.log("Connected to Supabase Postgres!");

    await db.local.authenticate();
    console.log("Connected to Local Postgres!");


    
    await db.local.sync({ alter: true }); 

 
    await db.supabase.sync({ alter: true }); 
    // Run sync on startup



   const syncLocalToCloud = async () => {
      try {
        const users = await db.User.findAll();
        let insertedCount = 0;

        for (const user of users) {
          const exists = await db.NewApplication.findOne({ where: { id: user.id } });
          if (!exists) {
            await db.NewApplication.create(user.toJSON());
            insertedCount++;
            console.log(`Inserted user with id=${user.id} into cloud DB`);
          }
        }

        console.log(`Sync complete: ${insertedCount} new users inserted to cloud.`);
      } catch (err) {
        console.error("Sync error:", err);
      }
    };

    // Initial sync on startup
    await syncLocalToCloud();

    // Set interval to run sync every 5 minutes (300000 ms)
    setInterval(syncLocalToCloud, 300000);


    const syncCloudToLocal = async () => {
  try {
    const cloudUsers = await db.NewApplication.findAll();
    let insertedCount = 0;

    for (const user of cloudUsers) {
      const exists = await db.User.findOne({ where: { id: user.id } });
      if (!exists) {
        await db.User.create(user.toJSON());
        insertedCount++;
        console.log(`Inserted user with id=${user.id} into local DB`);
      }
    }

    console.log(`Sync complete: ${insertedCount} new users inserted to local.`);
  } catch (err) {
    console.error("Sync error:", err);
  }
};

// Initial sync on startup
await syncCloudToLocal();

// Set interval to run sync every 5 minutes (300000 ms)
setInterval(syncCloudToLocal, 300000);


    const PORT = process.env.PORT || 5000;
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("DB connection error:", err);
  }
})();


