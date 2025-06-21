"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { personalizedProjectSuggestions } from "@/ai/flows/personalized-project-suggestions";
import type { PersonalizedProjectSuggestionsOutput } from "@/ai/flows/personalized-project-suggestions";
import { Wand2, Loader2, Lightbulb } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export function AiSuggestionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<PersonalizedProjectSuggestionsOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getSuggestions = async () => {
    setIsLoading(true);
    setError(null);
    setSuggestions(null);

    try {
      const history = JSON.parse(localStorage.getItem('browsingHistory') || '[]');
      if (history.length === 0) {
        setError("You haven't viewed any projects yet. Explore a few projects to get personalized suggestions.");
        setIsLoading(false);
        return;
      }
      const result = await personalizedProjectSuggestions({ browsingHistory: history.join(', ') });
      setSuggestions(result);
    } catch (e) {
      setError("Sorry, an error occurred while generating suggestions. Please try again later.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl animate-pulse"
        >
          <Wand2 className="h-7 w-7" />
          <span className="sr-only">Get AI Suggestions</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-headline text-2xl">
            <Lightbulb className="h-6 w-6 text-primary" />
            Personalized Suggestions
          </DialogTitle>
          <DialogDescription>
            Based on your browsing, here are some projects you might like.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {!suggestions && !isLoading && !error && (
             <div className="text-center space-y-4">
                <p>Curious about what else you might like? Let our AI find projects tailored to your interests.</p>
                <Button onClick={getSuggestions}>Generate My Suggestions</Button>
            </div>
          )}
          {isLoading && (
            <div className="space-y-4">
              <div className="flex items-center justify-center text-muted-foreground">
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                <p>Analyzing your interests...</p>
              </div>
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          )}
          {error && <p className="text-destructive text-center">{error}</p>}
          {suggestions && (
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">Suggested Projects:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {suggestions.suggestedProjects.map((project, i) => (
                    <li key={i}>{project}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Reasoning:</h4>
                <p className="text-sm text-muted-foreground">{suggestions.reasoning}</p>
              </div>
               <Button onClick={getSuggestions} className="w-full mt-4">Regenerate</Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
