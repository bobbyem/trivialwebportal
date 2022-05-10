import express from "express";
import cors from "cors";

//App variables
const app = express();
const PORT = process.env.PORT || 5000;

//Listen to PORT
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
