import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  service: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  service,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>
      You have received a new message from your website contact form.
    </p>
    <ul>
      <li><strong>Name:</strong> {name}</li>
      <li><strong>Email:</strong> {email}</li>
      <li><strong>Service:</strong> {service}</li>
    </ul>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);

export default ContactFormEmail;