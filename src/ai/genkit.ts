
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';
import { initializeGenkit } from './init';

// Initialize server-side credentials
initializeGenkit();

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.0-flash',
});
