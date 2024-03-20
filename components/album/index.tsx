"use client"

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
import Placeholder from './placeholder';
import { extractIdFormUrl } from '@/lib/utils';
import Sticker from '../sticker';

type Props = {
  items: CharacterSticker[] | FilmSticker[] | StarshipSticker[];
  placeholderItems: Film[] | Character[] | Starship[];
};

export default function Album({ items, placeholderItems }: Props) {
  return (
    <div className='grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10'>
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
                alreadyExist={true}
              />
            );
          }
        }

        return <Placeholder key={url} id={id} />;
      })}
    </div>
  );
}
