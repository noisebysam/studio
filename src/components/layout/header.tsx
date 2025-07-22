'use client';

import { useState } from 'react';
import { Menu, Music, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Music className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">Sam Head Audio</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
          <Button asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <a href="#" className="flex items-center gap-2" onClick={handleLinkClick}>
                    <Music className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg font-bold">Sam Head Audio</span>
                  </a>
                </div>
                <nav className="flex flex-col items-start gap-4 p-4">
                  {navLinks.map((link) => (
                    <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-lg font-medium transition-colors hover:text-primary">
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto p-4">
                  <Button asChild className="w-full">
                    <a href="#contact" onClick={handleLinkClick}>Get a Quote</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
