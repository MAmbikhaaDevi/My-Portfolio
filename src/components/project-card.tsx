import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  emoji: string;
  githubUrl?: string;
  liveUrl?: string;
};

export function ProjectCard({ title, emoji, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="flex flex-col bg-primary/10 hover:bg-primary/20 backdrop-blur-sm overflow-hidden transform transition-all duration-300 hover:-translate-y-2 glow-on-hover shake-on-hover">
      <CardHeader>
        <div className="text-6xl mb-4" role="img" aria-label="project thumbnail emoji">{emoji}</div>
        <CardTitle className="font-headline text-xl h-14">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow"></CardContent>
      <CardFooter className="gap-2 pt-4">
        {liveUrl && (
          <Button asChild className="w-full">
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ArrowUpRight className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
        {githubUrl && (
          <Button variant={liveUrl ? 'secondary' : 'default'} asChild className="w-full">
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
