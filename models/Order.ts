import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    orderId: { type: String, required: true },
    userId: { type: String, required: true },
    items: [{
        productId: { type: String, required: true },
        quantity: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['Pending', 'Completed', 'Failed'], required: true },
    orderStatus: { type: String, enum: ['Pending', 'Shipped', 'Delivered', 'Returned'], required: true },
    trackingNumber: { type: String },
    deliveryPartner: { type: String }
}, { timestamps: true });

const Order = mongoose.model('Order', OrderSchema);

export default Order;