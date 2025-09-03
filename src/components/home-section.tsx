'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HomeSection() {
  const name = "Ambikhaa Devi";
  const roles = ['Creative Web Developer', 'Software Developer', 'AI/ML'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsFading(false);
      }, 500); // fade-out duration
    }, 3000); // Time each role is displayed

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="flex min-h-screen flex-col items-center justify-center text-center relative">
      <div className="space-y-6">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
          {name.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === " " ? " " : char}
            </span>
          ))}
        </h1>
        <p className={cn("text-lg md:text-xl text-muted-foreground transition-opacity duration-500", isFading ? 'opacity-0' : 'opacity-100')}>
          {roles[currentRoleIndex]}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <Button size="lg" asChild className="glow-on-hover shake-on-hover">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="glow-on-hover shake-on-hover border-primary hover:bg-primary/10">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-muted-foreground" />
        </Link>
      </div>
    </section>
  );
}
