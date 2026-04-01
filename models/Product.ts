import mongoose, { Document, Model, Schema } from 'mongoose';

// Define the interface for a Product
interface IProduct extends Document {
    name: string;
    price: number;
    description: string;
    category: string;
    stock: number;
}

// Create the Product schema
const productSchema: Schema<IProduct> = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true }
}, { timestamps: true });

// Create the Product model
const Product: Model<IProduct> = mongoose.model<IProduct>('Product', productSchema);

export default Product;
