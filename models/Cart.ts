import mongoose, { Schema } from 'mongoose';

// Cart Schema
const CartSchema = new Schema({
    userId: { type: String, required: true },
    items: [{
        productId: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 }
    }],
    total: { type: Number, required: true, default: 0 },
}, { timestamps: true });

const Cart = mongoose.model('Cart', CartSchema);

export default Cart;