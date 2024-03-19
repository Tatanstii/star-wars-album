'use client';

import { getFilms } from '@/data/films';
import { useStickerPack } from '@/store/sticker-pack';
import type { StickerPackRule } from '@/types/sticker-pack';
import { lazy, Suspense } from 'react';

const StickerPack = lazy(() => import('./stickers-pack'));

type Props = {
  rules: StickerPackRule[];
};

export default function StickersPackStock({ rules }: Props) {
  const { incrementStickerPackOpen, isLocked, stickerPackOpen } =
    useStickerPack((state) => state);

  const handleOnClick = async (rule: StickerPackRule) => {
    const films = await getFilms();

    console.log(films);
  };

  return (
    <div className='h-full'>
      <div className='grid h-full grid-cols-4 place-items-center gap-5 px-20 py-10'>
        <Suspense fallback={<div>Loading...</div>}>
          {rules.map((rule, index) => {
            return (
              <StickerPack
                key={index}
                rule={rule}
                isOpen={index + 1 <= stickerPackOpen}
                isLocked={isLocked}
                onClick={handleOnClick}
              />
            );
          })}
        </Suspense>
      </div>
    </div>
  );
}
