// orderController.js

import Order from '../models/OrderModel.js';

const OrderController = {
    getAllOrders: async (req, res) => {
        try {
            const orders = await Order.find();
            res.json(orders);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getOrderById: async (req, res) => {
        try {
            const { id } = req.params;
            const order = await Order.findById(id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found.' });
            }
            res.json(order);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    createOrder: async (req, res) => {
        try {
            const newOrder = await Order.create(req.body);
            res.status(201).json(newOrder);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    updateOrder: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedOrder) {
                return res.status(404).json({ message: 'Order not found.' });
            }
            res.json(updatedOrder);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    
    deleteOrder: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedOrder = await Order.findByIdAndDelete(id);
            if (!deletedOrder) {
                return res.status(404).json({ message: 'Order not found.' });
            }
            res.json({ message: 'Order deleted successfully.' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

export default OrderController;

