import { Schema, model, Document } from 'mongoose';

// Interface for the OTPSession model
interface IOTPSession extends Document {
    phone: string;
    otp: string;
    createdAt: Date;
    expiresAt: Date;
}

// Define the OTPSession schema
const OTPSessionSchema = new Schema<IOTPSession>({
    phone: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    expiresAt: {
        type: Date,
        required: true,
    },
});

// Create the OTPSession model
const OTPSession = model<IOTPSession>('OTPSession', OTPSessionSchema);

export default OTPSession;