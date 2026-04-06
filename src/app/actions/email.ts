'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: FormData) {
  const name = formData.get('user_name') as string;
  const email = formData.get('user_email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Missing required fields' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // You should update this to your verified domain later
      to: ['madhurika573@gmail.com'], // The recipient email from the original code
      replyTo: email, // This allows you to reply directly to the person who sent the message
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (err: any) {
    console.error('Unexpected Error:', err);
    return { error: err.message || 'Something went wrong while sending the email.' };
  }
}
