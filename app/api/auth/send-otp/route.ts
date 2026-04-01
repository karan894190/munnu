import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import OTPSession from '@/models/OTPSession';
import User from '@/models/User';
import { generateOTP, sendOTP } from '@/lib/sms';

export async function POST(request: NextRequest) {
    await dbConnect();
    try {
        const { phone } = await request.json();
        if (!phone) {
            return NextResponse.json({ success: false, message: 'Phone number is required' }, { status: 400 });
        }
        const otp = generateOTP();
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
        await OTPSession.updateOne(
            { phone },
            { phone, otp, expiresAt, attempts: 0 },
            { upsert: true }
        );
        const smsResult = await sendOTP(phone, otp);
        if (!smsResult.success) {
            return NextResponse.json({ success: false, message: 'Failed to send OTP' }, { status: 500 });
        }
        return NextResponse.json({ success: true, message: 'OTP sent successfully' });
    } catch (error) {
        console.error('Send OTP error:', error);
        return NextResponse.json({ success: false, error: error }, { status: 500 });
    }
}