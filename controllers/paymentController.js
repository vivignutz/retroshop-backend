// paymentController.js

import Payment from '../models/PaymentModel.js';

const PaymentController = {
    getAllPayments: async (req, res) => {
        try {
            const payments = await Payment.find();
            res.json(payments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createPayment: async (req, res) => {
        try {
            const newPayment = await Payment.create(req.body);
            res.status(201).json(newPayment);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    updatePayment: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedPayment = await Payment.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedPayment) {
                return res.status(404).json({ message: 'Payment not found.' });
            }
            res.json(updatedPayment);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    deletePayment: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedPayment = await Payment.findByIdAndDelete(id);
            if (!deletedPayment) {
                return res.status(404).json({ message: 'Payment not found.' });
            }
            res.json({ message: 'Payment deleted successfully.' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

export default PaymentController;
