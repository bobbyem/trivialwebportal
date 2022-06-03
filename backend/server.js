// const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require("cors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware.js");

//App variables
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

//CORS
app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/questions", require("./routes/questionRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);

//Listen to PORT
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
