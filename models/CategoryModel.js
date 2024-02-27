import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true
  },
  description: { 
    type: String, 
    required: true 
  },
  meta_tags: [{
    type: String
  }], // keywords for SEO
  images: [{ 
    type: String 
  }],
}, { versionKey: false });

const Category = mongoose.model("Category", categorySchema);

export default Category;
