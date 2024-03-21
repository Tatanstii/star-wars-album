'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { useStickerDetails } from '@/store/sticker-details';
import { Category } from '@/types/album';
import { FilmSticker, StickerType } from '@/types/sticker-pack';
import React from 'react';
import { FaX } from 'react-icons/fa6';
import { GiAlienBug, GiFilmSpool, GiSpaceShuttle } from 'react-icons/gi';

export default function StickerDetails() {
  const { sticker, removeSticker } = useStickerDetails((state) => state);

  if (!sticker) return null;

  return (
    <div className='fixed inset-0 z-40 bg-black/70 p-10'>
      <div className='h-full w-full place-items-center md:grid'>
        <Card className='max-h-[650px] min-w-[400px] max-w-4xl overflow-y-auto'>
          <CardHeader>
            <div className='mb-4 flex flex-row items-center justify-end gap-10'>
              <Button variant='ghost' onClick={removeSticker}>
                <FaX />
              </Button>
            </div>
            <div className='flex w-full flex-row justify-between'>
              <CardTitle className='text-xl'>
                {sticker.category == Category.FILM
                  ? (sticker as FilmSticker).content.title
                  : sticker.content.name}
              </CardTitle>
              <p className='font-starjedi text-lg'>
                <span className='mr-2'>#</span>
                {sticker.id}
              </p>
            </div>
          </CardHeader>
          <CardContent className='flex flex-col gap-5'>
            <div className='flex flex-row gap-3'>
              <Badge className='text-secondary-foreground'>
                {sticker.category}
              </Badge>
              <Badge
                className={cn('bg-slate-700', {
                  'bg-rose-900': sticker.type === StickerType.SPECIAL,
                })}
              >
                {sticker.type}
              </Badge>
            </div>
            <div className='flex flex-col gap-10 md:flex-row'>
              <div className='grid w-full place-items-center'>
                {sticker.category === Category.CHARACTER && (
                  <GiAlienBug size={300} className='text-slate-900' />
                )}
                {sticker.category === Category.STARSHIP && (
                  <GiSpaceShuttle size={300} className='text-slate-900' />
                )}
                {sticker.category === Category.FILM && (
                  <GiFilmSpool size={300} className='text-slate-900' />
                )}
              </div>
              <ScrollArea className='h-[400px] w-full rounded-md border p-5'>
                {Object.entries(sticker.content).map(([key, value]) => (
                  <div
                    key={key}
                    className='flex flex-col gap-2 md:flex-row md:gap-5'
                  >
                    <p className='font-bold'>{key}</p>
                    <p>{value}</p>
                  </div>
                ))}
              </ScrollArea>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
