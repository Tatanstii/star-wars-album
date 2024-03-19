'use client';

import { useRecentStickerPack } from '@/store/recent-sticker-pack';
import React from 'react';

export default function NewStickerPack() {
  const { stickerPack: recentStickerPack } = useRecentStickerPack(
    (state) => state
  );

  if (!recentStickerPack) return null;

  return (
    <div className='absolute inset-0 h-full w-full bg-black/70'>
      <div className='grid h-full place-items-center'>
        <pre className='w-lg'>{JSON.stringify(recentStickerPack)}</pre>
      </div>
    </div>
  );
}
