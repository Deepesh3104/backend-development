const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // cloudnary services same as aws services
      required: true,
    },

    coverImages: {
      type: String, // cloudinary service url
    },

    watchHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    passwords: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToekn: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("passwords")) return next();
  this.passwords = await bcrypt.hash(this.passwords, 10);
  next();
});

userSchema.method.isPasswordCorrect = async function (passwords) {
  return await bcrypt.compare(passwords, this.passwords);
};
userSchema.method.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      usrname: this.userName,
      fullname: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: this.prototype.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
userSchema.method.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      usrname: this.userName,
      fullname: this.fullName,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: this.prototype.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
