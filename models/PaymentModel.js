// PaymentModel.js

const paymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    transactionDate: { type: Date, default: Date.now }
}, { versionKey: false });

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
