'use client';

import {
  Category,
  type Character,
  type Film,
  type Starship,
} from '@/types/album';
import type {
  CharacterSticker,
  FilmSticker,
  StarshipSticker,
} from '@/types/sticker-pack';
import { extractIdFormUrl } from '@/lib/utils';
import { useStickerDetails } from '@/store/sticker-details';
import { lazy, Suspense } from 'react';
import { getFilm } from '@/data/films';
import { getCharacter } from '@/data/people';
import { getStarship } from '@/data/starships';
import { useToast } from '../ui/use-toast';

const Sticker = lazy(() => import('@/components/sticker'));
const Placeholder = lazy(() => import('@/components/album/placeholder'));

type Props = {
  items: CharacterSticker[] | FilmSticker[] | StarshipSticker[];
  placeholderItems: Film[] | Character[] | Starship[];
};

export default function Album({ items, placeholderItems }: Props) {
  const { setSticker } = useStickerDetails((state) => state);
  const { toast } = useToast();

  const handleOnClick = async (
    sticker: CharacterSticker | FilmSticker | StarshipSticker
  ) => {
    if (sticker.category == Category.FILM) {
      const data = await getFilm(sticker.id);
      if (!data) {
        toast({
          title: 'Error',
          description: 'No se pudo obtener la información de la película',
          variant: 'destructive',
        });
        return;
      }
      setSticker({
        ...sticker,
        content: data,
      });
    }
    if (sticker.category == Category.CHARACTER) {
      const data = await getCharacter(sticker.id);
      if (!data) {
        toast({
          title: 'Error',
          description: 'No se pudo obtener la información del personaje',
          variant: 'destructive',
        });
        return;
      }
      setSticker({
        ...sticker,
        content: data,
      });
    }
    if (sticker.category == Category.STARSHIP) {
      const data = await getStarship(sticker.id);
      if (!data) {
        toast({
          title: 'Error',
          description: 'No se pudo obtener la información de la nave',
          variant: 'destructive',
        });
        return;
      }
      setSticker({
        ...sticker,
        content: data,
      });
    }
  };

  return (
    <div className='grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10'>
      <Suspense fallback={<div>Loading...</div>}>
        {placeholderItems.map(({ url }) => {
          const id = extractIdFormUrl(url);
          if (items.some((item) => item.id === id)) {
            const sticker = items.find((item) => item.id === id);
            if (sticker) {
              return (
                <Sticker
                  key={sticker.id}
                  id={sticker.id}
                  stickerCategory={sticker.category}
                  stickerNumber={sticker.id}
                  stickerType={sticker.type}
                  title={
                    sticker.category == Category.FILM
                      ? (sticker as FilmSticker).content.title
                      : (sticker as CharacterSticker).content.name
                  }
                  actionText='Ver detalles'
                  onClick={() => handleOnClick(sticker)}
                />
              );
            }
          }

          return <Placeholder key={url} id={id} />;
        })}
      </Suspense>
    </div>
  );
}
