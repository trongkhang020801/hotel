const express = require("express");
const cors = require("cors");
var dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Le House Botique Hotel application." });
});

require("./app/routes/customer.routes")(app);

// set port, listen for requests
app.listen(process.env.PORT, () => {
    console.log('Server run in : http://localhost:'+process.env.PORT)
});