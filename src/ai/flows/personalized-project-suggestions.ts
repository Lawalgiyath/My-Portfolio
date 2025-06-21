'use server';

/**
 * @fileOverview An AI agent that provides personalized project suggestions based on user browsing history.
 *
 * - personalizedProjectSuggestions - A function that generates personalized project suggestions.
 * - PersonalizedProjectSuggestionsInput - The input type for the personalizedProjectSuggestions function.
 * - PersonalizedProjectSuggestionsOutput - The return type for the personalizedProjectSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedProjectSuggestionsInputSchema = z.object({
  browsingHistory: z
    .string()
    .describe('The browsing history of the user on the portfolio website.'),
});
export type PersonalizedProjectSuggestionsInput = z.infer<
  typeof PersonalizedProjectSuggestionsInputSchema
>;

const PersonalizedProjectSuggestionsOutputSchema = z.object({
  suggestedProjects: z
    .array(z.string())
    .describe(
      'A list of project names that are suggested to the user based on their browsing history.'
    ),
  reasoning: z
    .string()
    .describe(
      'The reasoning behind the project suggestions, explaining why these projects are relevant to the user.'
    ),
});
export type PersonalizedProjectSuggestionsOutput = z.infer<
  typeof PersonalizedProjectSuggestionsOutputSchema
>;

export async function personalizedProjectSuggestions(
  input: PersonalizedProjectSuggestionsInput
): Promise<PersonalizedProjectSuggestionsOutput> {
  return personalizedProjectSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedProjectSuggestionsPrompt',
  input: {schema: PersonalizedProjectSuggestionsInputSchema},
  output: {schema: PersonalizedProjectSuggestionsOutputSchema},
  prompt: `You are an AI assistant that provides personalized project suggestions to users of a portfolio website.

You will receive the browsing history of the user on the website. Based on this browsing history, you will suggest a list of projects that the user might be interested in.

You will also provide a reasoning for why these projects are suggested.

Browsing History: {{{browsingHistory}}}`,
});

const personalizedProjectSuggestionsFlow = ai.defineFlow(
  {
    name: 'personalizedProjectSuggestionsFlow',
    inputSchema: PersonalizedProjectSuggestionsInputSchema,
    outputSchema: PersonalizedProjectSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
