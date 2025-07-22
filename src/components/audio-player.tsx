'use client'

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  artist: string;
  song: string;
  coverArt: string;
  dataAiHint: string;
}

export function AudioPlayer({ artist, song, coverArt, dataAiHint }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <Image src={coverArt} alt={`Cover art for ${song} by ${artist}`} width={300} height={300} className="w-full h-auto object-cover aspect-square" data-ai-hint={dataAiHint} />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="font-headline">{song}</CardTitle>
        <CardDescription>{artist}</CardDescription>
        <Tabs defaultValue="after" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="before">Before</TabsTrigger>
            <TabsTrigger value="after">After</TabsTrigger>
          </TabsList>
          <TabsContent value="before" className="mt-4">
            <p className="text-sm text-center text-muted-foreground">Original mix</p>
          </TabsContent>
          <TabsContent value="after" className="mt-4">
            <p className="text-sm text-center text-muted-foreground">Mixed & Mastered by Sam</p>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 px-4 pb-4">
        <Slider
          defaultValue={[progress]}
          max={100}
          step={1}
          onValueChange={(value) => setProgress(value[0])}
          className="w-full"
        />
        <Button onClick={togglePlay} variant="secondary" size="icon" className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
        </Button>
      </CardFooter>
    </Card>
  );
}
