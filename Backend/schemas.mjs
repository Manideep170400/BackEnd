import mongoose, { Schema } from "mongoose";

const CreateAccountSchema = new Schema({
  Email: String,
  Password: String,
  confirmPassword: String,
});

const passwordSchema = new Schema({
  Email: String,
  Password: String,
});

async function init() {
  const createAccount = mongoose.model("createacconut", CreateAccountSchema);
  const Password = mongoose.model("password", passwordSchema);

  return {
    createAccount,
    Password,
  };
}

export default {
  init,
};
