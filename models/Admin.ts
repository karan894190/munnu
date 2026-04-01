import mongoose, { Schema } from 'mongoose';

const AdminSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, enum: ['super_admin', 'admin'], default: 'admin' },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

const Admin = mongoose.model('Admin', AdminSchema);

export default Admin;