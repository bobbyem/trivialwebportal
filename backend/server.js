const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const router = require("./routes/questionRoutes.js");
const { errorHandler } = require("./middleware/errorMiddleware.js");

//App variables
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/questions", router);
app.use(errorHandler);

//Listen to PORT
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
