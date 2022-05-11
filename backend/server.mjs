import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/questionRoutes.mjs";
import { errorHandler } from "./middleware/errorMiddleware.mjs";

//App variables
const app = express();
const env = dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/questions", router);
app.use(errorHandler);

//Listen to PORT
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
