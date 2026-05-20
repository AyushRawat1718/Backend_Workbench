import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: [true, "password is required"], // second element is the message passed, when first condition violated
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
