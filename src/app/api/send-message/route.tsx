import { NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Validation schema
const messageSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
});

// Configure email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

export async function POST(request: Request) {
    try {
        // Parse the request body
        const body = await request.json();
        
        // Validate the data
        const validatedData = messageSchema.parse(body);

        // Send email
        await transporter.sendMail({
            from: process.env.EMAIL_SENDER,
            to: process.env.EMAIL_RECIPIENT,
            subject: `New Contact Form Message from Website`,
            text: `
                Name: ${validatedData.name}
                Email: ${validatedData.email}
                Message: ${validatedData.message}
            `,
            html: `
                <h2>New Contact Form Message</h2>
                <p><strong>Name:</strong> ${validatedData.name}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                <p><strong>Message:</strong> ${validatedData.message}</p>
            `
        });

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}