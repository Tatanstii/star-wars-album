import React from 'react';
import CategoryNav from './components/category-nav';

export default function AlbumLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className='flex flex-col gap-5'>
      <CategoryNav />
      {children}
    </div>
  );
}
