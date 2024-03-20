import React from 'react';
import StickersPackStock from './components/stack';
import getStickerPackRules from '@/actions/get-sticker-pack-rules';
import NewStickerPack from '@/app/(interactive)/get-stickers/components/stickers-dialog';

export default async function GetStickersPage() {
  const stickerPackRules = await getStickerPackRules();

  return (
    <>
      <section className='md:h-[calc(100dvh - 64px)]'>
        <StickersPackStock rules={stickerPackRules} />
      </section>
      <NewStickerPack />
    </>
  );
}
