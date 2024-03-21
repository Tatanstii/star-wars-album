'use client';

import getNewStickerPack from '@/actions/get-new-sticker-pack';
import { useToast } from '@/components/ui/use-toast';
import { useRecentStickerPack } from '@/store/recent-sticker-pack';
import { useStickerPack } from '@/store/sticker-pack-settings';
import type { StickerPackRule } from '@/types/sticker-pack';
import { useEffect } from 'react';
import StickerPack from './sticker-pack';
import { MAX_STICKERS_PACK } from '@/lib/const';
import { useNewStickerPackCounter } from '@/store/new-sticker-pack-counter';

type Props = {
  rules: StickerPackRule[];
};

export default function StickersPackStock({ rules }: Props) {
  const { toast } = useToast();
  const { isLocked, stickerPackOpen, addOpenStickerPack, lock, unlock } =
    useStickerPack((state) => state);

  const { setAll } = useRecentStickerPack((state) => state);
  const { startTimer, interval } = useNewStickerPackCounter((state) => state);
  const handleOnClick = async (rule: StickerPackRule, index: number) => {
    const response = await getNewStickerPack(rule);

    if (response.error) {
      toast({
        variant: 'destructive',
        title: response.error,
      });
      return;
    }

    if (response.data) {
      toast({
        title: 'Puedes ver tus láminas obtenidas en "Mi álbum"',
      });
      setAll(response.data);
      addOpenStickerPack(index);
      lock();
      if (stickerPackOpen.length != MAX_STICKERS_PACK - 1 && !interval) {
        startTimer();
      }
    }
  };

  useEffect(() => {
    if (!interval) {
      unlock();
    }
    if (interval) {
      lock();
    }
  }, [interval, unlock, lock]);

  return (
    <div className='h-full'>
      <p className='mb-4'>Seleccione un paquete</p>
      <div className='grid h-full grid-cols-1 place-items-center gap-5 md:grid-cols-4 '>
        {rules.map((rule, index) => {
          return (
            <StickerPack
              key={index}
              index={index}
              rule={rule}
              isOpen={stickerPackOpen.includes(index)}
              isLocked={isLocked}
              onClick={handleOnClick}
            />
          );
        })}
      </div>
    </div>
  );
}
