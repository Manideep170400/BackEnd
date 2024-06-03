import express from "express";
import cors from "cors";
import Mongoose from "./Backend/dataBase.mjs";

const app = express();
const port = 5171;

app.use(cors());
app.use(express.json());

await Mongoose.MONGO(app);

app.listen(port, () => {
  console.log(`server is created at http://localhost:${port}`);
});
