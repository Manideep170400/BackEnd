import mongoose from "mongoose";
import api from "./api.mjs";

const mongoDB_URL =
  "mongodb+srv://manideepreddy170400:Manideep100@cluster0.tvgnemc.mongodb.net/baseData";

async function MONGO(app) {
  mongoose
    .connect(mongoDB_URL)
    .then(() => {
      console.log("connected a mongoDB ");
      api.api(app);
    })
    .catch((error) => {
      console.error("error", error);
      console.log("not connected a mongoDB");
    });
}

export default {
  MONGO,
};
