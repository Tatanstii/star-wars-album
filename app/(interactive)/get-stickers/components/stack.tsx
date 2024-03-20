'use client';

import getNewStickerPack from '@/actions/get-new-sticker-pack';
import { useToast } from '@/components/ui/use-toast';
import { useRecentStickerPack } from '@/store/recent-sticker-pack';
import { useStickerPack } from '@/store/sticker-pack-settings';
import type { StickerPackRule } from '@/types/sticker-pack';
import { useEffect } from 'react';
import StickerPack from './sticker-pack';
import { MAX_STICKERS_PACK } from '@/lib/const';

type Props = {
  rules: StickerPackRule[];
};

const INTERVAL_TIME = 1000;
const TIMER_TIME = 60 * 1000;

export default function StickersPackStock({ rules }: Props) {
  const { toast } = useToast();
  const {
    isLocked,
    stickerPackOpen,
    addOpenStickerPack,
    lock,
    unlock,
    timer,
    setTimer,
  } = useStickerPack((state) => state);
  const { setAll } = useRecentStickerPack((state) => state);

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
      setAll(response.data);
      addOpenStickerPack(index);
      lock();
      setTimer(TIMER_TIME);
    }
  };

  useEffect(() => {
    if (timer != 0 && stickerPackOpen.length != MAX_STICKERS_PACK) {
      let interval = setInterval(() => {
        if (timer <= 0) {
          unlock();
          setTimer(0);
          clearInterval(interval);
        }
        setTimer(timer - INTERVAL_TIME);
      }, INTERVAL_TIME);
      return () => clearInterval(interval);
    }
  }, [timer, setTimer, unlock, stickerPackOpen.length]);

  useEffect(() => {
    if (timer === 0) {
      unlock();
    }
  }, [timer, unlock]);

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
