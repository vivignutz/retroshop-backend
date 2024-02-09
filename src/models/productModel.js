//ProductModel.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String },
    material: { type: String },
    manufactured: { type: Number, required: true },
    condition: {
        type: String,
        enum: ["New/Unused", "Used/Excellent", "Used/Good", "Used/Fair", "Poor"],
        required: true,
    },
    dimensions: {
        type: {
        width: { type: Number },
        height: { type: Number },
        depth: { type: Number },
        },
    },
    origin: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    hasProvenanceDocumentation: { type: Boolean, required: true, default: false }
}, { versionKey: false });

const product = mongoose.model("products", productSchema);

export default product;
