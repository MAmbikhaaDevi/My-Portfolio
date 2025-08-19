'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        <Link href="#home" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-headline text-lg font-bold text-primary-foreground">
            AD
          </div>
          <span className="font-headline text-xl font-bold hidden sm:inline">Ambikhaa Devi</span>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Button key={item} variant="ghost" asChild>
              <Link href={`#${item.toLowerCase()}`} className="text-base font-medium hover:text-primary transition-colors">
                {item}
              </Link>
            </Button>
          ))}
        </div>
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col items-center justify-center h-full">
                <nav className="flex flex-col items-center gap-8">
                  {navItems.map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-2xl font-headline hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
