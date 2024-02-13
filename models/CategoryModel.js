// CategoryModel.js

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    //description: { type: String }
}, { versionKey: false });

const Category = mongoose.model('Category', categorySchema);

export default Category;
