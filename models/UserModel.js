//UserModel.js

const userSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    nationality: { type: String },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
        postalCode: { type: String }
    },
    phone: { type: String }
}, { versionKey: false });

const User = mongoose.model('User', userSchema);

export default User;
