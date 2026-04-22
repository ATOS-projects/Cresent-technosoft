import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, role, inquiryType, message, source, company, subject } = body;

        if (!name || !email) {
            return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
        }

        // Expanded decision tree depending on support type
        const type = inquiryType || 'General';
        
        let destinationEmail = 'developercrescenttechnosoft@gmail.com';
        // You could theoretically change this based on the dropdown:
        // if (type === 'Sales & Demo') destinationEmail = 'sales@crescent-technosoft.com';
        // else if (type === 'Technical Support') destinationEmail = 'support@crescent-technosoft.com';

        // We use the default test sender from Resend.
        const senderInfo = process.env.NODE_ENV === 'production' 
            ? 'Acme <onboarding@resend.dev>' 
            : 'Acme <onboarding@resend.dev>';

        const data = await resend.emails.send({
            from: senderInfo,
            to: [destinationEmail], 
            subject: `[${type}] Lead: ${source || 'Website'} - ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                    <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">New Inquiry: ${type}</h2>
                    <br/>
                    <p><strong>Category:</strong> ${type}</p>
                    <p><strong>Source:</strong> ${source || 'Contact Page'}</p>
                    <p><strong>Name:</strong> ${name}</p
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                    <p><strong>Company/Organization:</strong> ${company || 'N/A'}</p>
                    <p><strong>Role:</strong> ${role || 'N/A'}</p>
                    <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
                    <br/>
                    <h3 style="color: #1e3a8a;">Message:</h3>
                    <div style="background-color: #f1f5f9; padding: 15px; border-left: 4px solid #1e3a8a;">
                        <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message || 'No additional message provided.'}</p>
                    </div>
                </div>
            `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('RESEND ERROR:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
