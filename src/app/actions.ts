'use server';

import { z } from 'zod';

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

  // Here you would typically send an email, e.g., using Resend, Nodemailer, etc.
  // For this example, we'll just simulate a successful submission.
  console.log("Form submitted:", parsed.data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // You can uncomment the line below to test the error handling in the form.
  // return { success: false, error: "Failed to send message. Please try again later." };

  return { success: true };
}
