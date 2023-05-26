const db = require("mongoose");

db.connect("mongodb://localhost:27017/samvada", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to the database");
    // Perform database operations here
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

module.exports = db;
