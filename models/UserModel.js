//UserModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true},
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
        postalCode: { type: String, required: true}
    },
    phone: { type: String },
    avatar: { type: String }
}, { versionKey: false });

const User = mongoose.model('User', userSchema);

export default User;
