// cartController.js

import Cart from '../models/CartModel.js';

const CartController = {
    getAllCarts: async (req, res) => {
        try {
            const carts = await Cart.find();
            res.json(carts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getCartById: async (req, res) => {
        try {
            const { id } = req.params;
            const cart = await Cart.findById(id);
            if (!cart) {
                return res.status(404).json({ message: 'Carrinho não encontrado.' });
            }
            res.json(cart);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    createCart: async (req, res) => {
        try {
            const newCart = await Cart.create(req.body);
            res.status(201).json(newCart);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    updateCart: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedCart = await Cart.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedCart) {
                return res.status(404).json({ message: 'Cart not found.' });
            }
            res.json(updatedCart);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    
    deleteCart: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedCart = await Cart.findByIdAndDelete(id);
            if (!deletedCart) {
                return res.status(404).json({ message: 'Cart not found.' });
            }
            res.json({ message: 'Cart deleted successfully.' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

export default CartController;
