'use client';

import { useRecentStickerPack } from '@/store/recent-sticker-pack';
import { useEffect, useState } from 'react';
import Sticker from '../../../../components/sticker';
import { cn } from '@/lib/utils';
import Confetti from 'react-confetti';

const TIME_TO_SHOW_CONFETTI = 10000;

export default function NewStickerPack() {
  const [showConfetti, setShowConfetti] = useState(false);
  const { stickerPack: recentStickerPack } = useRecentStickerPack(
    (state) => state
  );
  

  useEffect(() => {
    if (recentStickerPack) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, TIME_TO_SHOW_CONFETTI);
    }
  }, [recentStickerPack]);

  if (!recentStickerPack) return null;

  return (
    <>
      {showConfetti && <Confetti />}
      <div className='absolute inset-0 bg-black/70 p-10'>
        <div className='grid h-full w-full place-items-center'>
          <div className='grid grid-cols-3 gap-5'>
            <div className=''>
              {recentStickerPack.characters.map((character, index) => (
                <div
                  key={character.id}
                  className={cn(
                    'absolute inset-0 z-40 grid h-full w-full place-items-center'
                  )}
                >
                  <Sticker
                    stickerType={character.type}
                    stickerCategory={character.category}
                    stickerNumber={character.id}
                    title={character.content.name}
                  />
                </div>
              ))}
              {recentStickerPack.films.map((film, index) => (
                <div
                  key={film.id}
                  className={cn(
                    'absolute inset-0 z-40 grid h-full w-full place-items-center '
                  )}
                >
                  <Sticker
                    stickerType={film.type}
                    stickerCategory={film.category}
                    stickerNumber={film.id}
                    title={film.content.title}
                  />
                </div>
              ))}
              {recentStickerPack.starships.map((starship, index) => (
                <div
                  key={starship.id}
                  className={cn(
                    'absolute inset-0 z-40 grid h-full w-full place-items-center '
                  )}
                >
                  <Sticker
                    stickerType={starship.type}
                    stickerCategory={starship.category}
                    stickerNumber={starship.id}
                    title={starship.content.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
