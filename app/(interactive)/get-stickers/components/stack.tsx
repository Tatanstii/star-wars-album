'use client';

import getNewStickerPack from '@/actions/get-new-sticker-pack';
import { useToast } from '@/components/ui/use-toast';
import { useRecentStickerPack } from '@/store/recent-sticker-pack';
import { useStickerPack } from '@/store/sticker-pack';
import type { StickerPackRule } from '@/types/sticker-pack';
import { lazy, startTransition, Suspense } from 'react';

const StickerPack = lazy(() => import('./stickers-pack'));

type Props = {
  rules: StickerPackRule[];
};

export default function StickersPackStock({ rules }: Props) {
  const { toast } = useToast();
  const { incrementStickerPackOpen, isLocked, stickerPackOpen } =
    useStickerPack((state) => state);
  const { setStickerPack } = useRecentStickerPack((state) => state);

  const handleOnClick = async (rule: StickerPackRule) => {
    const response = await getNewStickerPack(rule);

    if (response.error) {
      toast({
        variant: 'destructive',
        title: response.error,
      });
      return;
    }

    if (response.data) {
      startTransition(() => {
        setStickerPack(response.data);
      });
    }
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
