const express = require("express");
const adminRoutes = require("./src/routes/adminRoutes");
const swagger = require("./docs/swagger");
const app = express();

function createApp() {
  app.use(express.json());
  app.use(express.urlencoded());

  app.use("/api", adminRoutes);
  app.get("/", (req, res) => {
    res.send("Welcome to the API");
  });

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });

  swagger(app);
  return app;
}

module.exports = createApp;
