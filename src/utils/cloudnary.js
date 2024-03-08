import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadsOnCloudnary = async (filePath) => {
  try {
    if (!filePath) return null;
    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });
    //File has been loadede suceffully
    console.log("File Upload in cloudnary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localfile, (err) => {
      if (err) {
        console.log(`getting error ${err}`);
        return null;
      }
      console.log("File deleted from local server");
    });
  }
};
export default uploadsOnCloudnary;
