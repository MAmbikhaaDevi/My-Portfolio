'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendContactMessage - A function that handles sending the contact message.
 * - ContactFormInput - The input type for the sendContactMessage function.
 * - ContactFormOutput - The return type for the sendContactMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  message: z.string().describe('The message content.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  success: z.boolean(),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export async function sendContactMessage(input: ContactFormInput): Promise<ContactFormOutput> {
  return contactFlow(input);
}

const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    // In a real application, you would integrate an email sending service here.
    // For example, using Nodemailer with an SMTP service, or an API like SendGrid.
    
    console.log('Received contact form submission:');
    console.log('Name:', input.name);
    console.log('Email:', input.email);
    console.log('Message:', input.message);
    
    // This is where you would implement the email sending logic.
    // For now, we'll just simulate a successful submission.
    console.log(`Simulating sending email to mjambikhaadevi@gmail.com`);

    return { success: true };
  }
);
