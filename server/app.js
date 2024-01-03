const express = require("express");
const adminRoutes = require("./src/routes/adminRoutes");
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded());

// Mounting admin routes
app.use("/api", adminRoutes);

// Example default route
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
