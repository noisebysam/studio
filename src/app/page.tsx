import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactForm } from '@/components/contact-form';
import { AudioPlayer } from '@/components/audio-player';
import { SlidersHorizontal, Mic, Waves, Music } from 'lucide-react';

const services = [
  {
    icon: <SlidersHorizontal className="h-8 w-8 text-primary" />,
    title: 'Mixing',
    description: 'Perfectly balanced, dynamic, and clear mixes that bring your music to life. I focus on enhancing the emotional impact of every track.',
  },
  {
    icon: <Waves className="h-8 w-8 text-primary" />,
    title: 'Mastering',
    description: 'Radio-ready masters optimized for all streaming platforms. I ensure your music sounds loud, clear, and professional everywhere.',
  },
  {
    icon: <Mic className="h-8 w-8 text-primary" />,
    title: 'Vocal Production',
    description: 'Crystal-clear and expressive vocal tracks. From tuning and timing to effects and layering, I make your vocals shine.',
  },
  {
    icon: <Music className="h-8 w-8 text-primary" />,
    title: 'Full Production',
    description: 'Need help from the ground up? I offer full production services, taking your song idea from a demo to a finished master.',
  },
];

const audioSamples = [
  {
    artist: 'The Wandering Souls',
    song: 'Midnight Train',
    coverArt: 'https://placehold.co/300x300.png',
    dataAiHint: 'indie band'
  },
  {
    artist: 'Electric Dreams',
    song: 'Neon Future',
    coverArt: 'https://placehold.co/300x300.png',
    dataAiHint: 'electronic music'
  },
  {
    artist: 'Luna Rae',
    song: 'Fading Light',
    coverArt: 'https://placehold.co/300x300.png',
    dataAiHint: 'female singer'
  },
];

const testimonials = [
  {
    quote: "Sam took our tracks to a level we didn't think was possible. The clarity and punch are just incredible. A true professional and a pleasure to work with.",
    name: 'Alex Rivera',
    title: 'Lead Singer, The Wandering Souls',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'man portrait'
  },
  {
    quote: "The master was loud, clean, and translated perfectly on every system. Sam's attention to detail is second to none. Highly recommended!",
    name: 'Jasmine Lee',
    title: 'Producer, Electric Dreams',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman portrait'
  },
  {
    quote: "Working with Sam was a game-changer for my EP. He understood my vision and brought a professional polish that made all the difference.",
    name: 'Kenzo Tanaka',
    title: 'Solo Artist',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'asian man'
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative py-24 md:py-32 lg:py-40 bg-muted/30">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Audio mixing console"
            fill
            className="object-cover opacity-20"
            data-ai-hint="mixing console"
            priority
          />
          <div className="container max-w-7xl text-center relative z-20">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              noisebysam
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              Crafting professional, industry-standard sound for your music. I'm Sam, a mixing and mastering engineer dedicated to making your art shine.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#contact">Get a Quote</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#work">Hear My Work</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="container max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">My Services</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                From polishing a single to producing a full album, I offer a range of services to meet your audio needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="flex flex-col text-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="items-center">
                    {service.icon}
                    <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="py-16 md:py-24 bg-muted/50">
          <div className="container max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Before & After</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear the difference professional mixing and mastering can make. Toggle between the original and my final version.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {audioSamples.map((sample, index) => (
                <AudioPlayer key={index} {...sample} />
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24">
          <div className="container max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">What My Clients Say</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm proud to have collaborated with so many talented artists.
              </p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col justify-between h-full shadow-lg">
                        <CardContent className="pt-6">
                          <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
                        </CardContent>
                        <CardHeader className="flex flex-row items-center gap-4">
                           <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </CardHeader>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>
        
        <section id="contact" className="py-16 md:py-24 bg-muted/50">
          <div className="container max-w-4xl">
             <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Let's Work Together</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to elevate your sound? Fill out the form below for a quote or to ask any questions.
              </p>
            </div>
            <Card className="p-4 sm:p-8 shadow-2xl">
              <CardContent className="p-0">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
