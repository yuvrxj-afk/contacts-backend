const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please Add username"],
    },
    email: {
      type: String,
      required: [true, "Please Add email address"],
      unique: [true, "Email registered already."],
    },
    password: {
      type: String,
      required: [true, "Please Add user Password"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
