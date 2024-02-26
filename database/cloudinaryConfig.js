// cloudinaryConfig.js

import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "CLOUDINARY_CLOUD_NAME",
  api_key: "CLOUDINARY_API_KEY",
  api_secret: "CLOUDINARY_API_SECRET"
});

export default cloudinary;