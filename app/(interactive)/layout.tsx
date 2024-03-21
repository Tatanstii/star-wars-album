import Navbar from '@/components/navbar';
import React from 'react';
import NewStickerPack from '@/app/(interactive)/get-stickers/components/stickers-dialog';

export default function InteractiveLayot({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className='relative px-20 py-10'>
      <header>
        <Navbar />
      </header>
      <main className='mt-10'>{children}</main>
      <NewStickerPack />
    </div>
  );
}
