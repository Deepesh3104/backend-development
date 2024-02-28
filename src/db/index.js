import "dotenv/config";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const Connect = async () => {
  try {
    const hellow = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log("Connections succssfully", hellow.connection.host);
  } catch (error) {
    console.log(error, "Error connecting to the database");
    process.exit(1);
  }
};

export default Connect;
