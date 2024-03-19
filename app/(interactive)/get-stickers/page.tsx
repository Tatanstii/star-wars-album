import React from 'react';
import StickersPackStock from './components/stack';
import { getStickerPackRules } from '@/actions/get-sticker-pack-rules';

export default async function GetStickersPage() {
  const stickerPackRules = await getStickerPackRules();

  return (
    <main className='md:h-[calc(100dvh - 64px)]'>
      <section className='h-full'>
        <StickersPackStock rules={stickerPackRules} />
      </section>
    </main>
  );
}
