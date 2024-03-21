'use client';

import { useRecentStickerPack } from '@/store/recent-sticker-pack';
import { useEffect, useState } from 'react';
import Sticker from '@/components/sticker';
import { checkExistSticker, cn } from '@/lib/utils';
import Confetti from 'react-confetti';
import { useAlbum } from '@/store/album';
import { StickerPack } from '@/types/sticker-pack';
import { Category } from '@/types/album';

const TIME_TO_SHOW_CONFETTI = 10000;

const isEmptyStickerPack = (stickerPack: StickerPack) => {
  return (
    stickerPack.characters.length === 0 &&
    stickerPack.films.length === 0 &&
    stickerPack.starships.length === 0
  );
};

export default function StickersDialog() {
  const [showConfetti, setShowConfetti] = useState(false);

  const { stickerPack, remove } = useRecentStickerPack((state) => state);
  const { album, addSticker } = useAlbum((state) => state);

  useEffect(() => {
    if (stickerPack) {
      if (!isEmptyStickerPack(stickerPack)) {
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, TIME_TO_SHOW_CONFETTI);
      }
    }
  }, [stickerPack]);

  if (isEmptyStickerPack(stickerPack)) return null;

  const handleOnClick = async (
    id: number,
    category: Category,
    alreadyExist: boolean
  ) => {
    if (!alreadyExist) {
      if (category === Category.CHARACTER) {
        const sticker = stickerPack.characters.find(
          (character) => character.id === id
        );
        if (sticker) {
          await addSticker(sticker, category);
        }
      }
      if (category === Category.FILM) {
        const sticker = stickerPack.films.find((film) => film.id === id);
        if (sticker) {
          await addSticker(sticker, category);
        }
      }
      if (category === Category.STARSHIP) {
        const sticker = stickerPack.starships.find(
          (starship) => starship.id === id
        );
        if (sticker) {
          await addSticker(sticker, category);
        }
      }
    }
    await remove(id, category);
  };

  return (
    <>
      {showConfetti && <Confetti />}
      <div className='fixed inset-0 bg-black/70 p-10'>
        <div className='grid h-full w-full place-items-center'>
          <div className='grid grid-cols-3 gap-5'>
            <div className=''>
              {stickerPack.characters.map((character) => (
                <div
                  key={character.id}
                  className={cn(
                    'absolute inset-0 z-40 grid h-full w-full place-items-center'
                  )}
                >
                  <Sticker
                    id={character.id + character.category.length + character.content.name.length}
                    stickerType={character.type}
                    stickerCategory={character.category}
                    stickerNumber={character.id}
                    title={character.content.name}
                    actionText={
                      checkExistSticker(character, album)
                        ? 'Descartar'
                        : 'Agregar al album'
                    }
                    onClick={() =>
                      handleOnClick(
                        character.id,
                        character.category,
                        checkExistSticker(character, album)
                      )
                    }
                  />
                </div>
              ))}
              {stickerPack.films.map((film, index) => (
                <div
                  key={film.id}
                  className={cn(
                    'absolute inset-0 z-40 grid h-full w-full place-items-center '
                  )}
                >
                  <Sticker
                    id={film.id + film.category.length + film.content.title.length}
                    stickerType={film.type}
                    stickerCategory={film.category}
                    stickerNumber={film.id}
                    title={film.content.title}
                    actionText={
                      checkExistSticker(film, album)
                        ? 'Descartar'
                        : 'Agregar al album'
                    }
                    onClick={() =>
                      handleOnClick(
                        film.id,
                        film.category,
                        checkExistSticker(film, album)
                      )
                    }
                  />
                </div>
              ))}
              {stickerPack.starships.map((starship, index) => (
                <div
                  key={starship.id + starship.category.length + starship.content.name.length}
                  className={cn(
                    'absolute inset-0 z-40 grid h-full w-full place-items-center '
                  )}
                >
                  <Sticker
                    id={starship.id}
                    stickerType={starship.type}
                    stickerCategory={starship.category}
                    stickerNumber={starship.id}
                    title={starship.content.name}
                    actionText={
                      checkExistSticker(starship, album)
                        ? 'Descartar'
                        : 'Agregar al album'
                    }
                    onClick={() =>
                      handleOnClick(
                        starship.id,
                        starship.category,
                        checkExistSticker(starship, album)
                      )
                    }
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
