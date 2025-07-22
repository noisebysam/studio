import { Github, Twitter, Linkedin, Music } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted py-8 text-muted-foreground">
      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Music className="h-5 w-5 text-primary" />
          <span className="font-headline text-lg font-bold">noisebysam</span>
        </div>
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} noisebysam. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
