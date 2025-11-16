
'use server';

/**
 * @fileOverview A flow that personalizes the demo request based on the user's business description.
 *
 * - personalizeDemoRequest - A function that handles the demo personalization process.
 * - PersonalizeDemoRequestInput - The input type for the personalizeDemoRequest function.
 * - PersonalizeDemoRequestOutput - The return type for the personalizeDemoRequest function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeDemoRequestInputSchema = z.object({
  businessDescription: z
    .string()
    .describe('A description of the user’s business and their needs.'),
});
export type PersonalizeDemoRequestInput = z.infer<typeof PersonalizeDemoRequestInputSchema>;

const PersonalizeDemoRequestOutputSchema = z.object({
  suggestedConfigurations: z
    .string()
    .describe('Suggested SilzeyPOS system configurations based on the business description.'),
  suggestedServices: z
    .string()
    .describe('Suggested additional services like business consulting or startup marketing.'),
});
export type PersonalizeDemoRequestOutput = z.infer<typeof PersonalizeDemoRequestOutputSchema>;

export async function personalizeDemoRequest(
  input: PersonalizeDemoRequestInput
): Promise<PersonalizeDemoRequestOutput> {
  return personalizeDemoRequestFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeDemoRequestPrompt',
  input: {schema: PersonalizeDemoRequestInputSchema},
  output: {schema: PersonalizeDemoRequestOutputSchema},
  prompt: `You are an expert in tailoring SilzeyPOS system configurations and services to meet the specific needs of cannabis dispensaries and businesses.

  Analyze the following business description to suggest relevant system configurations and additional services like business consulting or startup marketing.

  Business Description: {{{businessDescription}}}

  Provide your suggestions in a concise and professional manner.
  You should suggest the configurations by setting the "suggestedConfigurations" output field.
  You should suggest the services by setting the "suggestedServices" output field.
  `,
});

const personalizeDemoRequestFlow = ai.defineFlow(
  {
    name: 'personalizeDemoRequestFlow',
    inputSchema: PersonalizeDemoRequestInputSchema,
    outputSchema: PersonalizeDemoRequestOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
