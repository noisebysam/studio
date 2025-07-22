'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import ContactFormEmail from '@/components/emails/contact-form-email';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  service: z.string(),
  message: z.string(),
});

type ContactFormState = {
  success: boolean;
  error?: string | null;
}

export async function submitContactForm(values: z.infer<typeof contactFormSchema>): Promise<ContactFormState> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data." };
  }

  const { name, email, service, message } = parsed.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: ['noisebysam@gmail.com'],
      subject: 'New Message from your Website!',
      reply_to: email,
      react: React.createElement(ContactFormEmail, {
        name,
        email,
        service,
        message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send message. Please try again later." };
    }

    return { success: true };
  } catch (exception) {
    console.error("Exception sending email:", exception);
    return { success: false, error: "An unexpected error occurred. Please try again later." };
  }
}
