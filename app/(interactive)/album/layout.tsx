import React from 'react';
import CategoryNav from './components/category-nav';
import StickerDetails from './components/sticker-details';

export default function AlbumLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className='relative flex flex-col gap-5'>
      <CategoryNav />
      {children}
      <StickerDetails />
    </div>
  );
}
