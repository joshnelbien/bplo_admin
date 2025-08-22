const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

// Local DB routes
app.use("/new", require("./routes/newApplicationLocalroutes"));
app.use("/renew", require("./routes/renew.routes"));


app.use("/backroom", require("./routes/backroom"));

// Cloud DB routes
app.use("/api/newapplication", require("./routes/applicationRoutes"));
app.use("/api/renewapplication", require("./routes/renewApplicationRoutes"));



// Track Supabase connection status
let isSupabaseConnected = false;

(async () => {
  try {
    // Always connect to local DB
    await db.local.authenticate();
    console.log("Connected to Local Postgres!");
    await db.local.sync({ alter: true });

    // Try connecting to Supabase
    try {
      await db.supabase.authenticate();
      console.log("Connected to Supabase Postgres!");
      isSupabaseConnected = true;
      await db.supabase.sync(); // no alter to avoid heavy queries
    } catch (err) {
      console.warn(" Supabase connection failed. Running in LOCAL mode only.");
      isSupabaseConnected = false;
    }

    // ===== SYNC FUNCTIONS =====
 // ===== SYNC FUNCTIONS =====

// New Application sync (already working)
const syncLocalToCloud_New = async () => {
  if (!isSupabaseConnected) {
    console.warn("⏩ Skipping Local → Cloud (NewApplication) sync (Supabase offline)");
    return;
  }
  try {
    const users = await db.User.findAll();
    let insertedCount = 0;
    for (const user of users) {
      const exists = await db.NewApplication.findOne({ where: { id: user.id } });
      if (!exists) {
        await db.NewApplication.create(user.toJSON());
        insertedCount++;
        console.log(`Inserted newApplication id=${user.id} into cloud DB`);
      }
    }
    console.log(`Local → Cloud (NewApplication) sync complete: ${insertedCount} inserted.`);
  } catch (err) {
    console.error("Sync error (Local → Cloud NewApplication):", err.message);
    isSupabaseConnected = false;
  }
};

const syncCloudToLocal_New = async () => {
  if (!isSupabaseConnected) {
    console.warn("⏩ Skipping Cloud → Local (NewApplication) sync (Supabase offline)");
    return;
  }
  try {
    const cloudUsers = await db.NewApplication.findAll();
    let insertedCount = 0;
    for (const user of cloudUsers) {
      const exists = await db.User.findOne({ where: { id: user.id } });
      if (!exists) {
        await db.User.create(user.toJSON());
        insertedCount++;
        console.log(`Inserted newApplication id=${user.id} into local DB`);
      }
    }
    console.log(`Cloud → Local (NewApplication) sync complete: ${insertedCount} inserted.`);
  } catch (err) {
    console.error("Sync error (Cloud → Local NewApplication):", err.message);
    isSupabaseConnected = false;
  }
};

// Renew Application sync (new)
const syncLocalToCloud_Renew = async () => {
  if (!isSupabaseConnected) {
    console.warn("⏩ Skipping Local → Cloud (Renew) sync (Supabase offline)");
    return;
  }
  try {
    const renewLocal = await db.renew.findAll();
    let insertedCount = 0;
    for (const record of renewLocal) {
      const exists = await db.renewApplication.findOne({ where: { id: record.id } });
      if (!exists) {
        await db.renewApplication.create(record.toJSON());
        insertedCount++;
        console.log(`Inserted renew id=${record.id} into cloud DB`);
      }
    }
    console.log(`Local → Cloud (Renew) sync complete: ${insertedCount} inserted.`);
  } catch (err) {
    console.error("Sync error (Local → Cloud Renew):", err.message);
    isSupabaseConnected = false;
  }
};

const syncCloudToLocal_Renew = async () => {
  if (!isSupabaseConnected) {
    console.warn("⏩ Skipping Cloud → Local (Renew) sync (Supabase offline)");
    return;
  }
  try {
    const renewCloud = await db.renewApplication.findAll();
    let insertedCount = 0;
    for (const record of renewCloud) {
      const exists = await db.renew.findOne({ where: { id: record.id } });
      if (!exists) {
        await db.renew.create(record.toJSON());
        insertedCount++;
        console.log(`Inserted renew id=${record.id} into local DB`);
      }
    }
    console.log(`Cloud → Local (Renew) sync complete: ${insertedCount} inserted.`);
  } catch (err) {
    console.error("Sync error (Cloud → Local Renew):", err.message);
    isSupabaseConnected = false;
  }
};


const retrySupabaseConnection = async () => {
  if (isSupabaseConnected) return; // already connected
  try {
    await db.supabase.authenticate();
    console.log("✅ Reconnected to Supabase!");
    isSupabaseConnected = true;
  } catch {
    console.warn("🔄 Supabase still offline...");
  }
};

   // ===== INITIAL SYNC =====
await syncLocalToCloud_New();
await syncCloudToLocal_New();
await syncLocalToCloud_Renew();
await syncCloudToLocal_Renew();

// ===== INTERVALS =====
setInterval(retrySupabaseConnection, 60000); // retry connection every 1 min

// New Application sync intervals
setInterval(syncLocalToCloud_New, 300000);
setInterval(syncCloudToLocal_New, 300000);

// Renew Application sync intervals
setInterval(syncLocalToCloud_Renew, 300000);
setInterval(syncCloudToLocal_Renew, 300000);
   // sync every 5 min

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Startup error:", err.message);
  }
})();
